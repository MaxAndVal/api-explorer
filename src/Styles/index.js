import styled from "styled-components";

export const Grille = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 15px;
  justify-items: center;
`;
export const SearchDiv = styled.div`
  padding: 30px 15px;
  background-color: #fff;
`;
export const MainContainer = styled.div`
  margin: 0 auto;
  justify-items: center;
  .overide {
    text-align: center;
    width: 100%;
    margin: auto;
  }
`;
export const Back = styled.div`
  display: flex;
  padding: 50px;
`;

export const DivSpec = styled.div`
  flex: 1;
`;

export const DivResult = styled.div`
  flex: 4;
`;

export const DivHead = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
  background-image: url("src/images/HeaderBG.png");
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  background-color: #fff;
  margin: 0 auto;
`;
export const Case = styled.div`
  width: "100%";
  margin: 5px;
  padding: 5px;
  & .link {
    overflow: hidden;
    color: #000;
    text-decoration: none;
  }
  p {
    text-align: center;
    height: 25px;
  }
`;
