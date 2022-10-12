/** @format */

import React from "react";
import ReactDom from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDom.createRoot(element);

const User = ({ nama, pekerjaan }) => {
  return (
    <div>
      <h4>
        Nama : {nama} <br />
        Pekerjaan : {pekerjaan}
      </h4>
    </div>
  );
};
function App() {
  return (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <input
        type="number"
        max={25}
        style={{ border: "3px solid", color: "red" }}
      />
      <User nama="Yahya" pekerjaan="Programmer" />
      <User nama="Zakaria" pekerjaan="Programmer" />
    </div>
  );
}

root.render(<App />);
