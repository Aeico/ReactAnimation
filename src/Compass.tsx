import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import { useVideoConfig, useCurrentFrame } from "remotion";
import CompassSVG from './svg/compass.svg';

export const Compass: React.FC = () => {

  const { fps, durationInFrames, width, height } = useVideoConfig();

	const frame = useCurrentFrame();

  var transformVal = interpolate((frame+1)/durationInFrames, [0,1], [0.5,0.01])

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        paddingTop: 0,
        transform: "scale("+transformVal+")",
      }}>
      <img src={CompassSVG}/>
    </AbsoluteFill>
  )
}