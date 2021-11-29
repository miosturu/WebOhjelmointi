import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Ylapalkki from "./components/Ylapalkki";
import TehtavanKuvaus from "./components/TehtavanKuvaus";
import TehtavienKuvaukset from "./components/TehtavienKuvaukset";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylapalkki />
          <TehtavienKuvaukset />
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
