import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import CreateElection from "../components/CreateElection";

function Phase2() {
  return (
    <Box>
      <Dashboard />
      <CreateElection />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default Phase2;
