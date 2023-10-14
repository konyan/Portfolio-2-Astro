import {projects} from '../utils/data';

const Project = () =>{
return (
	<section className="scroll_container" id="projects">
		<div className="projects__container">
			<h2>here is my commercial and open source projects:</h2>
			<div className="grid-wrapper">
				{projects.map((project) => {
					return (
						<div className={project.className} key={project.name}>
							<img src={project.img} alt={project.name} />
							{project.isOpen && (
								<strong>
									<img
										src="/code.svg"
										alt="open source project"
										style={{
											width: "16px",
										}}
									/>
								</strong>
							)}
							<h4>{project.name}</h4>
						</div>
					);
				})}
			</div>
		</div>
	</section>
);
}

export default Project;