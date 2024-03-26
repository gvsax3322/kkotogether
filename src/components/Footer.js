import React from "react";
import { FooterWrap } from "../styles/footerstyle";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer-info">
        <div className="logo"></div>
        <p>카카오같이가치는 카카오와 카카오임팩트가 함께합니다.</p>
      </div>
      <div className="footer-info-2">
        <ul>
          <li>
            <a href="#">© Kakao Corp.</a>
          </li>
          .
          <li>
            <a href="#">고객센터</a>
          </li>
          .
          <li>
            <a href="#">문의하기</a>
          </li>
          .
          <li>
            <a href="#">이용약관</a>
          </li>
          .
          <li>
            <a href="#">
              <strong>개인정보처리방침</strong>
            </a>
          </li>
        </ul>
        <div>
          <a href="#">
            <img src="../../assets/images/z1.svg" />
          </a>
          <a href="#">
            <img src="../../assets/images/z2.svg" />
          </a>
          <a href="#">
            <img src="../../assets/images/z3.svg" />
          </a>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
