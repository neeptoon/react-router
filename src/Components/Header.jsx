import {Link} from "react-router-dom";

export default function Header() {
	return (
		<nav className="purple accent-4">
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">My simple recipes</Link>
				<ul className="right">
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>

			</div>
		</nav>
	)
}