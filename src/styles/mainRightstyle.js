import styled from "@emotion/styled";

export const MainRightWrap = styled.section`
  max-width: 360px;
  .pink {
    height: 204px;
    background: #ffd9dd;
    display: flex;
    .text {
      padding: 35px 26px;
      h2 {
        font-size: 2rem;
        color: #661a20;
        margin-bottom: 10px;
      }
      p {
        color: rgb(102, 26, 32);
        font-size: 1.4rem;
      }
    }
  }
  .icon-img {
    position: relative;
    img {
      width: 120px;
      height: 120px;
      margin-left: 50px;
      margin-top: 70px;
    }
  }
  .card {
    padding: 30px 26px;
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .card-info {
      display: flex;
      width: 100%;
      background-color: rgb(245, 245, 244);
      border-radius: 6px;
      gap: 15px;
      margin-bottom: 15px;
      .card-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      h3 {
        font-size: 1.5rem;
        color: #444;
      }
      p {
        font-size: 1.3rem;
        color: #888;
      }
      .card-info-img {
        img {
          width: 60px;
          height: 60px;
          border-radius: 6px;
        }
      }
    }
  }
  .end-card {
    padding: 30px 26px;
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .end-card-info {
      display: flex;
      gap: 5px;
      margin-bottom: 5px;
    }
    .end-card-info-1 {
      background: #aaa6a2;
      width: 152px;
      height: 152px;
      padding: 15px 12px 12px;
      border-radius: 5px;
      h3 {
        color: #fff;
        font-size: 1.5rem;
      }
      img {
        width: 24px;
        margin-top: 40px;
        margin-left: 100px;
      }
    }
    .end-card-info-2 {
      background-color: rgb(255, 201, 0);
      width: 152px;
      height: 152px;
      padding: 15px 12px 12px;
      border-radius: 5px;
      h3 {
        color: #fff;
        font-size: 1.5rem;
      }
      img {
        width: 24px;
        margin-top: 40px;
        margin-left: 100px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .pink {
      justify-content: space-between;
    }
    .end-card-info {
      width: 100%;
    }
    .end-card-info-1 {
      width: 50% !important;
    }
    .end-card-info-2 {
      width: 50% !important;
    }
  }
`;

export const MainCradRight = styled.div`
  position: relative;
  width: 360px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  background-color: rgb(255, 255, 255);
  @media screen and (max-width: 768px) {
    overflow: hidden;
    width: 89.5vw;
  }
`;

export const MainRightTop = styled.div`
  .main-info-top {
    background: #ffe800;
    display: flex;
    justify-content: space-between;
    border-radius: 12px 12px 0px 0px;
    padding: 34px 26px 29px;
    h3 {
      font-size: 2rem;
    }
    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.3rem;
      padding-top: 13px;
    }
    img {
      width: 103px;
      height: 113px;
      object-fit: cover;
    }
  }
  .main-info-btton {
    height: 100px;
  }
  .box {
    background: #ffe800;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    div {
      display: flex;
      align-items: center;
      width: 80%;
      background: white;
      height: 60px;
      padding: 0px 20px;

      img {
        background: url("../../assets/images/q20.png") no-repeat center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
      strong {
        font-size: 1.6rem;
        color: #444;
        margin-left: 10px;
      }
      h4 {
        font-size: 1.6rem;
        margin-left: 20px;
        color: #202020;
      }
    }
  }
`;

export const MainSwiperStyle2 = styled.div`
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    font-size: 1.1rem;
    color: #fff;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    margin: 0 5px;
    border-radius: 2px;
    background-color: #000;
  }
  .swp {
    height: 281px;
    padding: 31px 26px 46px;
    h3 {
      font-size: 1.3rem;
      color: #888;
      font-weight: 300;
      margin-bottom: 13px;
    }
    h4 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 11px;
    }
    p {
      line-height: 1.92;
      max-height: calc(1.92 * 5);
      overflow: hidden;
      color: #4a4a4a;
      display: -webkit-box;
      font-weight: 300;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      font-size: 1.4rem;
    }
  }
`;
