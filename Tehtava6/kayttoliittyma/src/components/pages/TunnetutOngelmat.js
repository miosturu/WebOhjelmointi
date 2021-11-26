import React from "react";

export default function TunnetutOngelmat() {
  return (
    <div>
      <h1 className="display-4">Tunnetut ongelmat</h1>
      <h2 className="lead">Lisääminen ja päivittäminen</h2>
      <p className="">
        Jos lisätään uusi urheilija, ohjelma laittaa sen välillä ilman ID:tä
        näkyville. Saadaan korjatuksi painamalla F5:tä.
      </p>
      <p>
        Päivityksen jälkeen ohjelma ei osaa ottaa tietoa uudelleen näytille,
        vaan pitää päivittää koko ohjelma uudelleen F5:den avulla. Tämä tapahtuu
        välillä, ilman ilmeistä syytä.
      </p>
    </div>
  );
}
