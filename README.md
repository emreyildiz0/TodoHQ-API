# **TodoHQ API**

## Introduction

TodoHQ is a simple Todo app with a REST API implemented using Node.js, Express.js, and Sequelize ORM with Postgres as the database.

API Endpoints

**Todos**

POST /todos: create a new todo
PUT /todos/:id/complete: mark a todo as completed
PUT /todos/:id/uncomplete: mark a todo as uncompleted
DELETE /todos/:id: delete a todo
GET /todos: list all todos

**Authentication**

POST /auth/signup: create a new user account
POST /auth/login: log in with an existing user account
All Todo endpoints require authentication except for POST /todos.

Authentication

Authentication is implemented using JSON Web Tokens (JWT).
To authenticate, you need to send a JWT token in the Authorization header of each request.
To get a JWT token, you need to create an account using POST /auth/signup or log in using POST /auth/login. The response of these endpoints will include a JWT token that you can use for subsequent requests.

Error Handling

All errors are handled using an error middleware that will return a JSON response with the appropriate HTTP status code and error message.

Contribution
Feel free to contribute to this project by creating a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
