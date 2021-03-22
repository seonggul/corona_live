import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faList, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AreaListView from "./AreaListView";
import AreaCircleView from "./AreaCircleView";

const EachArea = ({ api }) => {
  const [selectView, setSelectView] = useState(true);
  const [todayAreaCnt, setTodayAreaCnt] = useState([]);

  const todayCnt = async () => {
    let today = [];
    await api.dayData.map((v) => {
      if (v.createDt === api.date) {
        return today.push(v);
      }
      return 0;
    });
    today = await today.slice(1, 18).sort((a, b) => {
      return b.incDec - a.incDec;
    });

    await setTodayAreaCnt(today);
  };
  useEffect(() => {
    todayCnt();
  }, []);

  return (
    <Container>
      <ListViewDiv>
        <ListViewBox
          onClick={() => setSelectView(true)}
          selectView={selectView}
        >
          <FontAwesomeIcon icon={faList} />
          <span>지역별 표</span>
        </ListViewBox>
        <CircleViewBox
          onClick={() => setSelectView(false)}
          selectView={selectView}
        >
          <FontAwesomeIcon icon={faChartPie} />
          <span>지역별 분포</span>
        </CircleViewBox>
      </ListViewDiv>
      <ListContainer>
        {selectView ? (
          <AreaListView todayAreaCnt={todayAreaCnt} />
        ) : (
          <AreaCircleView todayAreaCnt={todayAreaCnt} />
        )}
      </ListContainer>
    </Container>
  );
};

export default EachArea;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  font-size: 12px;
  @media only screen and (max-width: 430px) {
    margin-left: 2.5%;
    margin-right: 2.5%;
    width: 95%;
    font-size: 10px;
  }
`;

const ListViewDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  ::before {
    content: "";
    height: 1px;
    background: rgba(130, 130, 132, 0.19);
    width: 100%;
  }
  ::after {
    content: "";
    height: 1px;
    background: rgba(130, 130, 132, 0.19);
    width: 100%;
  }
`;

const ListViewBox = styled.div`
  width: 300px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding: 6px 10px;
  border-bottom-left-radius: 2.5px;
  border-top-left-radius: 2.5px;
  color: ${(props) => (props.selectView ? "#5672ea" : "#57606f")};
  border: ${(props) =>
    props.selectView ? "1px solid #5672ea" : "1px solid #57606f"};
  background-color: ${(props) => (props.selectView ? "#1e253b" : "#191F2C")};
  cursor: pointer;
  :hover {
    background-color: #2a2332;
  }
`;

const CircleViewBox = styled.div`
  width: 355px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  color: ${(props) => (props.selectView ? "#57606f" : "#5672ea")};
  border: ${(props) =>
    props.selectView ? "1px solid #57606f" : "1px solid #5672ea"};
  background-color: ${(props) => (props.selectView ? "#191F2C" : "#1e253b")};
  cursor: pointer;
  padding: 6px 10px;
  border-bottom-right-radius: 2.5px;
  border-top-right-radius: 2.5px;

  cursor: pointer;
  :hover {
    background-color: #2a2332;
  }
`;

const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;
