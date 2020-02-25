import React, {useState} from 'react';
import {Header, ScrollToTop} from "./components/components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MainPage} from "./pages/index"

function App() {

  // const [modalID, setModalID] = useState("false");

  return (
    <div className="App">
      <Header/>
      <Router>
            <ScrollToTop/>
            <Route path="/" exact component={MainPage} />
      </Router>
    <div id="modal-root"></div>
    </div>
  );
}

export default App;
