import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = (props) => {
  const { tekija } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Päänäkymä
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/lisaa" className="nav-link">
                Lisää uusia tietoja
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa sovelluksesta
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ongelmat" className="nav-link">
                Tunnetut ongelmat
              </Link>
            </li>

            <li className="text-secondary">
              <h5>Tekijä: {tekija}</h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Ylatunniste.defaultProps = {
  tekija: "Tuntematon tekijä",
};

/*Ylatunniste.PropTypes = {
    tekija: PropTypes.string.isRequired
};*/

export default Ylatunniste;
