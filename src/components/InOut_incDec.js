import React, { useState } from "react";
import styled from "styled-components";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InOut = ({ week, oneWeek, twoWeek }) => {
  const [outCnt, setOutCnt] = useState(oneWeek[6].overFlowCnt);
  const [inCnt, setInCnt] = useState(oneWeek[6].localOccCnt);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    twoWeek.find((e) => {
      if (e.key === value) {
        setInCnt(e.localOccCnt);
        setOutCnt(e.overFlowCnt);
      }
    });
  };

  const oneWeekOption = oneWeek.map((one, index) => {
    return (
      <Option key={one.key} value={one.key}>
        {one.day}
      </Option>
    );
  });
  const twoWeekOption = twoWeek.map((two, index) => {
    return (
      <Option key={two.key} value={two.key}>
        {two.day}
      </Option>
    );
  });
  return (
    <Container>
      {week ? (
        <Select defaultValue={twoWeek[13].key} onChange={onChange}>
          {twoWeekOption}
        </Select>
      ) : (
        <Select defaultValue={oneWeek[6].key} onChange={onChange}>
          {oneWeekOption}
        </Select>
      )}
      <div>
        <FontAwesomeIcon
          color="#6a6b6f"
          icon={faDotCircle}
          style={{ marginRight: "2px" }}
        />
        <OutCnt>해외 {outCnt}명</OutCnt>
      </div>
      <div>
        <FontAwesomeIcon
          color="#4e5bb5"
          icon={faDotCircle}
          style={{ marginRight: "2px" }}
        />
        <InCnt>국내 {inCnt}명</InCnt>
      </div>
    </Container>
  );
};

export default InOut;

const Container = styled.div`
  font-size: 15px;
  margin-top: 20px;
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #272b38;
  @media only screen and (max-width: 430px) {
    margin-left: 2.5%;
    margin-right: 2.5%;
    width: 95%;
  }
`;

const Select = styled.select`
  font-size: 0.85em;
  width: 64px;
  border-color: #272b38;
  background-color: #272b38;
  color: rgb(207, 207, 207);
`;

const Option = styled.option`
  background-color: #272b38;
  color: rgb(207, 207, 207);
`;

const OutCnt = styled.span`
  color: #6a6b6f;
`;

const InCnt = styled.span`
  color: #4e5bb5;
`;
