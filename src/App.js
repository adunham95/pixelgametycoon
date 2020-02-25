import React, {useState} from 'react';
import {Header, ScrollToTop} from "./components/components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MainPage, NewGame} from "./pages/index"

function App() {

  // const [modalID, setModalID] = useState("false");

  return (
    <div className="App">
      <Header/>
      <Router>
            <ScrollToTop/>
            <Route path="/" exact component={MainPage} />

            <Route path="/newGame" exact component={NewGame} />
      </Router>
    <div id="modal-root"></div>
    </div>
  );
}

export default App;
