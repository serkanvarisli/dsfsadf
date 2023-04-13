import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./components/container";
import Darkmode from "./components/darkmode";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { ReactDOM } from "react";

function App() {
  return (
    <div className="App">
      <Darkmode />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
