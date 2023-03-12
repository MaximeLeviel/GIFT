# GIFT

This project comes from the "Advanced Programming" subject taught by Mr. Jacques Augustin.

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
