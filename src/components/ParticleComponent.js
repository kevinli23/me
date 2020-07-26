import React from 'react';
import Particles from 'react-particles-js'

import img from "../assets/dh.svg"
import Fade from "react-reveal/Fade";
const ParticleComponent = () => {
  return (
    <div 
    style={{
      width: '100vw',
      height: '100vh',
      background: `#000000`,
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      <Fade delay={2000}>
        <Particles
        params={{
          "fps_limit": 30,
          "particles": {
              "collisions": {
                  "enable": false
              },
              "color":{
                value: "#64D7FF"
              },
              "number": {
                  "value": 300,
                  "density": {
                      "enable": false,
                  }
              },
              "line_linked": {
                  "enable": false,
                  "distance": 15,
                  "opacity": 0.9,
                  "color":"#64ffda"
              },
              "move": {
                  "speed": 4
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "opacity_min": 0.05,
                      "speed": 1,
                      "sync": false
                  },
                  "value": 0.55
              }
          },
          "polygon": {
              "enable": true,
              "scale": 2,
              "type": "inline",
              "move": {
                  "radius": 10
              },
              "url": img,
              "inline": {
                  "arrangement": "equidistant"
              },
              "draw": {
                  "enable": true,
                  "stroke": {
                      "color": "rgba(100, 255, 218, 1)"
                  }
              },
          },
          
          "retina_detect": false,
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  }
              },
              "modes": {
                  "bubble": {
                      "size": 6,
                      "distance": 40
                  }
              }
          },
          
      }} />
      </Fade>
    </div>
  );
};

export default ParticleComponent;