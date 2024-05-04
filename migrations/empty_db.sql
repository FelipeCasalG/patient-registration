CREATE DATABASE patient_registration;
USE patient_registration;

CREATE TABLE patient (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    phoneCharacteristic varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    documentPhoto LONGBLOB NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);