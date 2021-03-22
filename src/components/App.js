import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Main from "./Main";
import Axios from "axios";
import Loading from "./Loading";

const App = () => {
  const [date, setDate] = useState();
  const [api, setApi] = useState();
  const [initial, setInitial] = useState(false);

  const getData = async () => {
    let data;
    try {
      data = await Axios.get("https://nodecorona.herokuapp.com/");

      setApi(data.data);
      setDate(data.data.date);
    } catch (error) {
      console.log(error);
    }

    setInitial(true);
  };
  useEffect(() => {
    return getData();
  }, []);

  return (
    <AppContainer>
      {initial ? (
        <Main api={api} date={date} />
      ) : (
        <LoadingDiv>
          <Loading />
        </LoadingDiv>
      )}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  background-color: #191f2c;
  width: 100vw;
  height: 100%;
  justify-content: center;
`;

const LoadingDiv = styled.div`
  display: flex;
  background-color: #191f2c;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
