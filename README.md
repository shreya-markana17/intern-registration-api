# Intern Registration API

A simple REST API built using Node.js and Express.js for intern registration.

## Features

* Register a new intern
* Get all registered interns
* REST API using Express.js
* JSON request and response handling

## Technologies Used

* Node.js
* Express.js
* CORS

## Installation

```bash
npm install
```

## Run the Server

```bash
node server.js
```

Server runs at:

```text
http://localhost:5001
```

## API Endpoints

### Register Intern

**POST** `/register`

Request Body:

```json
{
  "name": "Shreya",
  "email": "shreya@gmail.com",
  "college": "ABC College"
}
```

Response:

```json
{
  "id": 1,
  "name": "Shreya",
  "email": "shreya@gmail.com",
  "college": "ABC College"
}
```

### Get All Interns

**GET** `/interns`

Response:

```json
[
  {
    "id": 1,
    "name": "Shreya",
    "email": "shreya@gmail.com",
    "college": "ABC College"
  }
]
```
# Task Submission API

A simple REST API built using Node.js and Express for submitting and managing tasks.

## Features

* Submit a new task
* Get all submitted tasks
* Get a task by ID
* Delete a task

## Technologies Used

* Node.js
* Express.js
* CORS

## Installation

```bash
npm install
```

## Run the Project

```bash
node server.js
```

## API Endpoints

### Submit Task

POST /register

Request Body:

```json
{
  "name": "Shreya",
  "email": "shreya@gmail.com",
  "college": "XYZ College"
}
```

### Get All Tasks

GET /interns

### Get Task By ID

GET /interns/:id

### Delete Task

DELETE /interns/:id

## Author

Shreya Markana

# Token Minting API

A simple REST API built using Node.js and Express for minting tokens.

## Endpoints

POST /mint

GET /tokens

## Technologies

- Node.js
- Express.js
- CORS

