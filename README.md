# Nibora
This is clone of [Quora](https://www.quora.com/). Acess the [Nibora MVP.](https://github.com/shams1987/shams-solo/wiki/Features)

Nibora is a place to go to ask all things fountain pen related questions and answers.

# Index
|[MVP Feature List](https://github.com/shams1987/shams-solo/wiki/Features)|[Database Schema](https://github.com/shams1987/shams-solo/wiki/Database-Schema)|[API Documentation]()|[Frontend Routes]()|

# Technolgies Used
Javascript. React. Redux. Nodejs. Express. Sequelize. PostgreSQL.

# Getting Started
1. Clone this repo.

* git clone github.com/shams1987/shams-solo

2. Install dependencies from the root directory.

* npm install

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

* CREATE USER <name> WITH CREATEDB PASSWORD <’password’>
  
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
  
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).
  
6. Add the following proxy to your package.json file within your frontend directory , replacing or keeping 5000 port to match you PORT configuration found in your .env file.

* “proxy”:http://localhost:5000
  
7. Create Database, Migrate, and Seed models.

 * npx dotenv sequelize db:create
 * npx dotenv sequelize db:migrate
 * npx dotenv sequelize db:seed:all
  
8. Start the services in the backend directory

* npm start
  
9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http:localhost:3000.

* npm start

  
10. You can use the Demo user or create an account to begin using Nibora.
  
# Features
Logged in users can perform the following actions.
  
* Add/View/Edit/Delete Questions
* Add/View/Delete Answers

  
  
  
  
