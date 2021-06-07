// import React, { useState } from "react";
// import Data from "../data.json";
const Output = ({ translatedText }) => {
  return (
    <div className="container">
      <label>Output Message:</label>
      <textarea
        cols="50"
        rows="8"
        placeholder="Here comes Morse code"
        value={translatedText}
        readOnly
      />
    </div>
  );
};

export default Output;
