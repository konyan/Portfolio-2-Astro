
const Nav = ({menus,activeMenu}) =>{
  return (
		<>
			<nav className="navigation">
				<a href="/">
					<img src="/logo.svg" alt="konyan logo" />
				</a>
				<ul className="navbar__menu">
					{menus.map((menu, index) => (
						<li
							className={`navbar__item ${
								activeMenu === menu.name ? "active" : ""
							}`}
							key={menu.url}
						>
							<a href={`#${menu.url}`} className="navbar__link">
								<p>0{+index + 1}</p>
								<span>{menu.name}</span>
							</a>
						</li>
					))}
				</ul>
			</nav>
			<nav className="mobile_navigation">
				<a href="/">
					<img src="/logo.svg" alt="konyan logo" width="100%" height="100%" />
				</a>
				<ul className="m_navbar__menu">
					{menus.map((menu, index) => (
						<li className={`m_navbar__item`} key={menu.name}>
							<a
								href={`#${menu.url}`}
								className={`m_navbar__link ${
									activeMenu === menu.name ? "m_active" : ""
								}`}
							></a>
						</li>
					))}{" "}
				</ul>
			</nav>
		</>
	);
}
export default Nav;