import { useState } from "react";
import React from "react";

function App() {
  const [tagName, setTagName] = useState(["break", "session"]);
  const [breaklength, setBreakLength] = useState(5);
  const [sessionlength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(sessionlength * 60);

  const increseBreak = () => {
    if (breaklength === 60) {
      setBreakLength(60);
    } else {
      setBreakLength(breaklength + 1);
    }
  };

  const decreseBreak = () => {
    if (breaklength === 1) {
      setBreakLength(1);
    } else {
      setBreakLength(breaklength - 1);
    }
  };

  const increaseSession = () => {
    if (sessionlength === 60) {
      setSessionLength(60);
    } else {
      setSessionLength(sessionlength + 1);
    }
  };

  const decreseSessino = () => {
    if (sessionlength === 1) {
      setSessionLength(1);
    } else {
      setSessionLength(sessionlength - 1);
    }
  };

  const timer = () => {
    if (!isRunning && timeLeft === 0) {
      setIsSession(!isSession);
      setTimeLeft(isSession ? breaklength * 60 : sessionlength * 60);
    } else if (isRunning && timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  };

  const  start=()=>{isRunning(true)} 
  const pause=()=>{isRunning(false)}
  

  const reset = () => {
    if (isSession) {
      setTimeLeft(sessionlength * 60);
    } else {
      setTimeLeft(breaklength * 60);
    }
  };

  const timeFormate = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  }

  const currentTagName = isSession ? "session" : "break";

  return (
    <>
      <div className="w-screen h-screen bg-rose-400 flex items-center justify-center">
        <div className="UPPERBOX">
          <div className="TAGNAME">{currentTagName}</div>
          <div className="TIMER">{timeFormate(timeLeft)}</div>
          <div className="BUTTONS">
            <div className="BNAME"></div>
          </div>
        </div>
        <div className="LOWERBOX">
          <div className="BUTTONS"></div>
          <div className="NAME"></div>
        </div>
      </div>
    </>
  );
}

export default App;
