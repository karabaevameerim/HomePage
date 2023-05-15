import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import CreditCardProvider from "./context/CreditCardProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CreditCardProvider>
        <App />
      </CreditCardProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
