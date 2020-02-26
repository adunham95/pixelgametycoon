import React, {useState} from 'react';
import "./App.scss"
import {Header, ScrollToTop, Nav} from "./components/components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MainPage, NewGame} from "./pages/index"

function App() {

  // const [modalID, setModalID] = useState("false");

  return (
    <div className="App">
      <Router>
        <Header/>
        <ScrollToTop/>
        <Route path="/" exact component={MainPage} />

        <Route path="/newGame" exact component={NewGame} />

        <Nav />
      </Router>
    <div id="modal-root"></div>
    </div>
  );
}

export default App;
