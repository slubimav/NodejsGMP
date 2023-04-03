## Summary Report

Server: Express
Validator: Joi
Code Check: ESLint
Database: PostgreSQL
ORM: Sequelize
Docker

---

## What has been done?

Instead of installing the database locally, I ran it in a container.
The server is also running in dedicated container. docker compose is used to run the project.
Squilize is used to manage the database. The password hash is stored in the database instead of plain text.
All CRUD operations are implemented.

Database credentials & server PORT should be configured in .env as it is in https://github.com/slubimav/NodejsGMP/blob/task-3/.env.example. Note: We should never save creds in .env.example in Github, but for the Task I made an exception.

### How to check

Just copy and past in terminal:

```
git clone https://github.com/slubimav/NodejsGMP.git
cd NodejsGMP
git checkout task-3
npm install
cp .env.example .env
npm run lint
npm run dev

```

Then use POSTMAN

```
{
    "login": "sergey",
    "password": "NewOne1",
    "age": "130",
    "isDeleted": "false"
}

```

Please, check Postman collection https://github.com/slubimav/NodejsGMP/blob/task-3/Express_NodeJsGMP.postman_collection.json

Examples:
**Note: PORT is configured in .env file**

```

GET localhost:4000/users
GET localhost:4000/users/ffcdb1e6-3538-431c-9713-5b74d3aef7da

POST localhost:4000/users/
PUT localhost:4000/users/a4340e04-1462-474d-bb70-594ecd78ae52

DELETE localhost:3000/users/87ef73a1-d7b8-4941-bd4e-424e58a0b3d5

```

## Self check:

TOTAL POINTS - **5**

---

# NodeJS Global Mentoring Program [2022Q4 BY+GUKA]

## TASK 2.1

1. Write a simple REST service with CRUD operations for User entity.

- To create REST service,use ExpressJS (https://expressjs.com/). The User should have the following properties (you can use UUIDas a user identifier (id)):

2. Service should have the following CRUD operations for User:

- get user by id;
- create and update user;
- get auto-suggest list from _limit_ users, sorted by login property and filtered by _loginSubstringin_ the login property: _getAutoSuggestUsers(loginSubstring, limit)_
- remove user (soft delete–user gets marked with _isDeleted_ flag, but not removed from the collection).

3. Store user’s collection in the service memory (while the service is running).

## Task 2.2

Add server-side validation for create/update operations of Userentity:

- all fields are required;
- login validationis required;
- password must contain letters and numbers;
- user’s age must be between 4 and 130.

In case of any property does not meet the validation requirements or the field is absent, return _400 (Bad Request)_ and detailed error message.

For requests validation use special packages like joi (https://github.com/hapijs/joi,https://www.npmjs.com/package/express-joi-validation).

## EVALUATION CRITERIA.

2. Task 2.1 is partially implemented (w/o getAutoSuggestUsers or other methods).
3. Task 2.1 is fulfilled to the full extent.
4. Task 2.1 eslint rules are applied.
5. Task 2.2 is fulfilled to the full extent; validation package is used.
   5\*. Consider to use Typescript.
