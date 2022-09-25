import React from "react";
import styled from "styled-components";

function CreateElection() {
  return (
    <FormX>
      <Fields>
        <h1>Create Election</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="file" accept="image/*" name="img" id="file" /> <br />
        <button>Create</button>
      </Fields>
    </FormX>
  );
}

const FormX = styled.div`
  width: 70%;
  height: 100vh;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
`;
const Fields = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  top: 18%;
  input {
    width: 70%;
    height: 14rem;
    margin-top: 5%;
    font-size: 6rem;
    font-weight: 600;
    ::placeholder {
      font-size: 4.7rem;
      position: relative;
      left: 1%;
    }
    border-radius: 3rem;
  }
  input:focus {
    border: 10px solid #07a081;
    box-shadow: 0 0 3px #1670be;
    outline-offset: 0px;
    outline: none;
  }
  #file {
    height: 12rem;
    width: 70%;
    font-size: 4rem;
    border-radius: 0;
    ::placeholder {
      position: relative;
      left: 2%;
    }
  }
  button {
    width: 20%;
    height: 12rem;
    border: none;
    outline: none;
    background-color: #07a081;
    border-radius: 3rem;
    color: white;
    font-size: 5rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.5 ease;
    :hover {
      letter-spacing: 2px;
    }
  }
`;

export default CreateElection;
