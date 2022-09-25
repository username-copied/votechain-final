import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Voter from "../components/Voter";

function Votes() {
  return (
    <Box>
      <Dashboard />
      <Voter />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: scroll;
`;

export default Votes;
