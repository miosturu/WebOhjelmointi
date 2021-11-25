import UrheilijaTiedot from "./UrheilijaTiedot";
import React, { Component } from "react";
import { Consumer } from "../contex";

export default class UrheilijatTiedot extends Component {
  constructor() {
    super();
    this.state = {
      tiedot: [],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { tiedot } = value;
          return (
            <div>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Urheilijat</span>
              </h1>
              {tiedot.map((tieto) => (
                <UrheilijaTiedot key={tieto.id} tieto={tieto} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
