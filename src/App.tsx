import React, {useState} from 'react';
import "./app.scss";
function App() {
  const [hours1, setHours1] = useState(0);
  const [hours2, setHours2] = useState(0);
  const [minutes1, setMinutes1] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [seconds1, setSeconds1] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const marginArr02 = [240,180,120];
  const marginArr09 = [240,180,120,60,0,-60,-120,-180,-240,-300];
  const marginArr05 = [240,180,120,60,0,-60,-120];
  function setClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setHours1(Math.floor(hours / 10));
    setHours2(hours % 10);
    setMinutes1(Math.floor(minutes / 10));
    setMinutes2(minutes % 10);
    setSeconds1(Math.floor(seconds / 10));
    setSeconds2(seconds % 10);
  }
  setInterval(() => {setClock()}, 1000);
  return (
    <div className="app">
      <div className="header">
        Clock
      </div>
        <div className="container">
          <div className="clocks">
            <div className="block-container" style={{height:180,marginTop:marginArr02[hours1]}}>
              {[0,1,2].map(i => (<div className={i === hours1 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>
            <div className="block-container"  style={{marginTop:marginArr09[hours2], marginRight:50}}>
              {[0,1,2,3,4,5,6,7,8,9].map(i => (<div className={i === hours2 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>
            <div className="block-container" style={{height:360,marginTop:marginArr05[minutes1]}}>
              {[0,1,2,3,4,5].map(i => (<div className={i === minutes1 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>
            <div className="block-container"  style={{marginTop:marginArr09[minutes2], marginRight:50}}>
              {[0,1,2,3,4,5,6,7,8,9].map(i => (<div className={i === minutes2 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>
            <div className="block-container" style={{height:360,marginTop:marginArr05[seconds1]}}>
              {[0,1,2,3,4,5].map(i => (<div className={i === seconds1 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>
            <div className="block-container"  style={{marginTop:marginArr09[seconds2]}}>
              {[0,1,2,3,4,5,6,7,8,9].map(i => (<div className={i === seconds2 ? "block active" : "block"} key={i}>{i}</div>))}
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
