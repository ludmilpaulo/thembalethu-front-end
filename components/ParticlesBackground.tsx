import React from "react";
import Particles from "react-tsparticles";

type ParticleConfig = {
    particles: {
      number: {
        value: number;
      };
      size: {
        value: number;
      };
      shape: {
        type: string;
      };
      opacity: {
        value: number;
      };
      move: {
        enable: boolean;
        speed: number;
      };
    };
  };
  
  
  const ParticlesBackground: React.FC = () => {
    const particlesConfig: ParticleConfig = {
      particles: {
        number: {
          value: 80,
        },
        size: {
          value: 3,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        move: {
          enable: true,
          speed: 1,
        },
      },
    };
  
    return (
      <Particles
        options={particlesConfig}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    );
  };
  
  export default ParticlesBackground;
  
