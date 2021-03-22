import React from "react";
import styled from "styled-components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AreaListView = ({ todayAreaCnt }) => {
  const ListView = todayAreaCnt.map((today, index) => {
    if (index % 2 === 0) {
      return (
        <Listli key={today.key}>
          <ListItem style={{ width: "50%", color: "#dfe4ea" }}>
            <span style={{ paddingLeft: "25px" }}>{today.gubun}</span>
          </ListItem>

          <ListItem2 style={{ width: "25%", color: "#B8B7B9" }}>
            <span>
              {today.defCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
            </span>
          </ListItem2>

          <ListItem2 style={{ width: "25%", color: "#de5071" }}>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>
              {today.incDec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
            </span>
          </ListItem2>
        </Listli>
      );
    } else {
      return (
        <Listli2 key={today.key}>
          <ListItem style={{ width: "50%", color: "#dfe4ea" }}>
            <span style={{ paddingLeft: "25px" }}>{today.gubun}</span>
          </ListItem>

          <ListItem2 style={{ width: "25%", color: "#B8B7B9" }}>
            <span>
              {today.defCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
            </span>
          </ListItem2>

          <ListItem2 style={{ width: "25%", color: "#de5071" }}>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>
              {today.incDec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
            </span>
          </ListItem2>
        </Listli2>
      );
    }
  });

  return (
    <Container>
      <ListTop>
        <ListItem style={{ width: "50%" }}>
          <span style={{ paddingLeft: "25px" }}>지역</span>
        </ListItem>

        <ListItem2 style={{ width: "25%" }}>
          <span>총 확진자수</span>
        </ListItem2>

        <ListItem2 style={{ width: "25%" }}>
          <span>증가수</span>
        </ListItem2>
      </ListTop>

      <ListItem>
        <ListUl>{ListView}</ListUl>
      </ListItem>
    </Container>
  );
};

export default AreaListView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 15px;
`;

const ListTop = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  color: rgb(130, 130, 132);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  @media only screen and (max-width: 410px) {
    font-size: 0.8em;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
const ListItem2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListUl = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
  font-size: 15px;
  font-weight: 200;
`;

const Listli = styled.li`
  width: 100%;
  height: 48px;
  display: flex;
  border-radius: 10px;
  background-color: #272b38;
`;

const Listli2 = styled.li`
  display: flex;
  width: 100%;
  height: 48px;
`;
