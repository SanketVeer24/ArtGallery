CREATE DATABASE ARTGALLERY;
USE ARTGALLERY;

CREATE TABLE AG_EVENT (event_name varchar(255), event_id int, event_type varchar(255), doe date, start_time time, end_time time, event_desc varchar(255), primary key(event_id));
CREATE TABLE CUSTOMER (customer_id int, customer_name varchar(255), email varchar(255), phone varchar(255), primary key(customer_id));
CREATE TABLE TICKET (ticket_no int, event_id int, customer_id int, amount double, primary key(ticket_no));
CREATE TABLE EVENT_ARTWORK (event_id int, artwork_id int, foreign key (event_id) references AG_EVENT(event_id), foreign key (artwork_id) references ARTWORK(artwork_id));
CREATE TABLE `artwork` (
  `artwork_id` int NOT NULL,
  `artwork_name` varchar(255) DEFAULT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `art_type` varchar(255) DEFAULT NULL,
  `creation_year` int(11) DEFAULT NULL,
  `purchase_status` varchar(255) DEFAULT NULL,
  `art_desc` varchar(255) DEFAULT NULL,
  `art_image` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `artwork` ADD PRIMARY KEY (`artwork_id`);

ALTER TABLE `artwork` MODIFY `artwork_id` int(11) NOT NULL AUTO_INCREMENT;

alter table TICKET ADD foreign key(event_id) references AG_EVENT(event_id);
alter table TICKET ADD foreign key(customer_id) references CUSTOMER(customer_id);

ALTER TABLE ticket DROP FOREIGN KEY ticket_ibfk_2;
ALTER TABLE customer MODIFY COLUMN customer_id INT AUTO_INCREMENT;
ALTER TABLE ticket ADD CONSTRAINT ticket_ibfk_2 FOREIGN KEY (customer_id) REFERENCES customer(customer_id);

ALTER TABLE ticket DROP FOREIGN KEY ticket_ibfk_1;
ALTER TABLE event_artwork DROP FOREIGN KEY event_artwork_ibfk_1;
ALTER TABLE ag_event MODIFY COLUMN event_id INT AUTO_INCREMENT;
ALTER TABLE ticket ADD CONSTRAINT ticket_ibfk_1 FOREIGN KEY (event_id) REFERENCES ag_event(event_id);
ALTER TABLE event_artwork ADD CONSTRAINT event_artwork_ibfk_1 FOREIGN KEY (event_id) REFERENCES ag_event(event_id);

ALTER TABLE event_artwork DROP FOREIGN KEY event_artwork_ibfk_2;
ALTER TABLE artwork MODIFY COLUMN artwork_id INT AUTO_INCREMENT;
ALTER TABLE event_artwork ADD CONSTRAINT event_artwork_ibfk_2 FOREIGN KEY (artwork_id) REFERENCES artwork(artwork_id);

ALTER TABLE ticket MODIFY COLUMN ticket_no INT AUTO_INCREMENT;

-- Insert statements for AG_EVENT table
INSERT INTO AG_EVENT (event_name, event_id, event_type, doe, start_time, end_time, event_desc) 
VALUES ('Art Exhibition', '1001', 'Exhibition', '2024-05-10', '09:00:00', '18:00:00', 'An exhibition showcasing various artworks from renowned artists.');

INSERT INTO AG_EVENT (event_name, event_id, event_type, doe, start_time, end_time, event_desc) 
VALUES ('Oil Painting Exhibition', '1002', 'Exhibition', '2024-06-15', '14:00:00', '16:00:00', 'A exhibition of oil painting techniques.');

-- Insert statements for ARTWORK table
INSERT INTO ARTWORK (artwork_id, artwork_name, artist, art_type, creation_year, purchase_status, art_desc) 
VALUES ('2001', 'Starry Night', 'Vincent van Gogh', 'Oil Painting', 1889, 'Available', 'A masterpiece depicting a serene night sky with swirling stars.');

INSERT INTO ARTWORK (artwork_id, artwork_name, artist, art_type, creation_year, purchase_status, art_desc) 
VALUES ('2002', 'The Persistence of Memory', 'Salvador Dalí', 'Surrealism', 1931, 'Sold', 'A surreal depiction of melting clocks in a dream-like landscape.');

Insert into artwork (art_image) select LOAD_FILE('C:\Users\lahari\Downloads\DBTermProjImages\StarryNight.jpeg') from artwork where artwork_id=2001;
-- Insert statements for CUSTOMER table
INSERT INTO CUSTOMER (customer_id, customer_name, email, phone) 
VALUES ('3001', 'John Doe', 'johndoe@example.com', 1234567890);

INSERT INTO CUSTOMER (customer_id, customer_name, email, phone) 
VALUES ('3002', 'Jane Smith', 'janesmith@example.com', 9876543210);

-- Insert statements for TICKET table
INSERT INTO TICKET (ticket_no, event_id, customer_id, amount) 
VALUES (1, '1001', '3001', 20.00);

INSERT INTO TICKET (ticket_no, event_id, customer_id, amount) 
VALUES (2, '1002', '3002', 30.00);

-- Insert statements for EVENT_ARTWORK table
INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1001', '2001');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1002', '2002');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1001', '2013');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1002', '2014');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1003', '2006');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1004', '2008');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1005', '2008');

INSERT INTO EVENT_ARTWORK (event_id, artwork_id) 
VALUES ('1005', '2009');
