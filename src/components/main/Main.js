import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { MainWrap } from "../../styles/mainstyle";

const Main = () => {
  return (
    <MainWrap>
      <MainLeft />
      <MainRight />
    </MainWrap>
  );
};

export default Main;
