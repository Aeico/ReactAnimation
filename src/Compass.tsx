import React from "react";
import { AbsoluteFill } from "remotion";
import CompassSVG from './svg/compass.svg';

export const Compass: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        paddingTop: 0,
        transform: "scale(0.5)",
      }}>
      <img src={CompassSVG}/>
    </AbsoluteFill>
  )
}