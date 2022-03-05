import React from "react";
import { AbsoluteFill } from "remotion";
import { useVideoConfig, useCurrentFrame } from "remotion";
import WorldSVG from './svg/world.svg';

export const World: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  const frame = useCurrentFrame();
	const opacity = 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        paddingTop: 0,
        transform: "scale(1.6)",
        opacity: (frame-(1*fps)) / (durationInFrames/3),
      }}>
      <img src={WorldSVG}/>
    </AbsoluteFill>
  )
}