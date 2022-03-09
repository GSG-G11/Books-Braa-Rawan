BEGIN;
DROP TABLE IF EXISTS author,books CASCADE;
CREATE TABLE author (
  id  serial  PRIMARY KEY,
  name  varchar(100)  NOT NULL
);
CREATE TABLE books (
  id  serial  PRIMARY KEY,
  name  varchar(100)  NOT NULL,
  price  integer,
  author_id integer	    REFERENCES author(id) ON UPDATE CASCADE
);

INSERT INTO author (name) VALUES ('Braa'),('Rawan'),('Adballah'),('Mohamed'),('Adham');
INSERT INTO books (name,price,author_id) VALUES ('JS',50,1),('CSS',20,2),('PHP',20,3);

COMMIT;