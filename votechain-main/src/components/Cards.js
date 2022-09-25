import React from "react";
import BGImg from "../images/boxie.jpeg";
import styled from "styled-components";
import Card from "../components/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

// const Boxie = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(0, 1fr));
//   width: 100%;
//   button {
//     padding: 1rem;
//     margin: 1rem;
//     background-color: #d1d5db;
//     border-radius: 0.375rem;
//   }
//   img {
//     object-fit: cover;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   .card {
//     padding: 1rem;
//     margin-top: 1rem;
//     background-color: #f3f4f6;
//     border-radius: 0.375rem;
//     /* drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03))
//       drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08)); */
//     width: 100%;
//   }
//   .content {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
//   p {
//     margin-bottom: 1rem;
//     margin-left: 1rem;
//   }
// `;

// // const Boxie = styled.div`;
//   width: 100%;
// `;

export default Cards;
