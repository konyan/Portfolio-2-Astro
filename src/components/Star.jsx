import { useState, useRef } from "react";
import {  useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


function Star(props) {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 3.5 })
	);
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 20;
		ref.current.rotation.y -= delta / 25;
	});
	return (
		<group rotation={[0, 0, Math.PI / 2]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					transparent
					color="#ffa0e0"
					size={0.01}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}

export default Star;