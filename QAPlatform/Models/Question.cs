using QAPlatform.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Models
{
    public class Question
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        public QuestionCategory Category { get; set; }

        public Guid UserId { get; set; }
        public virtual User User { get; set; }
        public List<Answer> Answers { get; set; }

    }
}
