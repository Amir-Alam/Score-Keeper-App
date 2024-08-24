// // CountdownTimer.jsx

// import React, { useState, useEffect } from "react";
// import "./CountdownTimer.css"; // Import CountdownTimer CSS

// const CountdownTimer = ({ initialSeconds }) => {
//   const [time, setTime] = useState(initialSeconds);

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setSeconds(targetDate.getSeconds() + time);

//     const updateTime = () => {
//       const nowTime = Date.now();
//       const secondsRemaining = Math.floor((targetDate - nowTime) / 1000);
//       setTime(secondsRemaining >= 0 ? secondsRemaining : 0);
//     };

//     const timer = setInterval(() => {
//       updateTime();
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [time]);

//   const formatTime = (totalSeconds) => {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;
//     return { hours, minutes, seconds };
//   };

//   const { hours, minutes, seconds: formattedSeconds } = formatTime(time);

//   return (
//     <div className="countdown">
//       <div className="time-section" id="hours">
//         <div className="time-group">
//           <div className="time-segment">
//             <div className="segment-display">
//               <div className="segment-display__top">
//                 {Math.floor(hours / 10)}
//               </div>
//               <div className="segment-display__bottom">{hours % 10}</div>
//               <div className="segment-overlay">
//                 <div className="segment-overlay__top">
//                   {Math.floor(hours / 10)}
//                 </div>
//                 <div className="segment-overlay__bottom">{hours % 10}</div>
//               </div>
//             </div>
//           </div>
//           <div className="time-segment">
//             <div className="segment-display">
//               <div className="segment-display__top">
//                 {Math.floor(minutes / 10)}
//               </div>
//               <div className="segment-display__bottom">{minutes % 10}</div>
//               <div className="segment-overlay">
//                 <div className="segment-overlay__top">
//                   {Math.floor(minutes / 10)}
//                 </div>
//                 <div className="segment-overlay__bottom">{minutes % 10}</div>
//               </div>
//             </div>
//           </div>
//           <div className="time-segment">
//             <div className="segment-display">
//               <div className="segment-display__top">
//                 {Math.floor(formattedSeconds / 10)}
//               </div>
//               <div className="segment-display__bottom">
//                 {formattedSeconds % 10}
//               </div>
//               <div className="segment-overlay">
//                 <div className="segment-overlay__top">
//                   {Math.floor(formattedSeconds / 10)}
//                 </div>
//                 <div className="segment-overlay__bottom">
//                   {formattedSeconds % 10}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p>Hours</p>
//         <p>Minutes</p>
//         <p>Seconds</p>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
