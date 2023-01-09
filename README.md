# NodeJS Global Mentoring Program [2022Q4 BY+GUKA]

## TASK 2.1

1) Write a simple REST service with CRUD operations for User entity.
- To create REST service,use ExpressJS (https://expressjs.com/). The User should have the following properties (you can use UUIDas a user identifier (id)):

2) Service should have the following CRUD operations for User:
- get user by id;
- create and update user;
- get auto-suggest list from _limit_ users, sorted by login property and filtered by _loginSubstringin_ the login property: _getAutoSuggestUsers(loginSubstring, limit)_
- remove user (soft delete–user gets marked with _isDeleted_ flag, but not removed from the collection).

3) Store user’s collection in the service memory (while the service is running).

## Task 2.2

Add server-side validation for create/update operations of Userentity:
- all fields are required;
- login validationis required;
- password must contain letters and numbers;
- user’s age must be between 4 and 130.

In case of any property does not meet the validation requirements or the field is absent, return _400 (Bad Request)_ and detailed error message.

For requests validation use special packages like joi (https://github.com/hapijs/joi,https://www.npmjs.com/package/express-joi-validation).

## EVALUATION CRITERIA2.
2. Task 2.1 is partially implemented (w/o getAutoSuggestUsers or other methods).
3. Task 2.1 is fulfilled to the full extent.
4. Task 2.1 eslint rules are applied.
5. Task 2.2 is fulfilled to the full extent; validation package is used.
5*. Consider to use Typescript.
