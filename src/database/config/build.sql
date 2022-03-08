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

INSERT INTO author (name) VALUES ('braa'),('rawan');
INSERT INTO books (name,price,author_id) VALUES ('js',50,1),('css',20,2);

COMMIT;