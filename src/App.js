import React, { useState } from "react";
// import Input from "./components/Input";
// import Output from "./components/Output";
import Data from "./data.json";
function App() {
  const morseCode = Data.map((obj) => {
    console.log(morseCode);
  });
  const { characterArr, morseArr } = obj;
  return (
    <React.Fragment>
      <h1>fucking Morse Code</h1>
    </React.Fragment>
  );
}

export default App;
