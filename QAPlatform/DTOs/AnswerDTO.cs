using System;

namespace QAPlatform.DTOs
{
    public class AnswerDTO
    {
        public string Content { get; set; }
        public int Score { get; set; }
        public Guid QuestionId { get; set; }

    }
}
