import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import urheilijatTiedotContext from "../context/UrheilijatTiedotContext";
import { useNavigate } from "react-router-dom";

const UrheilijaTiedot = (props) => {
  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);
  let history = useNavigate();
  const [naytaTieto, setNaytaTieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijatTiedotContext.deleteTieto(id);
    window.location.reload();
    history("/");
  };

  const onShowClick = (e) => {
    let flag = !naytaTieto;
    setNaytaTieto(flag);
  };

  const {
    id,
    etunimi,
    kutsumanimi,
    sukunimi,
    syntymavuosi,
    paino,
    linkki_kuvaan,
    laji,
    saavutukset,
  } = props.tieto;

  return (
    <div className="card card-body mb-3">
      {etunimi} "{kutsumanimi}" {sukunimi}{" "}
      <button className="button_right" onClick={onShowClick.bind(this)}>
        ...
      </button>
      <div className="text-right">
        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button
            className="button_right"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>

          <Link to={`urheilijat/muokkaa/${id}`}>
            <button className="button_right">Muokkaa</button>
          </Link>
        </div>
      </div>
      {naytaTieto ? (
        <ul className="list-group">
          <li className="list-group-item" key="id">
            ID: {id}
          </li>
          <li className="list-group-item" key="syntymavuosi">
            Syntymävuosi: {syntymavuosi}
          </li>
          <li className="list-group-item" key="paino">
            Paino: {paino} kg
          </li>
          <li className="list-group-item" key="linkki_kuvaan">
            Linkki kuvaan: {linkki_kuvaan}
          </li>
          <li className="list-group-item" key="laji">
            Laji: {laji}
          </li>
          <li className="list-group-item" key="saavutukset">
            Saavutukset: {saavutukset}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default UrheilijaTiedot;
