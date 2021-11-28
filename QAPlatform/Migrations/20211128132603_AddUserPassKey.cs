using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QAPlatform.Migrations
{
    public partial class AddUserPassKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "PassKey",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PassKey",
                table: "Users");
        }
    }
}
