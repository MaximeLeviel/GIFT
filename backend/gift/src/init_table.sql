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
    schooltutor_id INT     NOT NULL,
    internship_id INT     NOT NULL,
    company_id    INT     NOT NULL,
    FOREIGN KEY (schooltutor_id) REFERENCES school_tutor (id),
    FOREIGN KEY (internship_id) REFERENCES internship (id),
    FOREIGN KEY (company_id) REFERENCES company (id)
);

INSERT INTO school_tutor (first_name, last_name, email, password)
VALUES ('John', 'Tutor', 'john.tutor@intervenants-efrei.net', 'password'),
       ('Jenna', 'Teacher', 'jeann.teacher@intervenants-efrei.net', 'password');

INSERT INTO internship (mission_description, comment, visit_form)
VALUES ('Stage développeur Fullstack', 'Le maître de stage est un ancien de l Efrei', 'Yes'),
       ('Stage Data Engineering', 'Le maître de stage est un ancien de l Efrei', 'Yes');

INSERT INTO company (name, address, tutor, start_date, end_date)
VALUES ('Dassault', '11 Rue de la République', 'Mr. Tutor', '2022-04-17', '2022-09-17'),
       ('TCS', '1 Place de la Défense', 'Mrs. Tutor', '2022-05-21', '2022-10-22');

INSERT INTO student (first_name, last_name, group_name, schooltutor_id, internship_id, company_id)
VALUES ('John', 'Student', 'M1', 1, 1, 1),
       ('Marie', 'Apprentice', 'M2 Alt.', 2, 2,2);


