using Microsoft.EntityFrameworkCore;
using QAPlatform.Contexts;
using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
    {
        public Context Context { get; set; }

        public UserRepository(Context context)
        {
            Context = context;
        }

        public User Create(User user)
        {
            var result = Context.Add<User>(user);
            Context.SaveChanges();
            return result.Entity;
        }

        public User Get(Guid id)
        {
            return Context.Users.SingleOrDefault(x => x.Id == id);
        }
  
        public List<User> GetAll()
        {
            return Context.Users.ToList();
        }

        public User Update(User user)
        {
            Context.Entry(user).State = EntityState.Modified;
            Context.SaveChanges();
            return user;
        }
        public User Delete(User user)
        {
            IQueryable<Answer> userAnswers = Context.Answers.Where(obj => obj.UserId == user.Id);
            if(userAnswers.Any())
            {
                Context.RemoveRange(userAnswers);
            }

            IQueryable<Question> userQuestions = Context.Questions.Where(obj => obj.UserId == user.Id);
            if (userQuestions.Any())
            {
                Context.RemoveRange(userQuestions);
            }

            var result = Context.Remove(user);
            Context.SaveChanges();

            return result.Entity;
        }
    }
}
