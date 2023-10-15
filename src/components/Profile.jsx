const Profile = ({ forwardedRef }) => {
	return (
		<section id="home" ref={forwardedRef}>
			<div class="hero__container">
				<span class="profile_greeting typewriter"></span>
				<h1 class="profile_name">I'm NYAN LIN TUN</h1>
				<p class="profile_position">
					Front-end Developer / Open Sourceror / Blogger
				</p>
				<p class="profile_summary">
					A developer fueled by creativity and passion. I thrive on turning
					ideas into user-friendly applications, creating seamless digital
					experiences through clean and efficient code.
				</p>
			</div>
		</section>
	);
};

export default Profile;