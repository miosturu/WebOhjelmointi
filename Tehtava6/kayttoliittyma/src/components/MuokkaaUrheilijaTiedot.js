import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import urheilijatTiedotContext from "./context/UrheilijatTiedotContext";

const MuokkaaUrhelijaTiedot = () => {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki_kuvaan, setLinkki_kuvaan] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);

  const { id } = useParams();
  let history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3030/urheilijat/${id}`).then((res) => {
      const tiedot = res.data[0];

      setEtunimi(tiedot.etunimi);
      setSukunimi(tiedot.sukunimi);
      setKutsumanimi(tiedot.kutsumanimi);
      setSyntymavuosi(tiedot.syntymavuosi);
      setPaino(tiedot.paino);
      setLinkki_kuvaan(tiedot.linkki_kuvaan);
      setLaji(tiedot.laji);
      setSaavutukset(tiedot.saavutukset);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    const paivitettyTieto = {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      linkki_kuvaan: linkki_kuvaan,
      laji: laji,
      saavutukset: saavutukset,
    };

    console.log("Uudet tiedot: " + paivitettyTieto);

    UrheilijatTiedotContext.setTieto(id, paivitettyTieto);
    history("/");
  };

  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };

  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };

  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };

  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };

  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };

  const onChangeLinkki_kuvaan = (e) => {
    setLinkki_kuvaan(e.target.value);
  };

  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };

  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijan tiedot</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              type="text"
              name="etunimi"
              className="form-control from control-lg"
              placeholder="Syötä etunimi"
              value={etunimi}
              onChange={onChangeEtunimi}
            />

            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              className="form-control from control-lg"
              placeholder="Syötä sukunimi"
              value={sukunimi}
              onChange={onChangeSukunimi}
            />

            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control from control-lg"
              placeholder="Syötä kutsumanimi"
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />

            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              type="number"
              name="syntymavuosi"
              className="form-control from control-lg"
              placeholder="Syötä syntymävuosi"
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />

            <label htmlFor="paino">Paino (kg)</label>
            <input
              type="number"
              name="paino"
              className="form-control from control-lg"
              placeholder="Syötä paino"
              value={paino}
              onChange={onChangePaino}
            />

            <label htmlFor="linkki_kuvaan">Linkki kuvaan</label>
            <input
              type="text"
              name="linkki_kuvaan"
              className="form-control from control-lg"
              placeholder="Syötä linkki kuvaan"
              value={linkki_kuvaan}
              onChange={onChangeLinkki_kuvaan}
            />

            <label htmlFor="laji">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control from control-lg"
              placeholder="Syötä laji"
              value={laji}
              onChange={onChangeLaji}
            />

            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control from control-lg"
              placeholder="Syötä saavutukset"
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />

            <input
              type="submit"
              value="Muokkaa tiedot urheilijasta"
              className="btn btn-light btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MuokkaaUrhelijaTiedot;
