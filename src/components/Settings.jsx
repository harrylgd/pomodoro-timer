import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useContext} from 'react';
import './Slider.css'
import SettingsContext from './SettingsContext';

function Settings() {

  const settingsInfo = useContext(SettingsContext);
  
  return (
    <div style={{ textAlign: "left" }}>

      <label>work: {settingsInfo.workMinutes}:00</label>
      <Slider 
        className='slider'
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        max={120}
        min={1}
      />

      <label>break: {settingsInfo.breakMinutes}:00</label>
      <Slider 
        className='slider'
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        max={120}
        min={1}
      />

    </div>
  );
}

export default Settings;
