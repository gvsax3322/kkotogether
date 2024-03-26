import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";
import MainTop from "./components/main/MainTop";
import { Wrap } from "./styles/basic";

const App = () => {
  return (
    <Wrap>
      <Header />
      <MainTop />
      <Main />
      <Footer />
    </Wrap>
  );
};

export default App;
