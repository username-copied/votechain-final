import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <MinMax>
      <Left>
        <h1>Dashboard</h1>
        <div className="area">
          <Link to="/admin">
            <button>Elections</button>
          </Link>
          <Link to="/create-election">
            <button>Create Election</button>
          </Link>
          <Link to="/applicants">
            <button>Applicants</button>
          </Link>
          <Link to="/votes">
            <button>Voters</button>
          </Link>
        </div>
      </Left>
    </MinMax>
  );
}

const MinMax = styled.div`
  width: 20%;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border: none;
  outline: none;
`;

const Left = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 30%;
  font-size: 4rem;
  button {
    width: 70%;
    height: 12rem;
    margin-top: 5%;
    border-radius: 3rem;
    background-color: #07a081;
    color: white;
    font-size: 4rem;
    transition: all 0.5s ease;
    outline: none;
    border: none;
    cursor: pointer;
    :hover {
      letter-spacing: 2px;
    }
  }
  .area {
    padding-top: 40%;
  }
`;

export default Dashboard;
