## 14 - JWT Kanban Board Challenge

## Table Of Contents

## User Story

```
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks
```

## Acceptance Criteria

```
GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
```

## To Do

The starter code provides a complete, working full-stack application without authentication.

You will need to:

✔ Create a .env file for the server that includes:

✔ A username for the database.

✔ A password for the database.

✔ A secret key for the JWT (this can be any random string).

✔ Complete the authenticateToken method in server/src/middleware/auth.ts.

✔ Complete the login method in server/src/routes/auth-routes.ts.

✔ Add authentication to the API routes in server/src/routes/index.ts.

Complete the login method in client/src/api/authAPI.tsx.

Complete the methods of the AuthService in client/src/utils/auth.ts.

As a bonus exercise, try adding the capability to sort and filter the list of tickets in the Kanban board.

## Submit

You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project.
