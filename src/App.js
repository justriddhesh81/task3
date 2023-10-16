import "./App.css";
import ColorPicker from "./components/ColorPicker.js";

const App = () => {
  const colors_list = [
    "red",
    "lightgreen",
    "blue",
    "yellow",
    "magenta",
    "cyan",
    "orange",
    "purple",
    "lightsalmon",
    "green",
    "orangered",
    "lightblue",
    "brown",
    "darkgoldenrod",
    "royalblue",
    "yellowgreen",
  ];
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors_list} />
    </div>
  );
};

export default App;