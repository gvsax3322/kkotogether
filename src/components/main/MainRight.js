import React, { useEffect, useState } from "react";
import { MainRightTop, MainRightWrap } from "../../styles/mainRightstyle";
import Card3 from "./Card3";
import MainSwiper2 from "./MainSwiper2";

const MainRight = () => {
  const [cardswp, setCardswp] = useState([]);
  const [card, setCard] = useState([]);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const date = `${year}-${month}-${day}`;

  const getSwp = () => {
    const jsonUrl = "./api/swp2.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCardswp(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getItem = () => {
    const jsonUrl = "./api/item2.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCard(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSwp();
    getItem();
  }, []);
  return (
    <MainRightWrap>
      <Card3>
        <MainRightTop>
          <div className="main-info-top">
            <div>
              <h3>
                우리가
                <br />
                같이만든 변화들
              </h3>
              <p>{date} 기준</p>
            </div>
            <div>
              <img src="../../assets/images/p12.png" />
            </div>
          </div>
          <div className="box">
            <div>
              <img />
              <strong>총 기부금</strong>
              <h4>73,720,872,463원</h4>
            </div>
          </div>
          <div>
            <MainSwiper2 cardswp={cardswp} />
          </div>
        </MainRightTop>
      </Card3>
      <Card3>
        <a href="#">
          <div className="pink">
            <div className="text">
              <h2>
                우리에게도
                <br />
                봄이 올까요?
              </h2>
              <p>모두의 봄 응원하기 &gt;</p>
            </div>
            <div className="icon-img">
              <img src="../../assets/images/q24.png" />
            </div>
          </div>
        </a>
      </Card3>
      <Card3>
        <div className="card">
          <h2>오늘 너의 마음날씨는 어때?</h2>
          {card.map(item => (
            <a href={item.link} key={item.id}>
              <div className="card-info">
                <div className="card-info-img">
                  <img src={`../../assets/images/${item.imgpath}`} />
                </div>
                <div className="card-text">
                  <h3>{item.comment}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Card3>
      <Card3>
        <div className="end-card">
          <h2>놓치면 아까운 같이가치 소식</h2>
          <div className="end-card-info">
            <div className="end-card-info-1">
              <h3>카카오같이가치 카카오톡 채널을 추가해보세요!</h3>
              <img src="../../assets/images/a7.png" />
            </div>
            <div className="end-card-info-2">
              <h3>참여만으로도 기부에 참여할 수 있어요!</h3>
              <img style={{ marginTop: 60 }} src="../../assets/images/a7.png" />
            </div>
          </div>
          <div className="end-card-info">
            <div className="end-card-info-2">
              <h3>같이가치를 통해 어떤 변화가 이루어질까요? 🔍</h3>
              <img src="../../assets/images/a7.png" />
            </div>
            <div className="end-card-info-1">
              <h3>모금을 제안하고 싶은 당신을 위한 꿀팁💡</h3>
              <img src="../../assets/images/a7.png" />
            </div>
          </div>
        </div>
      </Card3>
    </MainRightWrap>
  );
};

export default MainRight;
