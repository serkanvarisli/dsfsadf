import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/container";
import Darkmode from "./components/Darkmode";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
