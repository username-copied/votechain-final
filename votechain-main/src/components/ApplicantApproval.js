import React, { useState } from "react";
import styled from "styled-components";

function ApplicantApproval() {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
  };

  return !clicked ? (
    <Game>
      <button onClick={handleClick}>Approve</button>
      <button onClick={handleClick}>Decline</button>
    </Game>
  ) : (
    <p>Done</p>
  );
}

const Game = styled.div`
  button {
    width: 20rem;
    height: 9rem;
    background-color: #07a081;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 3.5rem;
    color: white;
    font-weight: 400;
    margin: 0 20px;
    transition: all 0.5s ease;
    :hover {
      letter-spacing: 2px;
    }
    border: none;
    outline: none;
  }
`;

export default ApplicantApproval;
