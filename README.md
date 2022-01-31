# QAPlatform 

Backend prerequisites:
1. SQL server (developer edition): https://go.microsoft.com/fwlink/?linkid=853016
2. Visual Studio 2019 (Community edition) with Net Desktop Development, ASP.NET and web development, .NET core cross-platform development
3. .NET Core 2.1 sdk https://dotnet.microsoft.com/download/dotnet/thank-you/sdk-2.1.403-windows-x64-installer

EF commands: https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=vs

Database: 

Visual Studio -> View -> Other window ->  Package Manager Console

Update-Database

-------

Frontend prerequisites:

-  node 8.9.4

How to start the frontend project:

**Terminal 1:**

1. `cd QAWeb`
2. `npm i`
3. `npm run build-server`
4. `npm run start-server`

**Terminal 2:**

1. `cd QAWeb`
2. `npm run start-client`

The app should work now.
