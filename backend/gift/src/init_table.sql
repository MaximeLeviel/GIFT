DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS internship;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS tutor;

CREATE TABLE tutor (
   id SERIAL PRIMARY KEY,
   username VARCHAR NOT NULL,
   password VARCHAR NOT NULL
);

CREATE TABLE company (
     id SERIAL PRIMARY KEY,
     name VARCHAR NOT NULL,
     address VARCHAR NOT NULL,
     tutor VARCHAR NOT NULL,
     start_date DATE,
     end_date DATE
);

CREATE TABLE internship (
        id SERIAL PRIMARY KEY,
        mission_description VARCHAR NOT NULL,
        comment VARCHAR,
        visit_form VARCHAR
);

CREATE TABLE student (
     id SERIAL PRIMARY KEY,
     first_name VARCHAR NOT NULL,
     last_name VARCHAR NOT NULL,
     group_name VARCHAR NOT NULL,
     internship_id INT NOT NULL,
     company_id INT NOT NULL,
     FOREIGN KEY (internship_id) REFERENCES internship(id),
     FOREIGN KEY (company_id) REFERENCES company(id)
);