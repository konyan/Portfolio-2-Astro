import {
	ContactShadows,
	OrbitControls,
	CameraControls,
  Environment,
} from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
	
	return (
		<>
			<OrbitControls
				enableZoom={false}
        enablePan={false}
        enableRotate={false}
			/>
			<color attach="background" args={["#0D1D31"]} />
			<group position-y={-1}>

				<Avatar />
				<Environment preset="night" />
				<mesh scale={[0.8, 0.5, 0.8]} position-y={0.25} position={[1,0,0]}>
					<boxGeometry />
					<meshStandardMaterial color="#6F1AB6" />
				</mesh>
				<mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
					<planeGeometry />
					<meshStandardMaterial color="#0D1D31" />
				</mesh>
			</group>
		</>
	);
};
