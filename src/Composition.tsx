import { useVideoConfig, useCurrentFrame } from "remotion";
import { Compass } from "./Compass";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '10em',
				background: 'white',
				color: 'green',
				opacity: opacity,
			}}>
			{durationInFrames / fps}
			<Compass />
		</div>
	);
};
