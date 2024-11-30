DROP DATABASE IF EXISTS login;
CREATE DATABASE login;
USE login;

CREATE TABLE IF NOT EXISTS cadastros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

SHOW TABLES;
DESCRIBE cadastros;

INSERT INTO cadastros (usuario,email,senha)
VALUES ('Admin', 'donodaempresa@empresa.com', '###(admin3367!)!###');

SELECT * FROM cadastros;