import styled from "@emotion/styled";

export const MainLeftWrap = styled.section`
  position: relative;
  max-width: 700px;
  margin-bottom: 40px;

  .banner {
    background: url("../../assets/images/p1.jpeg") no-repeat center;
    height: 250px;
    width: 100%;
    background-size: cover;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
    a {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .main-item {
    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 5px;
    }
    p {
      color: #666;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    .main-item-card {
      width: 100%;
      display: flex;

      .main-item-card-1 {
        background: url("../../assets/images/q1.jpeg") no-repeat center;
        background-size: cover;
        min-width: 280px;
        min-height: 168px;
        border-radius: 5px;
        .main-item-card-info {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          height: 40px;
          background: #202020;
          margin-bottom: 90px;
          border-radius: 5px 5px 0 0;
          .main-item-p {
            display: flex;
            margin: 0;
            align-items: center;
            color: #c9c9c9;
            font-size: 1.4rem;
          }
          .main-item-any {
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 1.7rem;
            font-weight: 500;
            gap: 2px;
            span {
              background: #444;
              padding: 2px;
            }
            hr {
              position: absolute;
              height: 1px;
              background: black;
              min-width: 107px;

              border: none;
            }
            .one {
              font-size: 1.4rem;
              color: #c9c9c9;
              background: none;
              margin: 0;
            }
          }
        }
      }
      .main-item-card-2 {
        max-width: 370px;
        padding-left: 20px;
        h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }
        .bar {
          max-width: 100%;
          height: 3px;
          background: linear-gradient(to right, #ff4050 92%, #e9e9e9 50%);
          border-radius: 3px;
          margin-bottom: 10px;
        }
        .main-item-card-2-info {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 1.4rem;
            font-weight: 500;
            color: #444;
            margin: 0;
          }
        }
        .main-item-card-2-info2 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        p {
          font-size: 1.2rem;
          color: #ff4050;
        }
        span {
          font-size: 1.2rem;
          color: #444;
        }
        .main-bt {
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            font-size: 1.4rem;
            font-weight: 400;
            width: 143px;
            min-height: 40px;
            border: none;
            border: 1px solid #444444;
            background: transparent;
            border-radius: 6px;
            cursor: pointer;
          }
        }
      }
    }
    .end {
      position: relative;
      border-radius: 5px;
      color: #fff;
      width: 58px;
      margin-left: 10px;
      font-size: 1.2rem;
      font-weight: 300;
      height: 27px;
      padding: 4px 8px 5px;
      background: #ff4050;
      display: flex;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      background: url("../../assets/images/mp1.jpeg") no-repeat center;
      width: 89.5vw;
      height: 85.25vw;
      overflow: hidden;
      background-size: cover;
      a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .main-item {
      display: flex;
      flex-direction: column;
    }
    .main-item-card {
      flex-direction: column;
    }
    .main-item-card-1 {
      width: 81.5vw;
      height: 50.25vw;
    }
    .main-item-card-2 {
      padding: 0 !important;
    }

    .end {
      margin-top: 135px !important;
    }
  }
`;

export const MainItems = styled.div`
  position: relative;
  .item-info {
    width: 200px;
  }

  .item-img {
    position: relative;
    img {
      width: 200px;
      height: 137px;
      border-radius: 10px;
    }
    margin-bottom: 10px;
  }
  .item-h3 {
    font-size: 1.4rem;
    color: #202020;
    line-height: 20px;
    font-weight: 400;
    height: 40px;
  }
  p {
    font-size: 1.2rem;
    color: #888;
    margin-bottom: 15px;
  }
  .bar {
    max-width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      #ff4050 ${props => props.percent},
      #e9e9e9 0%
    );
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .itme-mo {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-size: 1.2rem;
  }
  .item-red {
    color: #ff4050;
  }

  @media screen and (max-width: 768px) {
    .item-info {
      display: flex;
      gap: 20px;
    }
    .item-h3 {
      width: 300px;
    }
  }
`;

export const MainItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Timer = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Timer2 = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .clock {
    width: 80%;
    height: 80%;
    position: relative;
  }

  .second-hand {
    width: 2px;
    height: 45%;
    background-color: white;
    position: absolute;
    top: 5%;
    left: 50%;
    transform-origin: bottom;
    transition: transform 0.5s ease;
  }
`;

export const Tagstyle = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 13px;
  }
  .tag-wrap {
    ul {
      display: flex;
      gap: 5px;
      margin-bottom: 21px;
      li {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        height: 37px;
        padding: 7px 14px;
        border: 1px solid #eee;
        border-radius: 18px;
        cursor: pointer;
      }
      .active {
        background: #000;
        color: #fff;
      }
    }
  }
`;

export const MainSwiperStyle = styled.div`
  padding: 0;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .banner-wrap .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination {
    width: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 20px;
    font-size: 1.1rem;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 630px;
    margin-bottom: 20px;
  }

  img {
    width: 250px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .sp-item {
    background: #000;
    display: flex;
    border-radius: 13px;
  }
  .sp-item-r {
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      color: #888;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.4rem;
      color: #888;
      margin-bottom: 10px;
    }
    .sp-item-btton {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      height: 30px;
      width: 40%;
      border: 1px solid #bb6bff;
      img {
        width: 13px;
      }
      p {
        color: #bb6bff;
        font-size: 1.3rem;
        margin: 0;
      }
    }
  }
`;

export const MainItemStyle = styled.div`
  img {
    width: 250px;
    height: 250px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .sp-item {
    display: flex;
    border-radius: 13px;
  }
  .sp-item-r {
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      color: #888;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    span {
      position: relative;
      font-size: 1.4rem;
      color: #888;
      margin-bottom: 10px;
      line-height: 23px;
      height: 70px;
      max-width: 390px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bar {
      max-width: 100%;
      height: 3px;
      background: linear-gradient(
        to right,
        #ff4050 ${props => props.percent},
        #e9e9e9 0%
      );
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .itme-mo {
      display: flex;
      justify-content: space-between;
      height: 10px;
    }
    .item-sapn {
      font-size: 1.4rem;
      color: #000;
      font-weight: 500;
    }
    .item-red {
      color: #ff4050;
    }
  }
  @media screen and (max-width: 768px) {
    .sp-item {
      flex-direction: column;
      height: 100%;
    }
    img {
      width: 100%;
      height: 150px;
      border-bottom-left-radius: 0px;
    }
    .sp-item-r {
      height: 250px;
    }
  }
`;
