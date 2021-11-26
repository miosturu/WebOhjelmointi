import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UrheilijatTiedot from "./components/UrheilijatTiedot";
import Ylatunniste from "./components/Ylatunniste";
import LisaaUrheilijaTiedot from "./components/LisaaUrheilijaTiedot";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Tietoa from "./components/pages/Tietoa";
import MuokkaaUrhelijaTiedot from "./components/MuokkaaUrheilijaTiedot";
import GlobalState from "./components/context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste tekija="Mikko Turunen" />
          <div className="container">
            <Routes>
              <Route path="/" element={<UrheilijatTiedot />} />
              <Route path="/lisaa" element={<LisaaUrheilijaTiedot />} />
              <Route path="/tietoa" element={<Tietoa />} />
              <Route
                path="/urheilijat/muokkaa/:id"
                element={<MuokkaaUrhelijaTiedot />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
