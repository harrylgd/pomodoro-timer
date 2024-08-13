import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingButton from "./SettingButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";



function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondLeft, setSecondLeft] = useState(0);

  const secondLeftRef = useRef(secondLeft);
  const modeRef = useRef(mode);
  const isPausedRef = useRef(isPaused);

  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =  (nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondLeft(nextSeconds);
    secondLeftRef.current = nextSeconds
  }

  function tick() {
    secondLeftRef.current--;
    setSecondLeft(secondLeftRef.current);
  }

  function initTimer() {
    secondLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondLeft(secondLeftRef.current) 
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return; 
    }
      if (secondLeftRef.current === 0) {
        return switchMode();
      } 

      tick();
  }, 1000);

  return () => clearInterval(interval);
  }, [settingsInfo]);
  

  const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  
  const percentage = Math.round(secondLeft / totalSeconds * 100);
  
  const minute = Math.floor(secondLeft / 60);
  let seconds = secondLeft % 60
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
      <div>
        <CircularProgressbar
          value={percentage}
          text={minute + ':' + seconds}
          styles={buildStyles({
            textColor: "#FFF",
            pathColor: mode === 'work' ? "red" : "green",
            trailColor: "#808080",
          })}
        />
      </div>
      <div style={{ marginTop: "25px" }}>
        {isPaused 
        ? <PlayButton onClick = {() => {setIsPaused(false); isPausedRef.current = false; }}/> 
        : <PauseButton onClick = {() => {setIsPaused(true); isPausedRef.current = true;}}/>}
      </div>
      <div style={{ marginTop: "10px" }}>
        <SettingButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
