using QAPlatform.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.DTOs
{
    public class RegisterDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public UserRole Role { get; set; }
    }
}
