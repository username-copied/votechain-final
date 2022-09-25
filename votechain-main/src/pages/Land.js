import React from "react";
import styled from "styled-components";
import Home from "../components/Home";
import Nav from "../components/Nav";
import back from "../images/maxmin.jpg";

function Land() {
  return (
    <Base>
      <img src={back} alt="boc" />
      <Nav />
      <Home />
    </Base>
  );
}

const Base = styled.div`
  img {
    width: 100%;
    position: absolute;
    opacity: 0.3;
    z-index: -1;
  }
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
`;

export default Land;
