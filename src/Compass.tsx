import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import { useVideoConfig, useCurrentFrame } from "remotion";
import CompassSVG from './svg/compass.svg';

export const Compass: React.FC = () => {

  const { fps, durationInFrames, width, height } = useVideoConfig();

	const frame = useCurrentFrame();

  var transformVal = interpolate((frame+1)/durationInFrames, [0,1], [0.5,0.01])

  var leftEnd = 870;
  var topEnd = -450;

  var leftInter = 0;
  var topInter = 0;

  if(frame>fps) {
    leftInter = 1;
    topInter = 1;
  }

  var leftTransformVal = interpolate(leftInter, [0,1], [0,leftEnd]);
  var topTransformVal = interpolate(topInter, [0,1], [0,topEnd]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        paddingTop: 0,
        left: leftTransformVal,
        top: topTransformVal,
        transform: "scale("+transformVal+")",
      }}>
      <img src={CompassSVG}/>
    </AbsoluteFill>
  )
}