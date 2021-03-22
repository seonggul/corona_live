import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BarGraphView from "./BarGraphView";
import InOut from "./InOut_incDec";
import Loading from "./Loading";

const BarGraph = ({ api }) => {
  const [initial, setInitial] = useState(false);
  const [week, setWeek] = useState(false);
  const [oneWeek, setOneWeek] = useState([]);
  const [twoWeek, setTwoWeek] = useState([]);

  let totalArray = [];

  const mergeData = async () => {
    try {
      await api.dayData.filter((e) => {
        if (e.key.includes("Total") === true) {
          totalArray.push({
            key: e.key,
            incDec: e.incDec,
            day: e.defDt,
            localOccCnt: e.localOccCnt,
            overFlowCnt: e.overFlowCnt,
          });
        }
        return true;
      });
      totalArray = await totalArray.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        if (a.key < b.key) {
          return -1;
        }
        return 0;
      });
      await setOneWeek(totalArray.slice(7, 14));
      await setTwoWeek(totalArray);
      await setInitial(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mergeData();
  }, []);

  return (
    <Container>
      {initial ? (
        <Container2>
          <BarGraphView
            twoWeek={twoWeek}
            oneWeek={oneWeek}
            week={week}
            setWeek={setWeek}
          />
          <InOut api={api} week={week} oneWeek={oneWeek} twoWeek={twoWeek} />
        </Container2>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default BarGraph;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
