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

Database credentials & server PORT should be configured in .env as it is in https://github.com/slubimav/NodejsGMP/blob/task-3/.env.example. Note: We should never save creds in .env.example in Github, but for the Task I made an exception for convinience of checking process.

### How to check

Just copy and past in terminal:

```
git clone https://github.com/slubimav/NodejsGMP.git
cd NodejsGMP
git checkout task-3
npm install
cp .env.example .env
npm run lint
cp .env.example .env
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
**Note: PORT should be configured in .env file**

```

GET localhost:4000/users
GET localhost:4000/users/ffcdb1e6-3538-431c-9713-5b74d3aef7da

POST localhost:4000/users/
PUT localhost:4000/users/a4340e04-1462-474d-bb70-594ecd78ae52

DELETE localhost:3000/users/87ef73a1-d7b8-4941-bd4e-424e58a0b3d5

```
