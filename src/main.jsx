import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { insertCoin } from "playroomkit"
insertCoin({
  skipLobby: true,
  gameId: "8AINCsxKw26mY1HgEJ3V"
}).then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
