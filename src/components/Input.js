import "../data.json";
// Object morse = [
//   {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".---.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//     1: ".----",
//     2: "..---",
//     3: "...--",
//     4: "....-",
//     5: ".....",
//     6: "-....",
//     7: "--...",
//     8: "---..",
//     9: "----.",
//     0: "-----",
//     ",": "--..--",
//     ".": ".-.-.-",
//     "?": "..--..",
//   }
// ];

const Input = (props) => {
  const [userInput, setUserInput]; = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  return;
  <form onSubmit={handleSubmit}>
    <input
      type="textarea"
      value={userInput}
      onChange={handleChange}
      placeholder="Type something..."
    />
  </form>;
};
export default Input;
