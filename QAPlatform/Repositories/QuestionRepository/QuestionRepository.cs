using Microsoft.EntityFrameworkCore;
using QAPlatform.Contexts;
using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.QuestionRepository
{
    public class QuestionRepository : IQuestionRepository
    {
        public Context Context { get; set; }

        public QuestionRepository(Context context)
        {
            Context = context;
        }
        public Question Create(Question question)
        {
            var result = Context.Add<Question>(question);
            Context.SaveChanges();
            return result.Entity;
        }

        public Question Delete(Question question)
        {
            IQueryable<Answer> questionAnswers = Context.Answers.Where(obj => obj.QuestionId == question.Id);
            if (questionAnswers.Any())
            {
                Context.RemoveRange(questionAnswers);
            }

            var result = Context.Remove(question);
            Context.SaveChanges();
            return result.Entity;
        }

        public Question Get(Guid id)
        {
            Question question = Context.Questions.SingleOrDefault(x => x.Id == id);
            if(question != null)
            {
                User user = Context.Users.FirstOrDefault(obj => obj.Id == question.UserId);
                question.User = user;

                List<Answer> answers = Context.Answers.Where(obj => obj.QuestionId == id).Include(obj => obj.User).ToList();
                question.Answers = answers;
            }

            return question;
        }

        public List<Question> GetAll()
        {
            return Context.Questions.ToList();
        }

        public Question Update(Question question)
        {
            Context.Entry(question).State = EntityState.Modified;
            Context.SaveChanges();
            return question;
        }
    }
}
