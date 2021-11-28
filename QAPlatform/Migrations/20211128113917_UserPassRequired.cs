using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QAPlatform.Migrations
{
    public partial class UserPassRequired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Password",
                table: "Users",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Password",
                table: "Users",
                nullable: true,
                oldClrType: typeof(byte[]));
        }
    }
}
