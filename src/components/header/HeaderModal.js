import React from "react";
import { motion } from "framer-motion";
import { ModalBackground, ModalWarp } from "../../styles/headerstyle";

const HeaderModal = ({ setIsOpen }) => {
  return (
    <ModalBackground onClick={setIsOpen}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className="modal-content"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <ModalWarp>
          <div className="login">
            <a href="#">
              <img src="../../assets/images/heder/p1.png" />
            </a>
            <span>로그인하세요</span>
          </div>
          <div className="modal-1">
            <div className="modal-1-border">
              <img src="../../assets/images/icon/i1.svg" />
              <span>MY</span>
            </div>
            <div>
              <img src="../../assets/images/icon/i2.svg" />
              <span>알림</span>
            </div>
          </div>
          <div className="modal-2">
            <ul className="modal-2-ul-1">
              <li>
                <img src="../../assets/images/icon/i3.svg" />
                <span>같이기부</span>
              </li>
              <li>
                <img src="../../assets/images/icon/i4.svg" />
                <span>모두의행복</span>
              </li>
              <li>
                <img src="../../assets/images/icon/i5.svg" />
                <span>마음의날씨</span>
              </li>
              <li>
                <img src="../../assets/images/icon/i6.svg" />
                <span>캠페인</span>
              </li>
            </ul>
            <ul className="modal-2-ul-2">
              <li>같이가치 소개</li>
              <li>매거진</li>
              <li>공지사항</li>
              <li>모금제안</li>
            </ul>
          </div>
        </ModalWarp>
      </motion.div>
    </ModalBackground>
  );
};

export default HeaderModal;
