CREATE TABLE restaurant_working_hours (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UUID BINARY(16) NOT NULL UNIQUE,
    RESTAURANT_ID INT NOT NULL,
    DAY_OF_WEEK INT NOT NULL,
    OPENING_TIME TIME NOT NULL, 
    CLOSING_TIME TIME NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    UPDATED_AT DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    DELETED_AT DATETIME DEFAULT NULL,
    FOREIGN KEY (RESTAURANT_ID) REFERENCES restaurants(ID)
);

