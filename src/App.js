import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Data from "./data.json";
function App() {
  const [translatedText, setTranslatedText] = useState("");
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function codeThatText(e) {
    e.preventDefault();
    let morseText = "";
    userInput.split("").forEach((chr) => {
      morseText += " " + Data[chr.toLowerCase()];
    });
    setTranslatedText(morseText);
  }
  return (
    <React.Fragment>
      <h1>Morse Code Converter</h1>
      <form>
        {" "}
        <Input onKeyUp={codeThatText} onChange={handleChange} />
        <Output value={translatedText} />
      </form>
    </React.Fragment>
  );
}

export default App;

// import React, { useState } from "react";
// import Data from "./data.json";

// const App = () => {
//   const [translatedText, setTranslatedText] = useState("");
//   const [userInput, setUserInput] = useState("");
//   function handleChange(e) {
//     setUserInput(e.target.value);
//   }
//   function codeThatText(e) {
//     e.preventDefault();
//     let morseText = "";
//     userInput.split("").forEach((chr) => {
//       morseText += " " + Data[chr.toLowerCase()];
//     });
//     setTranslatedText(morseText);
//   }

//   return (
//     <React.Fragment>
//       <h3>Translate to Morse</h3>
//       <form>
//         <div className="container">
//           <label>Input Message:</label>
//           <textarea
//             cols="50"
//             rows="8"
//             onKeyUp={codeThatText}
//             onChange={handleChange}
//             placeholder="Type a message here"
//           />
//         </div>
//         <div className="container">
//           <label>Output Message:</label>
//           <textarea
//             cols="50"
//             rows="8"
//             placeholder="Here comes Morse code"
//             value={translatedText}
//             readOnly
//           />
//         </div>
//       </form>
//     </React.Fragment>
//   );
// };

// export default App;
