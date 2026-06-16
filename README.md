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
