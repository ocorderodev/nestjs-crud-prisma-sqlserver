# CRUD IN NESTJS with SQL SERVER AND STORED PROCEDURE - PRISMA ORM (<span style="padding: 7px;"><img src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" width="50px" /></span>)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## 1.- Installation with Node v16.1.0

```bash
$ git clone https://github.com/ocorderodev/nestjs-crud-prisma-sqlserver.git
$ cd nestjs-crud-prisma-sqlserver
$ npm install
```

## 2.- Configuration
### Create file .env
<strong>
DATABASE_URL="sqlserver://HOST:PORT;database=BD_NEST_TEST;user=MY_USER;password=MY_PASSWORD;trustServerCertificate=true;encrypt=true"
</strong>
<br><br>
<p>Note</p>

It is not necessary to create a database, pprisma orm runs it automatically with the command `npx prisma migrate dev --name init`.
<br><br>

## 3.- Running the app

```bash
# init run sql_server
$ npx prisma migrate dev --name init

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Script sql
Execute in script <a href="/stored.procedure.sql">stored.procedure.sql</a>

<br>
<strong>
<table border="1">
<thead>
<tr>
<th> Method </th>
<th> Service </th>
<th> JSON </th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>
<a href="http://localhost:3000/v1/users">
{{URI}}/v1/users
</a>
</td>
<td>
<pre>
{ }
</pre>
</td>
</tr>
<tr>
<td>POST</td>
<td>
<a href="http://localhost:3000/v1/users">
{{URI}}/v1/users
</a>
</td>
<td>
<pre>
{
    "name": "Omar",
    "dni": "78654321",
    "phone": "999888777",
    "city": "Lima",
    "province": "Lima",
    "interests": ["Estudiar"]
}
</pre>
</td>
</tr>
<tr>
<td>GET</td>
<td>
<a href="http://localhost:3000/v1/users/:id">
{{URI}}/v1/users/:id
</a>
</td>
<td>
<pre>
{ }
</pre>
</td>
</tr>
<tr>
<td>PUT</td>
<td>
<a href="http://localhost:3000/v1/users/:id">
{{URI}}/v1/users/:id
</a>
</td>
<td>
<pre>
{
    "name": "Omar Cordero",
    "dni": "71234568",
    "phone": "999222444",
    "city": "Lima",
    "province": "Lima"
}
</pre>
</td>
</tr>
<tr>
<td>DELETE</td>
<td>
<a href="http://localhost:3000/v1/users/:id">
{{URI}}/v1/users/:id
</a>
</td>
<td>
<pre>
{ }
</pre>
</td>
</tr>
</tbody>
</table>

</strong>