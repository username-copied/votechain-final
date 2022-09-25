import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ApplicantApproval from "./ApplicantApproval";

function Apply() {
  const [buttonTextX, setButtonTextX] = useState("Approve");
  const [buttonTextY, setButtonTextY] = useState("Decline");

  // function handleClickX() {
  //   setButtonTextX("Request Sent");
  // }
  // function handleClickY() {
  //   setButtonTextY("Request Sent");
  // }
  return (
    <FormY>
      <h1>Applicants</h1>
      <List>
        <Card>
          <h1>Star Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Flakes</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Chaman</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
        </Card>
        <Card>
          <h1>Moon Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Bruno</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Jack</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
        </Card>
        <Card>
          <h1>Moon Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Bruno</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <ApplicantApproval />
          </Identity>
          <Identity>
            <h2>Jack</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>
            <ApplicantApproval />
          </Identity>
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
  display: block;
  justify-content: space-around;
  padding: 1.3% 4%;
  font-size: 4rem;
  margin: 4rem 6rem;
  text-align: left;
`;
const List = styled.div`
  padding-top: 5%;
  display: block;
  overflow: scroll;
`;

const Identity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2%;
`;

export default Apply;
