import styled from "styled-components";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const AreaCircleView = ({ todayAreaCnt }) => {
  const colors = [
    "#ED4C67",
    "#0652DD",
    "#FFC312",
    "#009432",
    "#12CBC4",
    "#FDA7DF",
    "#F79F1F",
    "#A3CB38",
    "#1289A7",
    "#C4E538",
    "#D980FA",
    "#B53471",
    "#EE5A24",
    "#EA2027",
    "#9980FA",
    "#833471",
    "#006266",
  ];
  const areaName = todayAreaCnt.map((e) => e.gubun);
  const incDecData = todayAreaCnt.map((e) => e.incDec);
  const totalData = todayAreaCnt.map((e) => e.defCnt);

  const data = {
    labels: areaName,
    datasets: [
      {
        data: incDecData,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };
  const data2 = {
    labels: areaName,
    datasets: [
      {
        data: totalData,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };
  const options1 = {
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: true,
    },
  };
  const options2 = {
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false,
    },
  };
  return (
    <Container>
      {/* <LabelDiv>
        <Doughnut data={data3} options={options1} />
      </LabelDiv> */}
      <Doughnut data={data} width={370} height={380} options={options1} />
      <p style={{ color: "rgb(207, 207, 207)" }}>[ 일일 발생 환자 ]</p>
      <Doughnut data={data2} width={370} height={268} options={options2} />
      <p style={{ color: "rgb(207, 207, 207)" }}>[ 총 발생 환자 ]</p>
    </Container>
  );
};

export default AreaCircleView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
