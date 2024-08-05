import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingButton from "./SettingButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState('work');
  const [secondLeft, setSecondLeft] = useState(0);

  function switchMode() {
    const nextMode = mode === 'work' ? 'break' : 'work';
    setMode(nextMode);
    setSecondsLeft(nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);
  }

  function tick() {
    secondLeft(secondLeft - 1);
  }

  function initTimer() {
    setSecondLeft(settingsInfo.workMinutes * 60);
  }

  useEffect(() => {
    initTimer();

    setInterval(() => {
      if (isPaused) {
        return; 
    }
      if (secondsLeft === 0) {
        return switchMode();
      } 

      tick();
  }, 1000);
  }, [settingsInfo]);
  

  
  return (
    <div>
      <div>
        <CircularProgressbar
          value={50}
          text={`50%`}
          styles={buildStyles({
            textColor: "#FFF",
            pathColor: "#FF0000",
            trailColor: "#808080",
          })}
        />
      </div>
      <div style={{ marginTop: "25px" }}>
        {isPaused? <PlayButton /> : <PauseButton />}
      </div>
      <div style={{ marginTop: "10px" }}>
        <SettingButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
