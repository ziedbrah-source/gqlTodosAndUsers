# gqlTodosAndUsers
 
## Usage
```javascript
Clone the project.
Cd to the project and run on your terminal : npm install 

```
## Overview
### Types
```graphql
type Todo {
  id: ID!
  name: String!
  content: String!
  todoStatus: TodoStatus!
  user: User!
}
type User {
  id: ID!
  name: String!
  email: String!
  todos: [Todo]
}
```
### Enum
```graphql
enum TodoStatus {
  WAITING
  IN_PROGRESS
  CANCELED
  DONE
}
```
### Query Syntax
GraphQL queries declaratively describe what data the issuer wishes to fetch from
whoever is fulfilling the GraphQL query.
An example query on the above schema would be:

```graphql
{getTodos{content},
  getUsers{email},
  getUser(id:1){todos{todoStatus}},
  getTodo(id:1){content}
}
```
which will give us the nested response
```graphql
{
  "data": {
    "getTodos": [
      {
        "content": "delectus aut autem 1"
      },
      {
        "content": "delectus aut autem 1"
      },
      {
        "content": "delectus aut autem 1"
      },
      {
        "content": "delectus aut autem 1"
      }
    ],
    "getUsers": [
      {
        "email": "MohamedZied@gmail.com"
      },
      {
        "email": "MohamedZied@gmail.com"
      },
      {
        "email": "MohamedZied@gmail.com"
      },
      {
        "email": "MohamedZied@gmail.com"
      }
    ],
    "getUser": {
      "todos": [
        {
          "todoStatus": "IN_PROGRESS"
        },
        {
          "todoStatus": "IN_PROGRESS"
        }
      ]
    },
    "getTodo": {
      "content": "delectus aut autem 1"
    }
  }
}
```

