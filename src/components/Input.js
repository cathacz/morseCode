// import React, { useState } from "react";
import Data from "../data.json";
const Input = () => {
  return (
    <div className="container">
      <label>Input Message:</label>
      <textarea
        cols="50"
        rows="8"
        // onKeyUp={codeThatText}
        // onChange={handleChange}
        placeholder="Type a message here"
      />
    </div>
  );
};

export default Input;
