using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.UserRepository
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User Get(Guid Id);
        User Create(User User);
        User Update(User User);
        User Delete(User User);
    }
}
