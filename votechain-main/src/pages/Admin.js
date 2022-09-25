import React from "react";
import styled from "styled-components";

import Dashboard from "../components/Dashboard";
import Cards from "../components/Cards";

function Admin() {
  return (
    <MinMax>
      <Dashboard />
      <Cards />
    </MinMax>
  );
}

const MinMax = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

// const Left = styled.div`
//   width: 20%;
//   position: fixed;
//   height: 100vh;
//   background-color: green;
//   text-align: center;
//   padding: 4% 0;
//   font-size: 4rem;
//   button {
//     width: 70%;
//     height: 12rem;
//     margin-top: 5%;
//     border-radius: 3rem;
//     background-color: #07a081;
//     color: white;
//     font-size: 4rem;
//     transition: all 0.5s ease;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     :hover {
//       letter-spacing: 2px;
//     }
//   }
//   .area {
//     padding-top: 40%;
//   }
// `;

// const Right = styled.div`
//   width: 80%;
//   height: 100vh;
//   position: relative;
//   left: 20%;
//   background-color: pink;
// `;

export default Admin;
