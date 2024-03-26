import styled from "@emotion/styled";

export const MainTopWrap = styled.div`
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  h2 {
    font-size: 2.6rem;
  }

  .main-top {
    display: flex;
    height: 52px;
    gap: 10px;

    .main-top-icon {
      img {
        width: 52px;
      }
    }

    .main-top-text {
      max-width: 191px;
      font-size: 1.4rem;
      border: 2px solid rgba(0, 0, 0, 0.2);
      background-color: rgb(255, 255, 255);
      border-radius: 25px;
      color: #888;
      display: flex;
      align-items: center;
    }

    .main-top-text h3 {
      width: 100%;
      text-align: center;
      font-weight: 500;
    }

    .main-top-icon-2 {
      img {
        max-width: 94px;
        border-radius: 25px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .main-top {
      display: flex;
      animation: moveLeft infinite 15s linear;
    }

    @keyframes moveLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .icon1,
    .icon2,
    .icon3,
    .icon4 {
      animation: fadeIn infinite 5s linear;
    }

    h2 {
      width: 100%;
      text-align: start;
      padding-left: 10px;
      margin-bottom: 10px;
    }
  }
`;
