import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/sign-up" Component={SignupPage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
