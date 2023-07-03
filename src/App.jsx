import React, { useEffect, useState } from "react";

function App() {
  const [copyNotification, setCopyNotification] = useState(false);

  useEffect(() => {
    const outputCode = document.getElementById("css-code");

    const sliders = document.querySelectorAll("input[type='range']");
    sliders.forEach(function (slider) {
      slider.addEventListener("input", createBlob);
    });

    const inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(function (inp) {
      inp.addEventListener("change", createBlob);
    });

    function createBlob() {
      const radiusOne = sliders[0].value;
      const radiusTwo = sliders[1].value;
      const radiusThree = sliders[3].value;
      const radiusFour = sliders[2].value;

      const borderHeight = inputs[0].value;
      const borderWidth = inputs[1].value;

      const borderRadius = `${radiusOne}% ${100 - radiusOne}% ${
        100 - radiusThree
      }% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${
        100 - radiusFour
      }%`;

      document.getElementById(
        "border"
      ).style.cssText = `border-radius: ${borderRadius}; height: ${borderHeight}px; width: ${borderWidth}px`;

      outputCode.value = `border-radius: ${borderRadius}`;
    }

    document.getElementById("copy").addEventListener("click", function () {
      outputCode.select();
      document.execCommand("copy");
      setCopyNotification(true);
    });

    createBlob();
  }, []);

  useEffect(() => {
    if (copyNotification) {
      alert("Code wurde kopiert");
      setCopyNotification(false);
    }
  }, [copyNotification]);

  return (
    <div className="section">
      <h2 className="title">Simple Blob Generator</h2>
      <div className="container glass">
        <div id="border"></div>

        <div className="radius-value-container">
          <input type="range" defaultValue={0} />
          <input type="range" defaultValue={0} />
          <input type="range" defaultValue={100} />
          <input type="range" defaultValue={100} />
        </div>
        <div className="dimensions">
          <div>
            <label htmlFor="border-height">Height</label>
            <input type="number" defaultValue="200" id="border-height" />
          </div>
          <div>
            <label htmlFor="border-width">Width</label>
            <input type="number" defaultValue="200" id="border-width" />
          </div>
        </div>
        <input className="glass" type="text" id="css-code" readOnly />
        <button id="copy">Copy</button>
      </div>
    </div>
  );
}

export default App;
