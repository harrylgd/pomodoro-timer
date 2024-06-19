import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingButton from "./SettingButton";
import { useContext, useState, useEffect } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(false)

  useEffect 
  

  
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
