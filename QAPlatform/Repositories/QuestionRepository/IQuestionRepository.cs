using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Repositories.QuestionRepository
{
    public interface IQuestionRepository
    {
        List<Question> GetAll();
        Question Get(Guid Id);
        Question Create(Question User);
        Question Update(Question User);
        Question Delete(Question User);
    }
}
