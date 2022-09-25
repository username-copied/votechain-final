import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Apply from "../components/Apply";

function Applicants() {
  return (
    <Box>
      <Dashboard />
      <Apply />
    </Box>
  );
}

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: auto;
`;

export default Applicants;
