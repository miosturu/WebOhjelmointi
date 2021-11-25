import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Ylatunniste= (props) => {
    const {tekija} = props;
    return (
        <nav className="navbar navbar-expand-smnavbar-dark bg-danger mb-3 py0">
            <div>
                <ul>
                    <li>
                        <h5>Tekijä: {tekija}</h5>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Urheilijat
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/lisaa" className="nav-link">
                            Lisää tietoja
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/tietoa" className="nav-link">
                            Tietoa sovelluksesta
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Ylatunniste.defaultProps = {
    tekija:"Tuntematon tekijä"
};

/*Ylatunniste.PropTypes = {
    tekija: PropTypes.string.isRequired
};*/

export default Ylatunniste;