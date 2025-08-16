# NestJS Articles API

A simple **NestJS** project demonstrating a CRUD API using Controllers, Services, DTOs, and Modules.  
This project exposes endpoints for managing a Articles.

---

## Features
- NestJS framework with TypeScript
- CRUD operations for Article resource
- DTO validation 
- REST client testing using `test.rest` file

---

## Installation

Clone the repo and install dependencies:

```npm install```

---
## API Endpoints
### GET -All
 http://localhost:3000/article HTTP/1.1

### POST 
http://localhost:3000/article
Content-Type: application/json

{
  "title": "Getting Started with NestJS",
  "content": "This is an introduction to NestJS framework...",
  "author": "Jane Smith"
}

### POST
 http://localhost:3000/article
Content-Type: application/json

{
  "title": "Getting Started with Python for Web App",
  "content": "This is an intermediate lectures to Django framework...",
  "author": "John Doe"
}

### POST
http://localhost:3000/article
Content-Type: application/json

{
  "title": "Advanced Level Design Pattern ",
  "content": "Advanced level lessons on Software Design Patterns",
  "author": "Me"
}

### GET - ID
http://localhost:3000/article/1 HTTP/1.1


### PATCH
http://localhost:3000/article/3 HTTP/1.1
Content-Type: application/json

{
  "title": "How to build a house 1",
  "content": "DIY on how to build your own very humble house. Get started by ...",
  "author": "Me and you"
}

### DELETE 
http://localhost:3000/article/2 HTTP/1.1


## Testing with test.rest
This project includes a test.rest file for use with the REST Client VS Code extension.

- Install the extension: REST Client

- Open test.rest in VS Code

- Click “Send Request” above any endpoint request

- View the response in the editor.


Built with love by yours truly @amazingAwwal