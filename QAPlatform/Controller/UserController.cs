using Microsoft.AspNetCore.Mvc;
using QAPlatform.DTOs;
using QAPlatform.Models;
using QAPlatform.Repositories.UserRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace QAPlatform.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserRepository IUserRepository { get; set; }

        public UserController(IUserRepository repository)
        {
            IUserRepository = repository;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Ok(IUserRepository.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(Guid id)
        {
            return Ok(IUserRepository.Get(id));
        }

        // POST api/values
        [HttpPost("register")]
        public ActionResult<User> Post(RegisterDTO value)
        {
            User MyUser = IUserRepository.GetAll().SingleOrDefault(x => x.Username == value.Username);
            if (MyUser != null)
            {
                return BadRequest("Username exists");
            }

            User model = new User()
            {
                Username = value.Username,
                Role = value.Role
            };

            new RNGCryptoServiceProvider().GetBytes(model.PassKey = new byte[16]);
            model.Password = new Rfc2898DeriveBytes(value.Password, model.PassKey, 10000).GetBytes(20);

            return Ok(IUserRepository.Create(model));
        }
        [HttpPost("login")]
        public ActionResult<User> Login(LoginDTO value)
        {
            User MyUser = IUserRepository.GetAll().SingleOrDefault(x => x.Username == value.Username);
            if (MyUser != null)
            {
                byte[] calculatedPassword = new Rfc2898DeriveBytes(value.Password, MyUser.PassKey, 10000).GetBytes(20);
                if (calculatedPassword.SequenceEqual(MyUser.Password))
                    return Ok(MyUser);
            }

            return Unauthorized();
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<User> Put(Guid id, RegisterDTO value)
        {
            User model = IUserRepository.Get(id);
            if (value.Username != null)
            {
                User MyUser = IUserRepository.GetAll().SingleOrDefault(x => x.Username == value.Username);
                if (MyUser != null)
                {
                    return BadRequest(new StringContent("Username exists"));
                }

                model.Username = value.Username;
            }

            model.Role = value.Role;         
      
            if (value.Password != null)
            {
                new RNGCryptoServiceProvider().GetBytes(model.PassKey = new byte[16]);
                model.Password = new Rfc2898DeriveBytes(value.Password, model.PassKey, 10000).GetBytes(20);
            }

            return Ok(IUserRepository.Update(model));
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult<User> Delete(Guid id)
        {
            User user = IUserRepository.Get(id);        
            if(user == null)
            {
                return Ok();
            }
            return Ok(IUserRepository.Delete(user));
        }
    }
}
