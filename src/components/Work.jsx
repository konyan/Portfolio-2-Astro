import {resume} from '../utils/data';
import dayjs from 'dayjs';

const Work = ({ forwardedRef }) => {
	return (
		<section class="experience_container" id="experience" ref={forwardedRef}>
			<h2>
				Work
				<hr />
				Experiences
			</h2>
			<div class="experience_card_container">
				{resume.work.map((exp) => {
					return (
						<div class="experience_card">
							<div class="experience_card_date">
								<p>{dayjs(exp.startDate).format("YYYY")}</p>
								<p>{dayjs(exp.startDate).format("MMM")}</p>
							</div>
							<div>
								<div class="experience_card_skills">
									{exp.techs.map((tech) => (
										<strong># {tech.replace(",", "")}</strong>
									))}
								</div>
								<h3 class="experience_card_position">{exp.position}</h3>
								<div class="experience_card_company">
									<p>{exp.name}</p>
									<p>
										<img
											src="/location.svg"
											alt="company location"
											style={{
												width: "12px",
												height: "12px",
												marginRight: "4px",
												display: "inline-block",
											}}
										/>
										{exp.location}
									</p>
								</div>
								{exp.highlights.map((hightlight) => (
									<p class="experience_card_description">
										<small></small>
										{hightlight}
									</p>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Work;