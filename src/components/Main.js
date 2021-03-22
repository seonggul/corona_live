import React from "react";
import styled from "styled-components";
import Top from "./Top";
import TotalNum from "./TotalNum";
import BarGraph from "./BarGraph";
import EachArea from "./EachArea";
import Footer from "./Footer";

const Main = ({ api, date }) => {
  return (
    <Container>
      <Container2>
        <Top date={date} />
        <TotalNum api={api} date={date} />
        <BarGraph api={api} />
        <EachArea api={api} date={date} />
      </Container2>
      <>
        <Footer />
      </>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: white;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  width: 430px;
  height: 100%;
  flex-direction: column;
  color: white;
  border: 5px;
  @media only screen and (max-width: 430px) {
    width: 100vw;
    height: 100%;
  }
`;
