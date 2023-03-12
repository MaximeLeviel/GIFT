DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS internship;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS school_tutor;

CREATE TABLE school_tutor
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name  VARCHAR NOT NULL,
    email      VARCHAR NOT NULL,
    password   VARCHAR NOT NULL
);

CREATE TABLE company
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR NOT NULL,
    address    VARCHAR NOT NULL,
    tutor      VARCHAR NOT NULL,
    start_date DATE,
    end_date   DATE
);

CREATE TABLE internship
(
    id                  SERIAL PRIMARY KEY,
    mission_description VARCHAR NOT NULL,
    comment             VARCHAR,
    visit_form          VARCHAR
);

CREATE TABLE student
(
    id            SERIAL PRIMARY KEY,
    first_name    VARCHAR NOT NULL,
    last_name     VARCHAR NOT NULL,
    group_name    VARCHAR NOT NULL,
    internship_id INT     NOT NULL,
    company_id    INT     NOT NULL,
    FOREIGN KEY (school_tutor_id) REFERENCES school_tutor (id),
    FOREIGN KEY (internship_id) REFERENCES internship (id),
    FOREIGN KEY (company_id) REFERENCES company (id)
);

INSERT INTO school_tutor (first_name, last_name, email, password)
VALUES ('John', 'Tutor', 'john.tutor@intervenants-efrei.net', 'password'),
       ('Jenna', 'Teacher', 'jeann.teacher@intervenants-efrei.net', 'password');

INSERT INTO internship (mission_description, comment, visit_form)
VALUES ('Stage développeur Fullstack', 'Le maître de stage est un ancien de l Efrei', 'Yes'),
       ('Stage Data Engineering', 'Le maître de stage est un ancien de l Efrei', 'Yes');
INSERT INTO company (id, name, address, tutor, start_date, end_date)
VALUES ()

INSERT INTO student (first_name, last_name, group_name, internship_id, company_id)
VALUES ('John', 'Student', 'M1', 1,1),
       ('Marie', 'Apprentice', 'M2 Alt.', 2,2);


