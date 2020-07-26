import React from "react";
import Particles from "react-particles-js";

import dolphin from "../assets/dh.svg";
import penguin from "../assets/penguin_big.svg";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const PolygonParticle = ({ img, scale }) => {
  return (
    <Fade big>
      <Particles
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        params={{
          fps_limit: 30,
          particles: {
            collisions: {
              enable: false,
            },
            color: {
              value: "#64D7FF",
            },
            number: {
              value: 300,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 15,
              opacity: 0.9,
              color: "#64ffda",
            },
            move: {
              speed: 4,
            },
            size:{
                value: 3
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 0.55,
            },
          },
          polygon: {
            enable: true,
            scale: scale,
            type: "inline",
            move: {
              radius: 10,
            },
            url: img,
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(100, 255, 218, 1)",
              },
            },
          },

          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
        }}
      />
    </Fade>
  );
};

const BasicParticles = () => {
  return (
    <Particles
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      params={{
        particles: {
          number: {
            value: 40,
          },
          size: {
            value: 3,
          },
          color: {
            value: "#64D7FF",
          },
          line_linked: {
            enable: true,
            distance: 15,
            opacity: 1,
            color: "#64ffda",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        fps_limit: 30,
      }}
    />
  );
};

const ParticleComponent = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: `#000000`,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {phone ? <BasicParticles /> : <PolygonParticle img={dolphin} scale={2} />}
    </div>
  );
};

export default ParticleComponent;
