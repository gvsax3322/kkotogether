import React, { useState } from "react";
import { HeaderWarp } from "../styles/headerstyle";
import HeaderModal from "./header/HeaderModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hedleClikModal = () => {
    setIsOpen(true);
  };
  return (
    <HeaderWarp>
      {isOpen && (
        <HeaderModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      )}
      <div className="warp">
        <a className="logo" href="#"></a>
        <nav>
          <ul>
            <li className="li-active">
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#" className="li-red">
                매달기부
              </a>
            </li>
            <li>
              <a href="#">같이기부</a>
            </li>
            <li>
              <a href="#">모두의행동</a>
            </li>
            <li>
              <a href="#">마음날씨</a>
            </li>
            <li>
              <a href="#">캠페인</a>
            </li>
          </ul>
        </nav>
        <div className="header-end">
          <a href="#">
            <img
              className="header-img"
              src="../../assets/images/heder/p1.png"
            />
          </a>
          <a href="#">
            <img src="../../assets/images/heder/p3.svg" />
          </a>
          <button onClick={hedleClikModal}>
            <img src="../../assets/images/heder/p4.svg" />
          </button>
        </div>
      </div>
      <div className="mb-warp">
        <div className="header-end">
          <button onClick={hedleClikModal}>
            <img src="../../assets/images/heder/p4.svg" />
          </button>

          <a className="logo" href="#" />
          <a className="mb-search" href="#">
            <img src="../../assets/images/heder/p3.svg" />
          </a>
        </div>
        <nav>
          <ul>
            <li className="li-active">
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#" className="li-red">
                매달기부
              </a>
            </li>
            <li>
              <a href="#">같이기부</a>
            </li>
            <li>
              <a href="#">모두의행동</a>
            </li>
            <li>
              <a href="#">마음날씨</a>
            </li>
            <li>
              <a href="#">캠페인</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWarp>
  );
};

export default Header;
