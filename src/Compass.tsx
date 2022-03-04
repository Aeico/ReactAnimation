import React from "react";
import { AbsoluteFill } from "remotion";
import CompassSVG from './compass.svg';

export const Compass: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 300,
        transform: "scale(1.2)",
      }}>
      <img src={CompassSVG} width={250} height={250}/>
    </AbsoluteFill>
  )
}