import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TotalNum = ({ api, date }) => {
  const [decidedCnt, setDecideCnt] = useState("");
  const [incDec, setIncDec] = useState("");
  const Cnt = async () => {
    const t1 = await api.dayData.find((e) => e.key === `${date}Total`).defCnt;
    await setDecideCnt(t1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const t2 = await api.dayData.find((e) => e.key === `${date}Total`).incDec;
    await setIncDec(t2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  useEffect(() => {
    Cnt();
  }, []);
  return (
    <Container>
      <TitleName>총 확진자수</TitleName>
      <Empty></Empty>
      <ContentCnt>
        <DecideCnt>{decidedCnt}명</DecideCnt>
        <IncDecBack>
          <IncDec>
            <FontAwesomeIcon icon={faArrowUp} />
            {incDec}
          </IncDec>
        </IncDecBack>
      </ContentCnt>
    </Container>
  );
};

export default TotalNum;

const Container = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #272b38;
  font-size: 20px;
  @media only screen and (max-width: 430px) {
    margin-left: 2.5%;
    margin-right: 2.5%;
    width: 95%;
    font-size: 18.5px;
  }
  @media only screen and (max-width: 410px) {
    font-size: 16.5px;
  }
`;

const TitleName = styled.span`
  font-size: 1em;
  color: #4e5bb5;
`;

const IncDec = styled.span`
  font-size: 0.75em;
  color: #de5071;
`;
const IncDecBack = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  background-color: #2a2332;
  border-radius: 8px;
  border-color: #de5071;
`;

const DecideCnt = styled.span`
  font-size: 1em;
`;

const ContentCnt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Empty = styled.div`
  width: 50px;
`;
