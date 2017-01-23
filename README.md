# Learn Knexjs

Based on the requirements below

1. Periodically scrape http://www.nasdaq.com/, parse out the index value of the Nasdaq, and store the result in the database.  
2. Create RESTful web service to provide those data to a front end.

## Running with Docker

``` bash
$ docker pull postgres
$ docker pull punneng/learn-knexjs
$ cd docker
```
then create database `nasdaq_production`
``` bash
$ docker-compose -f postgres.yml up
$ docker exec -it docker_db_1  psql -U postgres
```
then put the command below
```
CREATE DATABASE nasdaq_production;
```
and `\q` to quit from psql.
Then run migration
``` bash
$ docker-compose -f migration.yml up
```
and start the services
``` bash
$ docker-compose up
```
and navigate at localhost:8080.
or it can run from source by the *Build Setup* below

## Build Setup

### Prerequisites

NodeJS and PostgreSQL setup with this [configuration](https://github.com/punneng/learn-knexjs/blob/master/config/main.js).
then run the commands below

``` bash
# install dependencies
$ npm install

# create database schema
$ npm run migrate

# serve at localhost:8080
$ npm run dev
```
and navigate at localhost:8080

### Running the tests

``` bash
# create database schema
$ npm run migrate:test

# run all tests
$ npm run test

```
