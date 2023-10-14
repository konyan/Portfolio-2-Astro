import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect, useRef } from "react";
import { socials, projects, resume, menus } from "./utils/data";
import Nav from "./components/Nav";
import dayjs from "dayjs";

function App() {
	return (
		<>
			<Nav />

			<div class="main__container">
				<ul class="social">
					{socials.map((s) => (
						<li>
							<a href={s.url} target="_blank" rel="noreferrer">
								<img src={s.image} alt={s.name} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
