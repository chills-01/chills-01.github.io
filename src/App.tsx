import "./App.css";
import MovingButton from "./MovingButton";
import StaticButton from "./StaticButton";
import { useState } from "react";

function App() {
  const [numSwaps, setNumSwaps] = useState(0);
  const [noClicks, setNoClicks] = useState(0);

  const [buttonData, setButtonData] = useState([
    {
      text: "Yes",
      // onClick: swapButtons,
      color: "#64c8b9",
      isHovered: false,
      gif: "src/assets/yesGIF.gif"
    },
    {
      text: "No",
      // onClick: swapButtons,
      color: "#ff0c0c",
      isHovered: false,
      gif: "src/assets/noGIF.gif",
      clicks: noClicks,
      updateClicks: setNoClicks,
    },
  ]);

  const swapButtons = () => {
    setButtonData([{ ...buttonData[1] }, { ...buttonData[0] }]);
    setNumSwaps(numSwaps + 1);
  };

  const decideOnClick = () => {
    // TODO how many swaps for certain behaviour
    if (numSwaps == 1) {
      return
    }
    if (numSwaps >= 2) {
      return;
    }
    return swapButtons;
  };

  return (
    <>
      <span style={{ width: "100%" }}>
        <h1 id="title">🌹 Will you be my Valentine? 🌹</h1>
      </span>
      <div className="button-wrapper">
        <StaticButton props={buttonData[0]} onClick={decideOnClick()} />
        <MovingButton props={buttonData[1]} onClick={decideOnClick()} />
      </div>
    </>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [buttonData, setButtonData] = useState([
//     { text: "Button 1", color: "red" },
//     { text: "Button 2", color: "blue" },
//   ]);

//   const swapData = () => {
//     setButtonData([{ ...buttonData[1] }, { ...buttonData[0] }]);
//   };

//   return (
//     <div className="button-container">
//       <button
//         style={{ backgroundColor: buttonData[0].color }}
//         onClick={swapData}
//       >
//         {buttonData[0].text}
//       </button>
//       <button
//         style={{ backgroundColor: buttonData[1].color }}
//         onClick={swapData}
//       >
//         {buttonData[1].text}
//       </button>
//     </div>
//   );
// }

// export default App;
