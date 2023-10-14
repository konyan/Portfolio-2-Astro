import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import  Star  from './Star';

const Charactor =() => {
	return (
		<Canvas
    zindex={0}
			shadows
			camera={{ position: [0, 0, 5], fov: 30 }}
			style={{
				width: "100vw",
				height: "100vh",
				position: "absolute",
				top: 0,
				left: 0,
			}}
		>
    <Star/>
    <Experience/>
		</Canvas>
	);
}

export default Charactor;
