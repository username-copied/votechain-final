import React from "react";
import styled from "styled-components";

function Voter() {
  return (
    <FormY>
      <h1>Voters</h1>
      <List>
        {/* for (let index = 0; index < length; index++) {
         <Card>
         <h1>Rakesh</h1>
         <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
       </Card>
      } */}

        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
        <Card>
          <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
        </Card>
      </List>
    </FormY>
  );
}

const FormY = styled.div`
  height: 100vh;
  width: 80%;
  text-align: center;
  font-size: 6rem;
  padding-top: 3%;
  overflow-y: auto;
`;
const Card = styled.div`
  background-color: #dddada;
  display: flex;
  justify-content: space-between;
  padding: 1% 4%;
  font-size: 4rem;
  margin: 4rem 6rem;
`;
const List = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: 150rem 150rem;
  grid-gap: 1rem;
  grid-auto-flow: row;
`;

export default Voter;
