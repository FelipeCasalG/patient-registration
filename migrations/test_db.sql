CREATE DATABASE patient_registration;
USE patient_registration;

CREATE TABLE patients (
    id integer PRIMARY KEY AUTO_INCREMENT,
    fullName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phoneCharacteristic varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    documentPhotoURL  VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO patients (fullName, email, phoneCharacteristic, phoneNumber, documentPhotoURL) 
VALUES ('John Doe', 
        'johndoe@gmail.com',
        '598', 
        '95123456', 
        'https://www.mass.gov/files/styles/embedded_full_width/public/images/2024-02/ma_d200_pr_adult_lid_150dpi-_liquor_card_2.jpg?itok=z0dKZLGF'),
        ('Mary Edwards',
        'mary12edwards@gmail.com',
        '598',
        '99654321',
        'https://www.mass.gov/files/styles/embedded_full_width/public/images/2024-02/ma_d200_pr_adult_lid_150dpi-_liquor_card_2.jpg?itok=z0dKZLGF');