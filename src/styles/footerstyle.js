import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  position: relative;
  height: 94px;
  padding: 27px 20px 29px;
  border-top: 1px solid #eee;
  margin-bottom: 20px;
  .footer-info {
    .logo {
      display: block;
      background: url("../../assets/images/heder/p2.svg") no-repeat center;
      width: 115px;
      height: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.4rem;
      color: #666;
      margin-bottom: 30px;
    }
  }
  .footer-info-2 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;

    ul {
      display: flex;
      gap: 10px;
      li {
        font-size: 1.4rem;
        color: #444;
      }
    }
    div {
      display: flex;
      gap: 15px;
      img {
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      margin: 0 auto;
    }
    .footer-info-2 {
      flex-direction: column;
      align-items: center;
      border-top: 1px solid #eee;
      padding-top: 20px;
      ul li:first-of-type {
        display: none;
      }
      div {
        margin-top: 20px;
      }
    }
  }
`;
