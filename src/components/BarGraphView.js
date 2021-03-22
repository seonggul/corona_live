import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BarGraphView = ({ week, setWeek, twoWeek, oneWeek }) => {
  const [maxNum, setMaxNum] = useState([]);
  let max;

  const setMax = async () => {
    max = await twoWeek[0].incDec;
    for (let i = 1; i < twoWeek.length; i++) {
      if (max < twoWeek[i].incDec) {
        max = twoWeek[i].incDec;
      }
    }

    max = (await Math.ceil(max / 100)) * 100;

    if (max > 1000) {
      while (max % 400 !== 0) {
        max += 100;
      }
    } else if (max > 100) {
      while (max % 400 !== 0) {
        max += 10;
      }
    } else if (max > 10) {
      while (max % 400 !== 0) {
        max += 1;
      }
    }
    let maxAry = await [
      max,
      Math.ceil(max / 1.4 / 100) * 100,
      Math.ceil(max / 2 / 100) * 100,
      Math.ceil(max / 4 / 100) * 100,
      0,
    ];
    await setMaxNum(maxAry);
  };

  useEffect(() => {
    setMax();
  }, []);

  const backLine = maxNum.map((num, index) => (
    <BackLineli key={index}>
      <BackLineItem></BackLineItem>
      <Number>
        <span>{num}</span>
      </Number>
    </BackLineli>
  ));

  const oneWeekList = oneWeek.map((one) => (
    <BarGraphli key={one.key}>
      <span>{one.incDec}</span>
      <BarGraphitem
        style={{ height: (one.incDec * 181) / maxNum[0] }}
      ></BarGraphitem>
      <span>{one.day}</span>
    </BarGraphli>
  ));

  const twoWeekList = twoWeek.map((two, index) => {
    if (index % 2 === 0) {
      return (
        <BarGraphli2 key={two.key}>
          <span>{two.incDec}</span>
          <BarGraphitem
            style={{ height: (two.incDec * 181) / maxNum[0] }}
          ></BarGraphitem>
          <span>{two.day}</span>
        </BarGraphli2>
      );
    } else {
      return (
        <BarGraphli2 key={two.key}>
          <span>{two.incDec}</span>
          <BarGraphitem
            style={{ height: (two.incDec * 181) / maxNum[0] }}
          ></BarGraphitem>
          <SpaceDiv></SpaceDiv>
        </BarGraphli2>
      );
    }
  });

  return (
    <Container>
      <SubInfo>
        <Content>일별</Content>
        <div>
          <WeekContent1
            onClick={() => {
              setWeek(false);
            }}
            week={week}
          >
            1주
          </WeekContent1>
          <WeekContent2
            onClick={() => {
              setWeek(true);
            }}
            week={week}
          >
            2주
          </WeekContent2>
        </div>
      </SubInfo>
      <LineContainer style={{ height: max }}>
        {week ? (
          <BarGraphContainer>
            <BarGraphul>{twoWeekList}</BarGraphul>
          </BarGraphContainer>
        ) : (
          <BarGraphContainer>
            <BarGraphul>{oneWeekList}</BarGraphul>
          </BarGraphContainer>
        )}
        <BackLineContainer>
          <LineDiv>
            <BackLineUl>{backLine}</BackLineUl>
          </LineDiv>
        </BackLineContainer>
      </LineContainer>
    </Container>
  );
};

export default BarGraphView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  height: 240px;
  @media only screen and (max-width: 430px) {
    margin-left: 2.5%;
    margin-right: 2.5%;
    width: 95%;
  }
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5672ea;
`;

const Content = styled.span`
  padding: 6px 12px;
  font-weight: bold;
  font-size: 0.75em;
  border-radius: 2.5px;
  background-color: #191f2c;
  border: 1px solid #5672ea;
  cursor: pointer;
  :hover {
    background-color: #2a2332;
  }
`;

const WeekContent1 = styled(Content)`
  color: ${(props) => (props.week ? "#57606f" : "#5672ea")};
  border: ${(props) =>
    props.week ? "1px solid #57606f" : "1px solid #5672ea"};
  background-color: ${(props) => (props.week ? "#191F2C" : "#1e253b")};
`;

const WeekContent2 = styled(Content)`
  color: ${(props) => (props.week ? "#5672ea" : "#57606f")};
  border: ${(props) =>
    props.week ? "1px solid #5672ea" : "1px solid #57606f"};
  background-color: ${(props) => (props.week ? "#1e253b" : "#191F2C")};
`;

const LineContainer = styled.div`
  display: relative;
  width: 100%;
  height: 210px;
`;

const BarGraphContainer = styled.div`
  width: 387px;
  height: 194px;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 430px) {
    width: 88%;
  }
`;

const BarGraphul = styled.ul`
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  border-right: 1px solid;
  border-color: #4b4b4b;
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: rgb(184, 186, 190);
`;

const BarGraphli = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 10px;
  width: 14%;
  height: 100%;
`;

const BarGraphli2 = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 10px;
  width: 7%;
  height: 100%;
`;

const BarGraphitem = styled.div`
  background-color: rgb(78, 91, 181);
  width: 6px;
`;

const SpaceDiv = styled.div`
  width: 1px;
  height: 13px;
`;

const BackLineContainer = styled.div`
  margin-top: 9px;
  width: 100%;
  height: 194px;
  display: flex;
  justify-content: center;
  align-content: space-between;
`;

const BackLineUl = styled.ul`
  margin: 0px;
  width: 100%;
  height: 100%;
  padding: 0px;
  list-style: none;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

const BackLineli = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: rgb(184, 186, 190);
`;

const BackLineItem = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4b4b4b;
`;

const Number = styled.div`
  display: flex;
  width: 25px;
`;

const LineDiv = styled.div`
  width: 100%;
`;
