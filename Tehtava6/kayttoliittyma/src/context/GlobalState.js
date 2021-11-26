import axios from "axios";
import { useReducer } from "react";
import UrheilijatTiedotContext from "./UrheilijatTiedotContext";
import AppReducer from "./AppReducer";
import { GET_TIEDOT } from "./types";

const GlobalState = (props) => {
  let initialState = {
    tiedot: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  /**
   * Heataan kaikkien urheilijoiden tiedot
   */
  const getTiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3030/urheilijat");
      let { data } = res;
      dispatch({ type: GET_TIEDOT, payload: data });
    } catch (err) {
      console.log("Virhe: " + err);
    }
  };

  /**
   * Haetaan yhden urheilijan tiedot
   */
  const getTieto = async (id) => {
    try {
      let sql = `http://localhost:3030/urheilijat/${id}`;
      let res = await axios.get(sql);
      console.log("GET_TIETO");
      dispatch({ type: "GET_TIETO", payload: res.data });
    } catch (err) {
      console.log("Virhe: " + err);
    }
  };

  /**
   *  Lisätään uusi urheilija tietokantaan
   */
  const setTiedot = async (uusiTieto) => {
    console.log("Lisätään uutta tietoa");

    console.log("Uusi tieto (GlobalState.js): " + uusiTieto);

    try {
      const res = await axios
        .post("http://localhost:3030/lisaa", uusiTieto)
        .then((res) => {
          dispatch({ type: "ADD_TIETO", payload: res.data });
          console.log("Data: " + res.data);
        });
    } catch (err) {
      console.log("Virhe: " + err);
    }
  };

  /**
   * Päivitetään tietokannassa oleva urheilija
   */
  const setTieto = async (id, paivitettyTieto) => {
    try {
      const res = await axios
        .put(`http://localhost:3030/urheilijat/muokkaa/${id}`, paivitettyTieto)
        .then((res) => {
          dispatch({ type: "EDIT_TIETO", payload: res.data });
          //console.log("Data: " + data);
        });
    } catch (err) {
      console.log("Virhe: " + err);
    }
  };

  const deleteTieto = async (id) => {
    try {
      let sql = "http://localhost:3030/urheilijat/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_TIETO", payload: id["id"] });
        //console.log("Data: " + data);
      });
    } catch (err) {
      console.log("Virhe: " + err);
    }
  };

  return (
    <UrheilijatTiedotContext.Provider
      value={{
        tiedot: state.tiedot,
        getTiedot,
        getTieto,
        setTiedot,
        setTieto,
        deleteTieto,
      }}
    >
      {props.children}
    </UrheilijatTiedotContext.Provider>
  );
};

export default GlobalState;
