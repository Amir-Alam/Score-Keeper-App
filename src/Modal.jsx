// import React, { useState, useEffect } from "react";
// import { ImCross } from "react-icons/im";
// import "./modal.css";
// import "./countDownTimer.css"; // Assuming this contains your countdown timer CSS

// function Modal({ isOpen, onClose, team1, team2, timer }) {
//   if (!isOpen) {
//     return null;
//   }

//   const [scoreTeam1, setScoreTeam1] = useState(0);
//   const [scoreTeam2, setScoreTeam2] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(convertToSeconds(timer));
//   const [animationTeam1, setAnimationTeam1] = useState(false);
//   const [animationTeam2, setAnimationTeam2] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isRunning && remainingTime > 0) {
//       interval = setInterval(() => {
//         setRemainingTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (remainingTime <= 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, remainingTime]);

//   useEffect(() => {
//     if (animationTeam1) {
//       const timer = setTimeout(() => {
//         setAnimationTeam1(false);
//       }, 300); // Duration of the animation
//       return () => clearTimeout(timer);
//     }
//   }, [animationTeam1]);

//   useEffect(() => {
//     if (animationTeam2) {
//       const timer = setTimeout(() => {
//         setAnimationTeam2(false);
//       }, 300); // Duration of the animation
//       return () => clearTimeout(timer);
//     }
//   }, [animationTeam2]);

//   const incrementTeam1 = () => {
//     if (isRunning) {
//       setScoreTeam1(scoreTeam1 + 1);
//       setAnimationTeam1(true);
//     }
//   };

//   const incrementTeam2 = () => {
//     if (isRunning) {
//       setScoreTeam2(scoreTeam2 + 1);
//       setAnimationTeam2(true);
//     }
//   };

//   const resetMatch = () => {
//     setScoreTeam1(0);
//     setScoreTeam2(0);
//     setRemainingTime(convertToSeconds(timer));
//     setIsRunning(false);
//   };

//   const toggleTimer = () => {
//     setIsRunning(!isRunning);
//   };

//   const { minutes, seconds } = convertToMinutesAndSeconds(remainingTime);

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <ImCross className="close-icon" onClick={onClose} />
//         <div className="team-scores">
//           <div className="team">
//             <p className="team-name">{team1}</p>
//             <p className={`score ${animationTeam1 ? "animate" : ""}`}>
//               {scoreTeam1}
//             </p>
//             <button
//               className="goal-button"
//               onClick={incrementTeam1}
//               disabled={!isRunning}
//             >
//               Goal
//             </button>
//           </div>
//           <div className="team">
//             <p className="team-name">{team2}</p>
//             <p className={`score ${animationTeam2 ? "animate" : ""}`}>
//               {scoreTeam2}
//             </p>
//             <button
//               className="goal-button"
//               onClick={incrementTeam2}
//               disabled={!isRunning}
//             >
//               Goal
//             </button>
//           </div>
//         </div>

//         {/* Countdown Timer */}
//         <div className="countdown">
//           <TimeSection label="Minutes" value={minutes} />
//           <TimeSection label="Seconds" value={seconds} />
//         </div>

//         <div className="start-pause-button-container">
//           <button id="reset-match" onClick={resetMatch}>
//             Reset Match
//           </button>
//           <button id="start-pause" onClick={toggleTimer}>
//             {isRunning ? "Pause" : "Start"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   function convertToSeconds(time) {
//     const minutes = parseInt(time.split(" ")[0], 10);
//     return minutes * 60;
//   }

//   function convertToMinutesAndSeconds(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return { minutes: pad(minutes), seconds: pad(secs) };
//   }

//   function pad(value) {
//     return value.toString().padStart(2, "0");
//   }
// }

// function TimeSection({ label, value }) {
//   const [prevValue, setPrevValue] = useState(value);

//   useEffect(() => {
//     if (value !== prevValue) {
//       setPrevValue(value);
//       const segments = document.querySelectorAll(
//         `#${label.toLowerCase()} .time-segment`
//       );
//       segments.forEach((segment, index) => {
//         if (value[index] !== prevValue[index]) {
//           const overlay = segment.querySelector(".segment-overlay");
//           overlay.classList.add("flip");
//           setTimeout(() => {
//             overlay.classList.remove("flip");
//           }, 800);
//         }
//       });
//     }
//   }, [value, prevValue, label]);

//   return (
//     <div className="time-section" id={label.toLowerCase()}>
//       <div className="time-group">
//         <SegmentDisplay value={value[0]} />
//         <SegmentDisplay value={value[1]} />
//       </div>
//       <p>{label}</p>
//     </div>
//   );
// }

