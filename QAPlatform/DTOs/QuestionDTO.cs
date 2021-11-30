using QAPlatform.Enums;

namespace QAPlatform.DTOs
{
    public class QuestionDTO
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public QuestionCategory category{ get; set; }
    }
}
