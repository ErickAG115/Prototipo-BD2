CREATE KEYSPACE prototype WITH
REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

CREATE TABLE IF NOT EXISTS "prototype".USER (
                                                  username varchar,
                                                  password varchar,
                                                  first_name varchar,
                                                  last_name varchar,
                                                  birthdate date,
                                                  admin boolean,
                                                  ID_val varchar,
                                                  PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS "prototype".ACCOUNT (
                                                  ID_val varchar,
                                                  type varchar,
                                                  amount double,
                                                  PRIMARY KEY (ID)
);


-- Cliente: angel1 - 1234
INSERT INTO "prototype".USER(username, password, first_name, last_name, birthdate)
VALUES ('angel', 'hola', 'Angel', 'Gamboa Cruz', '2003-05-15');

SELECT * FROM "prototype".USER;