### Schema
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burger_db;
USE l21j8qrdvivkgr8
-- USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
