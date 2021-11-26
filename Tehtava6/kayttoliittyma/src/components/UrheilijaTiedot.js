import React, { Component } from "react";
import { useState, useContext } from "react";
import urheilijatTiedotContext from "./context/UrheilijatTiedotContext";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UrheilijaTiedot = (props) => {
  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);
  let history = useNavigate();
  const [naytaTieto, setNaytaTieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijatTiedotContext.deleteTiedot(id);
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
      <div class="text-right">
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <button
            className="button_right"
            onClick={this.onDeleteClick.bind(this, { id })}
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
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Syntymävuosi: {syntymavuosi}</li>
          <li className="list-group-item">Paino: {paino} kg</li>
          <li className="list-group-item">Linkki kuvaan: {linkki_kuvaan}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UrheilijaTiedot;
