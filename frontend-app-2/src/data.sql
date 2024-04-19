CREATE DATABASE ARTGALLERY;
USE ARTGALLERY;

CREATE TABLE AG_EVENT (event_name varchar(255), event_id varchar(255), event_type varchar(255), doe date, start_time time, end_time time, event_desc varchar(255), primary key(event_id));
CREATE TABLE ARTWORK (artwork_id varchar(255), artwork_name varchar(255), artist varchar(255), art_type varchar(255), creation_year int, purchase_status varchar(255), art_desc varchar(255), primary key(artwork_id));
CREATE TABLE CUSTOMER (customer_id varchar(255), customer_name varchar(255), address varchar(255), email varchar(255), phone int, primary key(customer_id));
CREATE TABLE TICKET (ticket_no int, event_id varchar(255), customer_id varchar(255), amount double, quantity int, primary key(ticket_no));
CREATE TABLE EVENT_ARTWORK (event_id varchar(255), artwork_id varchar(255), foreign key (event_id) references AG_EVENT(event_id), foreign key (artwork_id) references ARTWORK(artwork_id));

alter table TICKET ADD foreign key(event_id) references AG_EVENT(event_id);
alter table TICKET ADD foreign key(customer_id) references CUSTOMER(customer_id);

ALTER TABLE CUSTOMER MODIFY COLUMN phone varchar(255);

-- Insert statements for AG_EVENT table
INSERT INTO AG_EVENT (event_name, event_id, event_type, doe, start_time, end_time, event_desc) 
VALUES ('Art Exhibition', 'EVT001', 'Exhibition', '2024-05-10', '09:00:00', '18:00:00', 'An exhibition showcasing various artworks from renowned artists.');

INSERT INTO AG_EVENT (event_name, event_id, event_type, doe, start_time, end_time, event_desc) 
VALUES ('Oil Painting Exhibition', 'EVT002', 'Exhibition', '2024-06-15', '14:00:00', '16:00:00', 'A exhibition of oil painting techniques.');

-- Insert statements for ARTWORK table
INSERT INTO ARTWORK (artwork_id, artwork_name, artist, art_type, creation_year, purchase_status, art_desc) 
VALUES ('ART001', 'Starry Night', 'Vincent van Gogh', 'Oil Painting', 1889, 'Available', 'A masterpiece depicting a serene night sky with swirling stars.');

INSERT INTO ARTWORK (artwork_id, artwork_name, artist, art_type, creation_year, purchase_status, art_desc) 
VALUES ('ART002', 'The Persistence of Memory', 'Salvador Dalí', 'Surrealism', 1931, 'Sold', 'A surreal depiction of melting clocks in a dream-like landscape.');

-- Insert statements for CUSTOMER table
INSERT INTO CUSTOMER (customer_id, customer_name, address, email, phone) 
VALUES ('CUST001', 'John Doe', '123 Main Street, Anytown', 'johndoe@example.com', 1234567890);

INSERT INTO CUSTOMER (customer_id, customer_name, address, email, phone) 
VALUES ('CUST002', 'Jane Smith', '456 Elm Street, Anycity', 'janesmith@example.com', 9876543210);

-- Insert statements for TICKET table
INSERT INTO TICKET (ticket_no, event_id, customer_id, amount, quantity) 
VALUES (1, 'EVT001', 'CUST001', 20.00, 2);

INSERT INTO TICKET (ticket_no, event_id, customer_id, amount, quantity) 
VALUES (2, 'EVT002', 'CUST002', 30.00, 1);

-- Insert statements for EVENT_ARTWORK table
INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('EVT001', 'ART001');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('EVT002', 'ART002');
