import React from 'react';
import Particles from 'react-particles-js'

const ParticleComponent = () => {
    return(
        <Particles
        params={{
            "particles": {
                "number": {
                    "value": 65
                },
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onresize": {
                        "enable": true,
                        "density_auto": true,
                        // "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            }
        }}
        style={{
                width: '100vw',
                height: '100vh',
                background: `#000000`,
                position: 'absolute',
                top: 0,
                left: 0,
         }}
    />
    );
};

export default ParticleComponent;