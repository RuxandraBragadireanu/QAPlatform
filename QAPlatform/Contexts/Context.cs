using Microsoft.EntityFrameworkCore;
using QAPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAPlatform.Contexts
{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        public static bool isMigration = true;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var foreignKey in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                foreignKey.DeleteBehavior = DeleteBehavior.Restrict;
            }



        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (isMigration)
            {
                optionsBuilder.UseSqlServer(@"Server=.\;Database=QAPlatformDb;Trusted_Connection=True;");
            }
        }

        public Context()
        {

        }

        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }
}
