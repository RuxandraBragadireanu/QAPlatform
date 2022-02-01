using Microsoft.AspNetCore.Mvc;
using QAPlatform.DTOs;
using QAPlatform.Models;
using QAPlatform.Repositories.QuestionRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QAPlatform.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        public IQuestionRepository IQuestionRepository { get; set; }

        public QuestionController(IQuestionRepository repository)
        {
            IQuestionRepository = repository;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return Ok(IQuestionRepository.GetAll());
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            return Ok(IQuestionRepository.Get(id));
        }
        //POST api/values
        [HttpPost("add")]
        [ServiceFilter(typeof(ApiTokenFilter))]
        public void Post(QuestionDTO value,Guid userId)
        {
            Question model = new Question()
            {
                Title = value.Title,
                Content = value.Content,
                Category = value.category,
                UserId = userId

            };
            IQuestionRepository.Create(model);
        }
        //PUT api/values
        [HttpPut("update/{id}")]
        [ServiceFilter(typeof(ApiTokenFilter))]
        public ActionResult<Question> Put(Guid id, QuestionDTO value)
        {
            Question model = IQuestionRepository.Get(id);

            if (value.Title != null)
            {
                model.Title= value.Title;
            }
            if (value.Content != null)
            {
                model.Content = value.Content;
            }
            if (value.category != null)
            {
                model.Category = value.category;
            }

            return Ok(IQuestionRepository.Update(model));
        }
        // DELETE api/values/5
        [HttpDelete("{id}")]
        [ServiceFilter(typeof(ApiTokenFilter))]

        public ActionResult<Question> Delete(Guid id)
        {
            Question question = IQuestionRepository.Get(id);
            if (question == null)
            {
                return Ok();
            }
            return Ok(IQuestionRepository.Delete(question));
        }



    }
}
