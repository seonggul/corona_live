import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = ({ date }) => {
  const [sliceDate, setSliceDate] = useState([]);

  const splitDate = async () => {
    let year = date.substr(0, 4);
    let month = date.substr(4, 2);
    let day = date.substr(6, 2);
    let mergeDate = [];
    await mergeDate.push(year, month, day);
    await setSliceDate(mergeDate);
  };
  useEffect(() => {
    splitDate();
  }, []);
  return (
    <Container>
      <Title>
        <span>CORONA </span>
        <Empty></Empty>
        <Title2>LIVE</Title2>
        <FontDiv>
          <FontAwesomeIcon color="#A24C62" icon={faShieldVirus} />
        </FontDiv>
      </Title>
      <Day>
        {sliceDate[0]}년 {sliceDate[1]}월 {sliceDate[2]}일
      </Day>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  display: flex;
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Empty = styled.div`
  width: 10px;
`;

const FontDiv = styled.div`
  font-size: 10px;
`;

const Day = styled.span`
  padding-top: 30px;
  color: #71747b;
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title2 = styled.span`
  color: #4e5bb5;
`;
