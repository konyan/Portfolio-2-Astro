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
				enableZoom={false} // Disable zooming
				enableRotate={true} // You can also enable or disable rotation
				enablePan={true} // You can enable or disable panning as well
			/>
			<color attach="background" args={["#0D1D31"]} />
			<group position-y={-1}>

				<Avatar />
				<Environment preset="warehouse" />
				<mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
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
