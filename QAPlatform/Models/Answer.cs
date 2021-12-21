using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Models
{
    public class Answer
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Content { get; set; }
        public int Score { get; set; }

        public Guid UserId { get; set; }
        public Guid QuestionId { get; set; }
        public virtual User User { get; set; }
        public virtual Question Question { get; set; }
    }
}
