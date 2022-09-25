import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <NavBar>
      <Logo>
        <h1>
          Vote<span>B</span>lock
        </h1>
      </Logo>
      <Wallet>
        <FontAwesomeIcon icon={faWallet} size="2x" color="#07a081" id="ixon2" />
      </Wallet>
    </NavBar>
  );
}
const NavBar = styled.div`
  background: transparent;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  font-size: 5rem;
  padding: 2% 10%;
  span {
    color: #07a081;
  }
`;
const Logo = styled.div`
  display: flex;
  h1 {
    cursor: pointer;
  }
`;
const Wallet = styled.div`
  display: flex;
  cursor: pointer;
`;

export default Nav;
