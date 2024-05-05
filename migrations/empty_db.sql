CREATE DATABASE patient_registration;
USE patient_registration;

CREATE TABLE patients (
    id integer PRIMARY KEY AUTO_INCREMENT,
    fullName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phoneCharacteristic varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    documentPhotoURL  VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);