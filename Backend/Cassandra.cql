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
                                                    id UUID PRIMARY KEY,
                                                  ID_val varchar,
                                                  type varchar,
                                                  amount double
);


-- Administrador: angel - hola
INSERT INTO "prototype".USER(username, password, first_name, last_name, birthdate, admin, ID_val)
VALUES ('angel', 'hola', 'Angel', 'Gamboa Cruz', '2003-05-15', true, '207900938');
INSERT INTO "prototype".ACCOUNT(ID_val, type, amount)
VALUES ('207900938', 'Ahorro', 100);

-- Administrador: jota - hola
INSERT INTO "prototype".USER(username, password, first_name, last_name, birthdate, admin, ID_val)
VALUES ('jota', 'hola', 'Josue', 'Martinez', '2003-05-15', false, '102340567');
INSERT INTO "prototype".ACCOUNT(ID_val, type, amount)
VALUES ('102340567', 'Personal', 50);
INSERT INTO "prototype".ACCOUNT(ID_val, type, amount)
VALUES ('102340567', 'Ahorro', 1000);

SELECT * FROM "prototype".USER;

SELECT * FROM "prototype".ACCOUNT;