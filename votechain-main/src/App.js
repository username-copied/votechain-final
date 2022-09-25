import React from "react";
import Land from "./pages/Land";
import GlobalStyle from "./components/GlobalStyles";
import Phase2 from "./pages/Phase2";
import Applicants from "./pages/Applicants";
import Votes from "./pages/Votes";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Cards from "./components/Cards";

// import ElectionCard from "./components/ElectionCard";
// import { Route, Routes } from "react-router-dom";
import SingleElection from "./components/SingleElection";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-election" element={<Phase2 />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/admin/voteElection" element={<SingleElection />} />
      </Routes>
    </div>
  );
}

export default App;
