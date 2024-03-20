import ReactSlider from "react-sliders";

function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label>working minutes</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
      <label>break minutes</label>
    </div>
  );
}

export default Settings;
