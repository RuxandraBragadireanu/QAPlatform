using Microsoft.EntityFrameworkCore;
using QAPlatform.Contexts;
using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.AnswerRepository
{
    public class AnswerRepository : IAnswerRepository
    {
        private Context Context { get; set; }

        public AnswerRepository(Context context)
        {
            Context = context;
        }

        public Answer Create(Answer answer)
        {
            var result = Context.Add<Answer>(answer);
            Context.SaveChanges();
            return result.Entity;
        }

        public Answer Delete(Answer answer)
        {
            var result = Context.Remove(answer);
            Context.SaveChanges();
            return result.Entity;
        }

        public Answer Get(Guid id)
        {
            return Context.Answers.SingleOrDefault(x => x.Id == id);
        }

        public List<Answer> GetAll()
        {
            return Context.Answers.ToList();
        }

        public Answer Update(Answer answer)
        {
            Context.Entry(answer).State = EntityState.Modified;
            Context.SaveChanges();
            return answer;
        }
    }
}
