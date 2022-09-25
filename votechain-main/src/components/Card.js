import React from "react";
import BGImg from "../images/boxie.jpeg";
import "./Card.css";
import { Link } from "react-router-dom";
const ElectionCard = () => {
  return (
    <>
      <div className="elec-card">
        <img src={BGImg} alt="Election Img BG" />
        <div className="content-grid">
          <h2>Test Election</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="button-cont">
          <Link to="/admin/voteElection">
            <button>Vote</button>
          </Link>

          <button>Apply as Candidate</button>
        </div>
      </div>
    </>
  );
};

export default ElectionCard;
