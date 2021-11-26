import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useReducer, useContext } from "react";
import urheilijatTiedotContext from "../context/UrheilijatTiedotContext";

export default function LisaaUrheilijaTiedot() {
  let history = useNavigate();
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki_kuvaan, setLinkki_kuvaan] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [virheet, setVirheet] = useState({});

  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);

  const handleSubmit = async (e) => {
    const uusiUrheilijaTiedot = {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      linkki_kuvaan: linkki_kuvaan,
      laji: laji,
      saavutukset: saavutukset,
    };

    console.log(uusiUrheilijaTiedot);
    UrheilijatTiedotContext.setTiedot(uusiUrheilijaTiedot);
    history("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilijan tiedot</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="etunimitieto"
              type="text"
              name="etunimi"
              className="form-control from control-lg"
              placeholder="Syötä etunimi"
              value={etunimi}
              onChange={(event) => setEtunimi(event.target.value)}
              error={virheet.etunimi}
            />

            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              id="sukunimitieto"
              type="text"
              name="sukunimi"
              className="form-control from control-lg"
              placeholder="Syötä sukunimi"
              value={sukunimi}
              onChange={(event) => setSukunimi(event.target.value)}
              error={virheet.sukunimi}
            />

            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              id="kutsumanimitieto"
              type="text"
              name="kutsumanimi"
              className="form-control from control-lg"
              placeholder="Syötä kutsumanimi"
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
              error={virheet.kutsumanimi}
            />

            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              id="syntymavuositieto"
              type="number"
              name="syntymavuosi"
              className="form-control from control-lg"
              placeholder="Syötä syntymävuosi"
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
              error={virheet.syntymavuosi}
            />

            <label htmlFor="paino">Paino (kg)</label>
            <input
              id="painotieto"
              type="number"
              name="paino"
              className="form-control from control-lg"
              placeholder="Syötä paino"
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
              error={virheet.paino}
            />

            <label htmlFor="linkki_kuvaan">Linkki kuvaan</label>
            <input
              id="linkki_kuvaantieto"
              type="text"
              name="linkki_kuvaan"
              className="form-control from control-lg"
              placeholder="Syötä linkki kuvaan"
              value={linkki_kuvaan}
              onChange={(event) => setLinkki_kuvaan(event.target.value)}
              error={virheet.linkki_kuvaan}
            />

            <label htmlFor="laji">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control from control-lg"
              placeholder="Syötä laji"
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
              error={virheet.laji}
            />

            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutuksettieto"
              type="text"
              name="saavutukset"
              className="form-control from control-lg"
              placeholder="Syötä saavutukset"
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              error={virheet.saavutukset}
            />

            <input
              type="submit"
              value="Lisää tiedot urheilijasta"
              className="btn btn-light btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
