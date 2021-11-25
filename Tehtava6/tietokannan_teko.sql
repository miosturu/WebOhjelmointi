USE urheilijat;

CREATE TABLE urheilijat (
	id INT(11) NOT NULL AUTO_INCREMENT,
	etunimi VARCHAR(25),
	sukunimi VARCHAR(25),
	kutsumanimi VARCHAR(25),
	syntymavuosi INT(5),
	paino INT(4), 					# Pyöristetään lähimpään kg:hen
	linkki_kuvaan TEXT, 			# Ei tiedetä linkin pituutta
	laji VARCHAR(25),				# Oletetaan, että vain yksilaji per henkilö
	saavutukset TEXT,				# Ei voida tietää, kuinka monta saavutusta on, laitetaan vain maksimi pituus
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;

CREATE OR REPLACE USER 'mikko'@'localhost' IDENTIFIED BY '1234';
GRANT SELECT, INSERT, UPDATE, DELETE ON urheilijat TO 'mikko'@'localhost';

INSERT INTO urheilijat (id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, linkki_kuvaan, laji, saavutukset) VALUES
	(1, 'Matti', 'Nykänen', 'Matti', 1963, 60, 'https://fi.wikipedia.org/wiki/Matti_Nyk%C3%A4nen#/media/Tiedosto:Matti_Nyk%C3%A4nen_2014-01-30_001.jpg', 'mäkihyppy', 'Kultaa Sarajevo 1984, Kultaa Calgary 1988'),
	(2, 'Kimi-Matias', 'Räikkönen', 'Kimi', 1979, 70, 'https://fi.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen#/media/Tiedosto:F12019_Schloss_Gabelhofen_(22)_(cropped).jpg', 'ralli', 'mailman mestaruus 2007'),
	(3, 'Paavo', 'Nurmi', 'Paavo', 1897, 65, 'https://fi.wikipedia.org/wiki/Paavo_Nurmi#/media/Tiedosto:Paavo_Nurmi_(Antwerp_1920).jpg', 'kestävyysjuoksu', '9 olympiakultaa');
	
SELECT * FROM urheilijat;