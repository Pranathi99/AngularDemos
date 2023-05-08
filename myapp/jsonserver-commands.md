<!-- Install json server -->

npm install -g json-server

<!-- Run json server on a data file -->

json-server --watch db.json

<!-- To check version -->

json-server --version

<!-- Access your api -->

GET http://localhost:3000/employees
GET http://localhost:3000/posts
GET http://localhost:3000/courses

POST http://localhost:3000/employees
{
"id":6,
"first_name":"Fiona",
"last_name":"Wellington",
"email":"fiona@example.com"
}

POST http://localhost:3000/posts
{
"title":"Test",
"content":"Test content"  
}

PUT http://localhost:3000/employees/3
{
"id": 3,
"first_name": "Catherine",
"last_name": "Summers",
"email": "catherine@example.com"
}

DELETE http://localhost:3000/employees/6

Home
http://localhost:3000
