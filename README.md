# GIFT

This project comes from the "Advanced Programming" subject taught by Mr. Jacques Augustin.

## Known issues 

```bash 
Access to XMLHttpRequest at 'http://127.0.0.1:8080/gift-1.0-SNAPSHOT/api/users/login' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
```

The following issue is a known bug, taking place on the frontend side. In fact, due to CORS policy some routes throw the previous error. Obvioulsy, we saw the bug, but we couldn't find a viable solution to the issue. 

Using postman to test backend's routes does not throw the previous error and works perfectly.

## Installation

### Set up backend

- __.env__

To get started, you have to create a `.env` file at `GIFT/backend/gift`, with the following content:
```ruby
# POSTGRES CONFIG
POSTGRES_USER="user"
POSTGRES_PASSWORD="password"
POSTGRES_DB="db"
POSTGRES_ADDRESS="127.0.0.1"
POSTGRES_PORT=5432
```
It is strongly recommended that you change the above values as you want. Make sure that the config you provide here is the same as the config inside the persistence.xml file (`GIFT/backend/gift/src/main/resources/META-INF/persistence.xml`).

- __Docker__

You can start the docker containers with this command, it will create a bdd with the config you provide inside the `.env`: 
```shell
docker-compose up -d
```

- __Dependencies__

To install the project dependencies, use the following command: 
```shell
mvn clean install
```

### Set up frontend

- __Dependencies__

To install the project dependencies, use the following command: 
```shell
npm install
```

## Run the application

- __Backend__

You can run the JEE application using wildfly. The application will run on the port 8080 by default.

- __Frontend__ 

You can use this command to start the frontend application:
```shell
npm run start
```
