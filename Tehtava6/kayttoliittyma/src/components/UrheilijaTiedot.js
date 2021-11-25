import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../contex";
import axios from "axios";
import { Link } from "react-router-dom";
import urheilijatTiedotContext from "./context/UrheilijatTiedotContext";

export default class UrheilijaTiedot extends Component {
  state = {
    naytaTieto: false,
  };

  onDeleteClick = (id, dispatch) => {
    console.log(id);

    axios
      .delete(`http://localhost:3030/urheilijat/${id}`)
      .then((res) => dispatch({ type: "DELETE_TIETO", payload: id }));
  };

  onShowClick = (etunimi, e) => {
    this.setState({
      naytaTieto: !this.state.naytaTieto,
    });
  };

  render() {
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
    } = this.props.tieto;
    const { naytaTieto } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {etunimi} "{kutsumanimi}" {sukunimi}{" "}
                <button
                  className="button_right"
                  onClick={this.onShowClick.bind(this)}
                >
                  ...
                </button>
                <button
                  className="button_right"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  Poista
                </button>
                <Link to={`urheilijat/muokkaa/${id}`}>
                  <button className="button_right">Muokkaa</button>
                </Link>
              </h4>
              {naytaTieto ? (
                <ul className="list-group">
                  <li className="list-group-item">ID: {id}</li>
                  <li className="list-group-item">
                    Syntymävuosi: {syntymavuosi}
                  </li>
                  <li className="list-group-item">Paino: {paino} kg</li>
                  <li className="list-group-item">
                    Linkki kuvaan: {linkki_kuvaan}
                  </li>
                  <li className="list-group-item">Laji: {laji}</li>
                  <li className="list-group-item">
                    Saavutukset: {saavutukset}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

UrheilijaTiedot.propTypes = {
  tieto: PropTypes.object.isRequired,
};
