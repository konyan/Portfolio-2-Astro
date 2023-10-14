import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

const Charactor =() => {
	return (
		<Canvas
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
			<color attach="background" args={["#ececec"]} />
			<Experience />
		</Canvas>
	);
}

export default Charactor;
