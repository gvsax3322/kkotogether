import React, { useEffect, useState } from "react";
import {
  MainItemWrap,
  MainLeftWrap,
  Tagstyle,
} from "../../styles/mainLeftstyle";
import Card from "./Card";
import MainItem from "./MainItem";
import CountdownTimer from "./CountdownTimer";
import ClockAnimation from "./ClockAnimation";
import MainSwiper from "./MainSwiper";
import Card2 from "./Card2";
import MainItem2 from "./MainItem2";

const MainLeft = () => {
  const [cardList, setCardList] = useState([]);
  const [cardList2, setCardList2] = useState([]);
  const [cardswp, setCardswp] = useState([]);
  const [cardItem, setCardItem] = useState([]);
  const [activeIndex, setActiveIndex] = useState("2");

  const getNewsList = () => {
    const jsonUrl = "./api/card.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCardList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getNewsList2 = _num => {
    const jsonUrl = `./api/card${_num}.json`;
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCardList2(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getSwp = () => {
    const jsonUrl = "./api/swp.json";
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
    const jsonUrl = "./api/item.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCardItem(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNewsList();
    getNewsList2(2);
    getSwp();
    getItem();
  }, []);

  const handleClikLi = _num => {
    getNewsList2(_num);
    setActiveIndex(_num);
  };

  return (
    <MainLeftWrap>
      <div className="banner">
        <a href="#" />
      </div>
      <Card>
        <div className="main-item">
          <h3>마지막 기부자를 찾습니다 👀</h3>
          <p>목표 달성까지 얼마 남지 않았어요!</p>
          <div className="main-item-card">
            <div className="main-item-card-1">
              <a href="#">
                <div className="main-item-card-info">
                  <p className="main-item-p">남은금액</p>
                  <div className="main-item-any">
                    <span>6</span>
                    <span>7</span>
                    <span>1</span>
                    <span>5</span>
                    <span>3</span>
                    <span>1</span>
                    <span>2</span>
                    <hr />
                    <p className="one">원</p>
                  </div>
                </div>
                <div className="end">종료임박</div>
              </a>
            </div>
            <div className="main-item-card-2">
              <h3>🇰🇷 2024 3.1런! 함께 마음을 전해주세요</h3>
              <div className="bar" />
              <div className="main-item-card-2-info">
                <p>73,311,428원</p>
                <p>80,000,000원 목표</p>
              </div>
              <div className="main-item-card-2-info2">
                <p>92% 달성</p>
                <span>5일 남음</span>
              </div>
              <div className="main-bt">
                <button>
                  <img src="../../assets/images/love.svg" /> 하트응원
                </button>
                <button>기부하기</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="main-item">
          <h3>가장 많이 기부 중인 모금함</h3>
          <p>오늘, 기부 하셨나요? 당신의 마음도 함께 나눠주세요!</p>
        </div>
        <MainItemWrap>
          {cardList.map(item => (
            <div key={item.id}>
              <MainItem item={item} />
            </div>
          ))}
        </MainItemWrap>
      </Card>
      <Card>
        <div className="main-item">
          <h3>️시간이 얼마 남지 않았어요!</h3>
          <p>망설이면 끝! 조금만 더 힘을 보태주세요.</p>
          <div className="main-item-card">
            <div className="main-item-card-1">
              <a href="#">
                <div
                  className="main-item-card-info"
                  style={{ justifyContent: "center" }}
                >
                  <div className="main-item-any">
                    <ClockAnimation />
                    <CountdownTimer />
                  </div>
                </div>
              </a>
            </div>
            <div className="main-item-card-2">
              <h3>학대피해아동을 위한 아이다운 행복한 어린이날 프로젝트</h3>
              <div className="bar" />
              <div className="main-item-card-2-info">
                <p>4,580,123</p>
                <p>5,000,000원 목표</p>
              </div>
              <div className="main-item-card-2-info2">
                <p>92% 달성</p>
                <span>5일 남음</span>
              </div>
              <div className="main-bt">
                <button>
                  <img src="../../assets/images/love.svg" /> 하트응원
                </button>
                <button>기부하기</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <Tagstyle>
          <h3>태그로 보는 모금함</h3>
          <div className="tag-wrap">
            <ul>
              <li
                onClick={() => handleClikLi("2")}
                className={activeIndex === "2" ? "active" : ""}
              >
                # 환경
              </li>
              <li
                onClick={() => handleClikLi("3")}
                className={activeIndex === "3" ? "active" : ""}
              >
                # 실버세대
              </li>
              <li
                onClick={() => handleClikLi("4")}
                className={activeIndex === "4" ? "active" : ""}
              >
                # 생계지원
              </li>
              <li
                onClick={() => handleClikLi("5")}
                className={activeIndex === "5" ? "active" : ""}
              >
                # 기본생활지원
              </li>
            </ul>
            <MainItemWrap>
              {cardList2.map(item => (
                <div key={item.id}>
                  <MainItem item={item} />
                </div>
              ))}
            </MainItemWrap>
          </div>
        </Tagstyle>
      </Card>
      <Card2>
        <MainSwiper cardswp={cardswp} />
      </Card2>
      {cardItem.map(item => (
        <Card2 key={item.id}>
          <MainItem2 item={item} />
        </Card2>
      ))}
    </MainLeftWrap>
  );
};

export default MainLeft;
