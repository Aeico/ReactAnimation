import { useVideoConfig, useCurrentFrame } from "remotion";
import { Compass } from "./Compass";
import { World } from "./World";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const frame = useCurrentFrame();

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '10em',
				background: 'white',
				color: 'green',
				opacity: 1,
			}}>
			<World />
			<Compass />
		</div>
	);
};
