import React from "react";
import { CircularProgress } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const Loading = () => {
  return (
    <div>
      <MyCircularProgress color="secondary" />
    </div>
  );
};

export default Loading;

const MyCircularProgress = styled(CircularProgress)`
  display: flex;
  flex-direction: center;
  align-items: center;
`;
