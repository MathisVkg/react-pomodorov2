import React, { useContext, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import CountDownAnimation from './components/CountDownAnimation';
import SetPomodoro from './components/SetPomodoro';
import { SettingsContext } from './context/SettingsContext';

function App() {
  const { 
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingBtn, 
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingsContext);

  useEffect(() => updateExecute(executing), [executing, startAnimate]);

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      { pomodoro === 0 ?  
        <SetPomodoro/> : 
        <>
          <ul className="labes">
            <li>
              <Button title="Work" 
              activeClass={ executing.work === 'work' && 'activeLabel' } 
              _callback={() => setCurrentTimer('work')} 
              />
            </li>
            <li>
              <Button title="Short" 
              activeClass={ executing.work === 'short' && 'activeLabel' } 
              _callback={() => setCurrentTimer('short')} 
              />
            </li>
            <li>
              <Button title="Long" 
              activeClass={ executing.work === 'long' && 'activeLabel' } 
              _callback={() => setCurrentTimer('long')} 
              />
            </li>
          </ul>
          <Button title="Settings" _callback={ SettingBtn } />
          <div className="timeContainer">
              <div className="timeWrapper">
                  <CountDownAnimation
                    key = { pomodoro }
                    timer = { pomodoro }
                    animate =  { startAnimate }
                  >
                    { children }
                  </CountDownAnimation>
              </div>
          </div>
          <div className="buttonWrapper">
            <Button title="Start" className={ startAnimate && 'active' } _callback={ startTimer } />
            <Button title="Pause" className={ startAnimate && 'active' } _callback={ pauseTimer } />
          </div>
        </>
      }
      {/* <CountdownCircleTimer/> */}
    </div>
  );
}

export default App;
