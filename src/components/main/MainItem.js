import React from "react";
import { MainItems } from "../../styles/mainLeftstyle";

const MainItem = ({ item }) => {
  return (
    <MainItems percent={item.percent}>
      <a href={item.link}>
        <div className="item-info">
          <div className="item-img">
            <img src={`../../assets/images/${item.imgpath}`} />
          </div>
          <div className="item-mb">
            <h3 className="item-h3">{item.cardname}</h3>
            <p>{item.comment}</p>
            <div className="bar" />
            <div className="itme-mo">
              <span>{item.money}</span>
              <span className="item-red">{item.percent}</span>
            </div>
          </div>
        </div>
      </a>
    </MainItems>
  );
};

export default MainItem;
