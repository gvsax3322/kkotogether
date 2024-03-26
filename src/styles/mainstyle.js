import styled from "@emotion/styled";

export const MainWrap = styled.main`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainCrad = styled.div`
  position: relative;
  width: 700px;
  padding: 26px 20px 30px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
    overflow: hidden;
    width: 89.5vw;
  }
`;

export const MainCrad2 = styled.div`
  position: relative;
  width: 700px;
  /* max-height: 250px; */
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
    overflow: hidden;
    width: 89.5vw;
  }
`;
