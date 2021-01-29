DROP DATABASE IF EXISTS ourHouse;

CREATE DATABASE ourHouse;

USE ourHouse;

CREATE TABLE homes (
  id int NOT NULL AUTO_INCREMENT,
  homeName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  homeId integer NOT NULL,
  currentStatus varchar(50) NOT NULL,
  userAvatar varchar(50) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (homeId) REFERENCES homes(ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u student1 < schema.sql -p
 *  to create the database and the tables.*/