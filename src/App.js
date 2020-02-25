import React, {useState} from 'react';
import {Header, ToggleContent, Modal} from "./components/components"

function App() {

  // const [modalID, setModalID] = useState("false");

  return (
    <div className="App">
      <Header/>

    {/* <button onClick={()=> setModalID("true")}>Open Modal</button>

      <ToggleContent
        isOpen={modalID === "true"}
        // toggle={show => <button onClick={show}>Open</button>}
        content={hide => (
          <Modal close={() => {setModalID("false")}} modalClass={"lifeModal datingModal"}>
            
          </Modal>
        )}
      /> */}
    <div id="modal-root"></div>
    </div>
  );
}

export default App;
