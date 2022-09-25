import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Main>
      <Content>
        <h1>
          Let's build a fairer <br />
          tommorrow , together
        </h1>
        <p>Vote for the best. Forget the rest</p>
        <Buttons>
          <Link to="/admin">
            <button>Vote</button>
          </Link>
          <Link to="/admin">
            <button>Admin</button>
          </Link>
          <Link to="/admin">
            <button>Apply for Candidates</button>
          </Link>
        </Buttons>
      </Content>
    </Main>
  );
}

const Main = styled.div`
  /* background-color: green; */
  text-align: center;
  h1 {
    font-size: 15rem;
  }
  p {
    font-size: 4.5rem;
    padding-top: 2%;
  }
`;
const Content = styled.div`
  margin-top: 8%;
`;
const Buttons = styled.div`
  /* background-color: blue; */
  height: 10vh;
  padding: 5% 0;
  button {
    z-index: 3000;
    height: 12rem;
    width: 30rem;
    font-size: 4rem;
    font-weight: 600;
    cursor: pointer;
    color: white;
    border-radius: 3rem;
    margin: 0 5% 0 5%;
    background-color: #07a081;
    border: none;
    transition: all 0.5s ease;
    outline: none;
    :hover {
      letter-spacing: 2px;
    }
  }
`;

export default Home;
