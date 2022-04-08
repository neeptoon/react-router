import {Link} from "react-router-dom";

export default function Header() {
	return (
		<nav className="purple accent-4">
			<div className="nav-wrapper">
				<span className="brand-logo">My Simple Shop</span>
				<ul className="right">
					<li>
						<Link to="/about" exact>About</Link>
					</li>
					<li>
						<Link to="/contact" exact>Contact</Link>
					</li>
				</ul>

			</div>
		</nav>
	)
}