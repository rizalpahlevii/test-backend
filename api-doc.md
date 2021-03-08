# book-server

​
List of available endpoints:
​

- `POST /register`
- `POST /login`

And routes below need authentication

- `GET /book`
- `POST /comments`
- `GET /comments/:bookId`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```

### GET /book

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 1,
        "title": "Gyo",
        "img": "https://i.ytimg.com/vi/ChvlGUzRpyA/maxresdefault.jpg",
        "description": "Something is rotten in Okinawa...the floating stench of death hangs over the island..What is it? A strange, legged fish appears on the scene.",
        "author": "Junji Itou",
        "createdAt": "2020-04-16T04:58:01.751Z",
        "updatedAt": "2020-04-16T04:58:01.751Z"
    },{
      ...
    }
]
```

### POST /comments

Request:

- headers: access_token

- data:

```json
{
  "bookId": "integer",
  "content": "string"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "UserId": "integer",
  "bookId": "integer",
  "content": "string",
  "createdAt": "2020-04-16T04:58:01.751Z",
  "updatedAt": "2020-04-16T04:58:01.751Z"
}
```

​

### GET /comments/:bookId

description:
get all comments that are available for that bookId parameters, don't forget to include the User model

Request:

- headers: access_token
- params:
  - bookId: integer (required)

Response:

- status: 200
- body:

```json
[
    {
        "id": 2,
        "UserId": 1,
        "bookId": 1,
        "content": "ini bagus",
        "createdAt": "2020-04-16T04:58:01.751Z",
        "updatedAt": "2020-04-16T04:58:01.751Z",
        "User": {
          "id": 1,
          "email": "qweqwe@mail.com"
        }
    }, {
      ...
    }
]
```