// function SegmentDisplay({ value }) {
//   return (
//     <div className="time-segment">
//       <div className="segment-display">
//         <div className="segment-display__top">{value}</div>
//         <div className="segment-display__bottom">{value}</div>
//         <div className="segment-overlay">
//           <div className="segment-overlay__top">{value}</div>
//           <div className="segment-overlay__bottom">{value}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import "./Modal.css";
import "./countDownTimer.css"; // Assuming this contains your countdown timer CSS

function Modal({ isOpen, onClose, team1, team2, timer }) {
  if (!isOpen) {
    return null;
  }

  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(convertToSeconds(timer));
  const [animationTeam1, setAnimationTeam1] = useState(false);
  const [animationTeam2, setAnimationTeam2] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime]);

  useEffect(() => {
    if (animationTeam1) {
      const timer = setTimeout(() => {
        setAnimationTeam1(false);
      }, 300); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animationTeam1]);

  useEffect(() => {
    if (animationTeam2) {
      const timer = setTimeout(() => {
        setAnimationTeam2(false);
      }, 300); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animationTeam2]);

  const handleButtonClick = (buttonId) => {
    const button = document.querySelector(`#${buttonId}`);
    button.classList.add("button-click");
    setTimeout(() => button.classList.remove("button-click"), 400);
  };

  const incrementTeam1 = () => {
    if (isRunning) {
      setScoreTeam1(scoreTeam1 + 1);
      setAnimationTeam1(true);
      handleButtonClick("team1-button");
    }
  };

  const incrementTeam2 = () => {
    if (isRunning) {
      setScoreTeam2(scoreTeam2 + 1);
      setAnimationTeam2(true);
      handleButtonClick("team2-button");
    }
  };

  const resetMatch = () => {
    setScoreTeam1(0);
    setScoreTeam2(0);
    setRemainingTime(convertToSeconds(timer));
    setIsRunning(false);
    handleButtonClick("reset-match");
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    handleButtonClick("start-pause");
  };

  const { minutes, seconds } = convertToMinutesAndSeconds(remainingTime);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ImCross className="close-icon" onClick={onClose} />
        <div className="team-scores">
          <div className="team">
            <p className="team-name">{team1}</p>
            <p className={`score ${animationTeam1 ? "animate" : ""}`}>
              {scoreTeam1}
            </p>
            <button
              id="team1-button"
              className="goal-button"
              onClick={incrementTeam1}
              disabled={!isRunning}
            >
              Goal
            </button>
          </div>
          <div className="team">
            <p className="team-name">{team2}</p>
            <p className={`score ${animationTeam2 ? "animate" : ""}`}>
              {scoreTeam2}
            </p>
            <button
              id="team2-button"
              className="goal-button"
              onClick={incrementTeam2}
              disabled={!isRunning}
            >
              Goal
            </button>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown">
          <TimeSection label="Minutes" value={minutes} />
          <TimeSection label="Seconds" value={seconds} />
        </div>

        <div className="start-pause-button-container">
          <button id="reset-match" onClick={resetMatch}>
            Reset Match
          </button>
          <button id="start-pause" onClick={toggleTimer}>
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );

  function convertToSeconds(time) {
    const minutes = parseInt(time.split(" ")[0], 10);
    return minutes * 60;
  }

  function convertToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { minutes: pad(minutes), seconds: pad(secs) };
  }

  function pad(value) {
    return value.toString().padStart(2, "0");
  }
}

function TimeSection({ label, value }) {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
      const segments = document.querySelectorAll(
        `#${label.toLowerCase()} .time-segment`
      );
      segments.forEach((segment, index) => {
        if (value[index] !== prevValue[index]) {
          const overlay = segment.querySelector(".segment-overlay");
          overlay.classList.add("flip");
          setTimeout(() => {
            overlay.classList.remove("flip");
          }, 800);
        }
      });
    }
  }, [value, prevValue, label]);

  return (
    <div className="time-section" id={label.toLowerCase()}>
      <div className="time-group">
        <SegmentDisplay value={value[0]} />
        <SegmentDisplay value={value[1]} />
      </div>
      <p>{label}</p>
    </div>
  );
}

function SegmentDisplay({ value }) {
  return (
    <div className="time-segment">
      <div className="segment-display">
        <div className="segment-display__top">{value}</div>
        <div className="segment-display__bottom">{value}</div>
        <div className="segment-overlay">
          <div className="segment-overlay__top">{value}</div>
          <div className="segment-overlay__bottom">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
