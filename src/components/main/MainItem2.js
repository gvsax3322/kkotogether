import React from "react";
import { MainItemStyle } from "../../styles/mainLeftstyle";

const MainItem2 = ({ item }) => {
  return (
    <MainItemStyle percent={item.percent}>
      <a href={item.link}>
        <div className="sp-item">
          <div>
            <img src={`../../assets/images/${item.imgpath}`} />
          </div>
          <div className="sp-item-r">
            <p>{item.tag}</p>
            <h3>{item.comment}</h3>
            <span>{item.detail}</span>
            <div className="bar" />
            <div className="itme-mo">
              <span className="item-sapn">{item.money}</span>
              <span className="item-red">{item.percent}</span>
            </div>
          </div>
        </div>
      </a>
    </MainItemStyle>
  );
};

export default MainItem2;
