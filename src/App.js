import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect, useRef, useState } from "react";
import { socials, projects, resume, menus } from "./utils/data";
import Nav from "./components/Nav";
import Charactor from "./components/Charactor";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Work from "./components/Work";

function App() {
	const scrollRef = useRef(null);
	const profileRef = useRef(null);
	const projectRef = useRef(null);
	const workRef = useRef(null);

	const [activeMenu, setActiveMenu] = useState("Home");

	useEffect(() => {
		const onScroll = (e) => {
			const { scrollTop } = scrollRef.current;
			const { offsetTop: profileTop, offsetHeight: profileHight } =
				profileRef.current;
			const { offsetTop: projectTop, offsetHeight: projectHight } =
				projectRef.current;
			const { offsetTop: workTop, offsetHeight: workHight } = workRef.current;

			if (scrollTop >= profileTop && scrollTop < profileTop + profileHight) {
				setActiveMenu("Home");
			}
			if (
				scrollTop >= projectTop &&
				scrollTop < projectTop + projectHight - 200
			) {
				setActiveMenu("Project");
			}
			if (scrollTop >= workTop && scrollTop < workTop + workHight - 200) {
				setActiveMenu("Experience");
			}
		};
		if (scrollRef.current) {
			scrollRef.current.addEventListener("scroll", onScroll);
		}

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollRef]);

	console.log(activeMenu);

	return (
		<>
			<Nav menus={menus} activeMenu={activeMenu} />
			<Charactor />

			<div class="main__container" ref={scrollRef}>
				<ul class="social">
					{socials.map((s) => (
						<li key={s.url}>
							<a href={s.url} target="_blank" rel="noreferrer">
								<img src={s.image} alt={s.name} />
							</a>
						</li>
					))}
				</ul>
				<Profile forwardedRef={profileRef} />
				<Project forwardedRef={projectRef} />
				<Work forwardedRef={workRef} />
			</div>
		</>
	);
}

export default App;
