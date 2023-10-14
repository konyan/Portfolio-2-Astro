import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect, useRef } from "react";
import { socials, projects, resume, menus } from "./utils/data";
import Nav from "./components/Nav";
import dayjs from "dayjs";
import Charactor from "./components/Charactor";
import Profile from "./components/Profile";
import Project from "./components/Project";

function App() {
	return (
		<>
			<Nav />
			<Charactor />

			<div class="main__container">
				<ul class="social">
					{socials.map((s) => (
						<li key={s.url}>
							<a href={s.url} target="_blank" rel="noreferrer">
								<img src={s.image} alt={s.name} />
							</a>
						</li>
					))}
				</ul>
				<Profile />
				<Project />
			</div>
		</>
	);
}

export default App;
