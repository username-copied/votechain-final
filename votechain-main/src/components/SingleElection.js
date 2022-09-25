import React from "react";
import styled from "styled-components";

function SingleElection() {
  const candidates = ["ramesh", "suresdh", "mukesh"];
  return (
    <Box>
      <h1>Election Name</h1>
      <p>Election Description</p>
      <div className="rex">
        {candidates.map((el, idx) => (
          <div className="good">
            <input type="radio" id={el} value={idx} />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}
      </div>
      <button>Vote</button>
    </Box>
  );
}

const Box = styled.div`
  height: 100vh;
  text-align: center;
  font-size: 3rem;
  button {
    /* font-size: 2rem; */
    width: 100px;
    cursor: pointer;
    height: 40px;
    background-color: green;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: all 0.5s ease;
    color: white;
    font-weight: 400;
    :hover {
      letter-spacing: 2px;
    }
  }
  .rex {
    padding-top: 5%;
  }
  .good {
    line-height: 2;
  }
`;

export default SingleElection;
