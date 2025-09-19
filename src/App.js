import { useEffect } from 'react';
import './App.css';

import Tilt from "react-parallax-tilt";

const cozyBackground = require("./assets/cozyBackgroundFinal2.png");

const backgroundMove = (queryName) => {
  const bg = document.querySelector(queryName);
  const windowWidth = window.innerWidth * 0.01;
  const windowHeight = window.innerHeight * 0.01;

  bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
  
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
}

const App = () => { 

  useEffect(() => {
    backgroundMove(".home");
  }, []);

  return (
    <div className="main">
      <div className="home">
        <div className="radio_wrapper"/>

        <Tilt tiltEnable={true} className="tilt_wrapper" tiltAngleXInitial={20} tiltAngleYInitial={-20}>
          <div className="tilt_main">
            <h1>Music Player</h1>
          </div>
        </Tilt>

        <img className="cozyBackground" src={cozyBackground} alt="Cozy Background"/>
      </div>

      <div className="scroll"></div>
      <div className="sub">
        <h1>Our Relationship</h1>
      </div>
    </div>
  );
}

export default App;
