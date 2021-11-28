using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.AnswerRepository
{
    public interface IAnswerRepository
    {
        List<Answer> GetAll();
        Answer Get(Guid Id);
        Answer Create(Answer User);
        Answer Update(Answer User);
        Answer Delete(Answer User);
    }
}
