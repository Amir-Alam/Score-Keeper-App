//Score.jsx

import React, { useState } from "react";
import Badminton from "./assets/badminton.png";
import Basketball from "./assets/basketball.png";
import Football from "./assets/football-icon.png";
import Hockey from "./assets/hockey.png";
import Volleyball from "./assets/volleyball.png";
import TableTennis from "./assets/table-tennis.png";
import VS from "./assets/vs.png";
import Modal from "./Modal";

function Score() {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [selectedTimer, setSelectedTimer] = useState("");
  const [selectedSport, setSelectedSport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartMatch = () => {
    if (!team1 || !team2 || !selectedTimer || !selectedSport) {
      alert("Please enter the required details");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const SportsCard = ({
    imageSrc,
    altText,
    sportsName,
    isSelected,
    onClick,
  }) => {
    return (
      <div
        className={`sports-image ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        <img className="sports" src={imageSrc} alt={altText}></img>
        <p>{sportsName}</p>
      </div>
    );
  };

  return (
    <>
      <div className="form-section">
        <h2 className="team-name">Score Keeper</h2>

        <div className="team-inputs">
          <div>
            <p>Enter Team 1 Name :</p>
            <input
              type="text"
              placeholder="Team 1"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
            ></input>
          </div>
          <img className="vs-image" src={VS} alt="VS Icon"></img>
          <div>
            <p>Enter Team 2 Name :</p>
            <input
              type="text"
              placeholder="Team 2"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      <div className="select-timer">
        <input
          id="1min"
          type="radio"
          name="selecttimer"
          value="1 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="1min">1 Minutes</label>

        <input
          id="10min"
          type="radio"
          name="selecttimer"
          value="10 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="10min">10 Minutes</label>

        <input
          id="30min"
          type="radio"
          name="selecttimer"
          value="30 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="30min">30 Minutes</label>

        <input
          id="45min"
          type="radio"
          name="selecttimer"
          value="45 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="45min">45 Minutes</label>

        <input
          id="60min"
          type="radio"
          name="selecttimer"
          value="60 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="60min">60 Minutes</label>

        <input
          id="90min"
          type="radio"
          name="selecttimer"
          value="90 Minutes"
          onChange={(e) => setSelectedTimer(e.target.value)}
        ></input>
        <label htmlFor="90min">90 Minutes</label>

        <p> Choose the Match Duration</p>
      </div>

      <div className="sports-image-grid">
        <SportsCard
          imageSrc={Badminton}
          altText="Badminton icon"
          sportsName="Badminton"
          isSelected={selectedSport === "Badminton"}
          onClick={() => setSelectedSport("Badminton")}
        />
        <SportsCard
          imageSrc={Basketball}
          altText="Basketball icon"
          sportsName="Basketball"
          isSelected={selectedSport === "Basketball"}
          onClick={() => setSelectedSport("Basketball")}
        />
        <SportsCard
          imageSrc={Football}
          altText="Football icon"
          sportsName="Football"
          isSelected={selectedSport === "Football"}
          onClick={() => setSelectedSport("Football")}
        />
        <SportsCard
          imageSrc={Hockey}
          altText="Hockey icon"
          sportsName="Hockey"
          isSelected={selectedSport === "Hockey"}
          onClick={() => setSelectedSport("Hockey")}
        />
        <SportsCard
          imageSrc={Volleyball}
          altText="Volleyball icon"
          sportsName="Volleyball"
          isSelected={selectedSport === "Volleyball"}
          onClick={() => setSelectedSport("Volleyball")}
        />
        <SportsCard
          imageSrc={TableTennis}
          altText="Table Tennis icon"
          sportsName="Table Tennis"
          isSelected={selectedSport === "Table Tennis"}
          onClick={() => setSelectedSport("Table Tennis")}
        />
      </div>

      <div className="start-button">
        <button className="start-button" onClick={handleStartMatch}>
          Start Match
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        team1={team1}
        team2={team2}
        timer={selectedTimer}
        sport={selectedSport}
      />
    </>
  );
}

export default Score;
