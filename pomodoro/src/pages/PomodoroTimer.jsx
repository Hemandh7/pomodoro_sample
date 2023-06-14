import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faCog } from "@fortawesome/free-solid-svg-icons";
import "../styles/PomodoroTimer.css";

const PomodoroTimer = () => {
  const [activeSection, setActiveSection] = useState("work");
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  useEffect(() => {
    let countdown;

    if (isRunning) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      setIsRunning(false);
      setIsBreak(true);

      if (activeSection === "work") {
        setActiveSection("shortbreak");
        setTimer(shortBreakTime * 60);
      } else if (activeSection === "shortbreak") {
        setActiveSection("longbreak");
        setTimer(longBreakTime * 60);
      } else {
        setActiveSection("work");
        setTimer(workTime * 60);
      }
    }

    return () => clearInterval(countdown);
  }, [
    isRunning,
    timer,
    activeSection,
    workTime,
    shortBreakTime,
    longBreakTime
  ]);

  const handleTagToggle = (section) => {
    if (!isRunning) {
      setActiveSection(section);
      setIsBreak(false);

      if (section === "work") {
        setTimer(workTime * 60);
      } else if (section === "shortbreak") {
        setTimer(shortBreakTime * 60);
      } else {
        setTimer(longBreakTime * 60);
      }
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const handleWorkTimeChange = (e) => {
    const newWorkTime = parseInt(e.target.value);
    setWorkTime(newWorkTime);

    if (activeSection === "work") {
      setTimer(newWorkTime * 60);
    }
  };

  const handleShortBreakTimeChange = (e) => {
    const newShortBreakTime = parseInt(e.target.value);
    setShortBreakTime(newShortBreakTime);

    if (activeSection === "shortbreak") {
      setTimer(newShortBreakTime * 60);
    }
  };

  const handleLongBreakTimeChange = (e) => {
    const newLongBreakTime = parseInt(e.target.value);
    setLongBreakTime(newLongBreakTime);

    if (activeSection === "longbreak") {
      setTimer(newLongBreakTime * 60);
    }
  };

  return (
    <div
      className={`pomodoro-container ${
        isBreak ? `break-${activeSection}` : `work-${activeSection}`
      }`}
    >
      <div className="tags">
        <div
          className={`tag ${activeSection === "work" ? "active" : ""}`}
          onClick={() => handleTagToggle("work")}
        >
          Work
        </div>
        <div
          className={`tag ${activeSection === "shortbreak" ? "active" : ""}`}
          onClick={() => handleTagToggle("shortbreak")}
        >
          Short Break
        </div>
        <div
          className={`tag ${activeSection === "longbreak" ? "active" : ""}`}
          onClick={() => handleTagToggle("longbreak")}
        >
          Long Break
        </div>
        <div className="settings-tag" onClick={openSettings}>
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
      <div className="timer">
        {`${Math.floor(timer / 60)
          .toString()
          .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`}
      </div>
      <div className="buttons">
        {isRunning ? (
          <button className="stop-button" onClick={stopTimer}>
            <FontAwesomeIcon icon={faStop} />  Stop
          </button>
        ) : (
          <button className="start-button" onClick={startTimer}>
            <FontAwesomeIcon icon={faPlay} />  Start
          </button>
        )}
      </div>
      {showSettings && (
        <div className="settings-container">
          <div className="settings-content">
            <h2>Timer Settings</h2>
            <label>Work Time (minutes)</label>
            <input
              type="number"
              value={workTime}
              onChange={handleWorkTimeChange}
            />
            <label>Short Break Time (minutes)</label>
            <input
              type="number"
              value={shortBreakTime}
              onChange={handleShortBreakTimeChange}
            />
            <label>Long Break Time (minutes)</label>
            <input
              type="number"
              value={longBreakTime}
              onChange={handleLongBreakTimeChange}
            />
            <button className="close-button" onClick={closeSettings}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
