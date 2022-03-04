import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={60*4}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
