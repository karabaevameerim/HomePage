import React from "react";
import AuthPage from "./pages/AuthPage";
import CreditCardPage from "./pages/CreditCardPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
      <AuthPage />
      <CreditCardPage />
    </div>
  );
};

export default App;
