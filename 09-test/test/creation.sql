CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    address VARCHAR(255) NOT NULL,
);

//insertion script

INSERT INTO users (name, lastname, email, age, address) 
VALUES 
('John', 'Doe', 'john.doe@example.com', 30, '123 Main St'),
('Jane', 'Smith', 'jane.smith@example.com', 25, '456 Elm St'),
('Alice', 'Johnson', 'alice.johnson@example.com', 28, '789 Oak St');