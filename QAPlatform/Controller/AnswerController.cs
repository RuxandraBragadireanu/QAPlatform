using Microsoft.AspNetCore.Mvc;
using QAPlatform.DTOs;
using QAPlatform.Models;
using QAPlatform.Repositories.AnswerRepository;
using QAPlatform.Repositories.QuestionRepository;
using System;
using System.Collections.Generic;

namespace QAPlatform.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController: ControllerBase
    {
        private readonly IQuestionRepository questionRepository;

        public IAnswerRepository IAnswerRepository { get; set; }

        public AnswerController(IAnswerRepository repository , IQuestionRepository questionRepository)
        {
            IAnswerRepository = repository;
            this.questionRepository = questionRepository;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Answer>> Get()
        {
            return Ok(IAnswerRepository.GetAll());
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(Guid id)
        {
            var user = IAnswerRepository.Get(id);
            if(user != null)
            {
                return Ok(user);
            }
            return NotFound();
            
        }
        [HttpPost("add")]
        [ServiceFilter(typeof(ApiTokenFilter))]
        public void Post(AnswerDTO value,Guid userId)
        {
            
            var question = questionRepository.Get(value.QuestionId);
            if(question != null)
            {
                Answer model = new Answer()
                {
                    Content = value.Content,
                    Score = value.Score,
                    UserId = userId,
                    QuestionId = value.QuestionId
                };
                IAnswerRepository.Create(model);
            }

            
        }
        //PUT api/values
        [HttpPut("update/{id}")]
        [ServiceFilter(typeof(ApiTokenFilter))]
        public Answer Put(Guid id, AnswerDTO value)
        {
            Answer model = IAnswerRepository.Get(id);
            if (value.Content != null)
            {
                model.Content = value.Content;
            }
            
            if (value.Score != null)
            {
                model.Score = value.Score;
            }

            return IAnswerRepository.Update(model);
        }
        // DELETE api/values/5
        [HttpDelete("{id}")]
        [ServiceFilter(typeof(ApiTokenFilter))]
        public ActionResult<Answer> Delete(Guid id)
        {
            Answer answer = IAnswerRepository.Get(id);
            if (answer == null)
            {
                return Ok();
            }
            return Ok(IAnswerRepository.Delete(answer));
        }
    }
}
