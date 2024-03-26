import React from "react";
import { MainTopWrap } from "../../styles/mainTopstyle";

const MainTop = () => {
  return (
    <MainTopWrap>
      <h2>
        세상을 위한 따뜻한 마음💛 <br />
        같이가치와 함께해요.
      </h2>
      <div className="main-top">
        <div className="main-top-icon">
          <img src="../../assets/images/s1/p1.png" />
        </div>
        <div className="main-top-text">
          <h3>기부 58,128,917 건</h3>
        </div>
        <div className="main-top-icon-2">
          <img src="../../assets/images/s1/p2.png" />
        </div>
        <div className="main-top-icon">
          <img src="../../assets/images/s1/p3.png" />
        </div>
        <div className="main-top-text" style={{ width: 140 }}>
          <h3>같이가치 소개</h3>
        </div>
        <div className="main-top-icon" style={{ marginLeft: "-20px" }}>
          <img src="../../assets/images/s1/p4.png" />
        </div>
      </div>
    </MainTopWrap>
  );
};

export default MainTop;
