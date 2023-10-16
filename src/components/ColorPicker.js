import { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#ffc0cb");

  const handleColorButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="board" style={{ backgroundColor: selectedColor }}>
        {isColorListVisible && (
          <ul>
            {colors.map((color, index) => (
              <li key={index} onClick={() => handleColorClick(color)}>
                <div
                  style={{
                    backgroundColor: color,
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        )}

        <button onClick={handleColorButtonClick}>Pick a Color</button>
      </div>
    </div>
  );
};

export default ColorPicker;