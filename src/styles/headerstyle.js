import styled from "@emotion/styled";

export const HeaderWarp = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background: #fff;
  z-index: 999;
  border-bottom: 1px solid #eee;
  .warp {
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    height: 100%;
    margin: 0px auto;
    .logo {
      display: block;
      background: url("../../assets/images/heder/p2.svg") no-repeat center;
      width: 115px;
    }
    nav {
      ul {
        display: flex;
        gap: 25px;
        font-size: 1.6rem;
        font-weight: 500;
        height: 100%;
        li {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0px 14px;
        }
      }
    }
    .header-end {
      display: flex;
      align-items: center;
      gap: 25px;
      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }

    .header-img {
      width: 24px;
      border-radius: 8px;
    }
  }
  .li-active {
    border-bottom: 2px solid rgb(57, 57, 57);
  }

  .li-red::after {
    position: relative;
    content: "•";
    top: -0.6em;
    left: 5px;
    color: rgb(255, 90, 114);
  }
  .mb-warp {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: 92px;
    .warp {
      display: none;
    }
    .mb-warp {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0px auto;
      .logo {
        background: url("../../assets/images/heder/p2.svg") no-repeat center;
        width: 115px;
        height: 55px;
      }
      nav {
        height: 100%;
        ul {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          font-size: 1.4rem;
          font-weight: 400;
          gap: 10px;
          height: 37px;
          width: 100%;
          padding: 0px 20px;
          li {
            display: flex;
            align-items: center;
          }
        }
      }
      .header-end {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          padding-left: 20px;
          border: none;
          background: transparent;
          cursor: pointer;
        }
        .mb-search {
          padding-right: 20px;
        }
      }

      .header-img {
        width: 24px;
        border-radius: 8px;
      }
    }
    .li-active {
      border-bottom: 2px solid rgb(57, 57, 57);
    }

    .li-red::after {
      position: relative;
      content: "•";
      top: -0.6em;
      left: 5px;
      color: rgb(255, 90, 114);
    }
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .modal-content {
    background-color: white;
    width: 300px;
    height: 100%;
    padding: 30px;
  }
`;

export const ModalWarp = styled.div`
  position: relative;
  .login {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    a {
      img {
        width: 40px;
        border-radius: 15px;
      }
    }
    span {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
  .modal-1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 6px;
    background-color: rgb(249, 249, 249);
    cursor: pointer;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 50%;
      span {
        font-size: 1.3rem;
        color: rgb(68, 68, 68);
      }
    }
    .modal-1-border {
      border-right: 1px solid #e5e5e5;
    }
  }
  .modal-2 {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    .modal-2-ul-1 {
      display: flex;
      flex-direction: column;
      gap: 25px;
      li {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          margin-right: 12px;
        }
        span {
          font-size: 1.6rem;
          font-weight: 500;
        }
      }
    }
  }
  .modal-2-ul-2 {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      font-size: 1.4rem;
      width: 35%;
      padding: 5px 0px;
      margin-right: 35px;
    }
  }
`;
