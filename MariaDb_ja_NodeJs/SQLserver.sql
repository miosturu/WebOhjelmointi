CREATE TABLE henkilot (
	id INT(11) NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(25),
	lastName VARCHAR(25),
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

CREATE OR REPLACE USER 'mikko'@'localhost' IDENTIFIED BY '1234';
GRANT SELECT,INSERT,UPDATE,DELETE ON henkilot TO 'mikko'@'localhost';

INSERT INTO henkilot (id, firstName, lastName) VALUES
	(1, 'Matti', 'Ruohonen'),
	(2, 'Teppo', 'Ruohonen');
	
SELECT * FROM henkilot;