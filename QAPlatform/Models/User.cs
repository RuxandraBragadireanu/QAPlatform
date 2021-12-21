using QAPlatform.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public byte[] Password { get; set; }
        public byte[] PassKey { get; set; }
        public UserRole Role { get; set; }

        public List<Question> Questions { get; set; }
        public List<Answer> Answers { get; set; }
        public string Token { get; internal set; }
    }
}
