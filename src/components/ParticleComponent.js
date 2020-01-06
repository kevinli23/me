import React from "react";
import Particles from "react-particles-js";
import deer from '../res/small-deer.2a0425af.svg';

const ParticleComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true
            }
          },
          size: {
            value: 3
          },
          line_linked: {
            enable: true,
            distance: 30,
            opacity: 0.4
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 2,
              sync: false
            },
            value: 0.4
          }
        },
        polygon: {
          enable: true,
          scale: 0.5,
          type: "inline",
          move: {
            radius: 10
          },
          url: {deer},
          inline: {
            arrangement: "equidistant"
          },
          draw: {
            enable: true,
            stroke: {
              color: "rgba(255, 255, 255, .2)"
            }
          }
        },
      }}
      style={{
        width: "100vw",
        height: "100vh",
        background: `#000000`,
        position: "absolute",
        top: 0,
        left: 0
      }}
    />

    // <Particles
    //   params={{
    //     particles: {
    //       number: {
    //         value: 200,
    //         density: {
    //           enable: false
    //         }
    //       },
    //       size: {
    //         value: 3,
    //         random: true,
    //         anim: {
    //           speed: 5,
    //           size_min: 0.5
    //         }
    //       },
    //       line_linked: {
    //         enable: false
    //       },
    //       move: {
    //         random: true,
    //         speed: 1,
    //         out_mode: "out"
    //       }
    //     },
    //     interactivity: {
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: "bubble"
    //         },
    //         resize: true,
    //         onclick: {
    //           enable: true,
    //           mode: "repulse"
    //         }
    //       },
    //       modes: {
    //         bubble: {
    //           distance: 250,
    //           duration: 2,
    //           size: 0,
    //           opacity: 0
    //         },
    //         repulse: {
    //           distance: 400,
    //           duration: 4
    //         }
    //       }
    //     }
    //   }}
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     background: `#000000`,
    //     position: "absolute",
    //     top: 0,
    //     left: 0
    //   }}
    // />
  );
};

export default ParticleComponent;
