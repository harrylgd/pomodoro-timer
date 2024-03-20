import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

function Timer() {
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
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
    </div>
  );
}

export default Timer;
