import React from 'react';
import logo from '../assets/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" style={{ width: '90px' }} />
					<button type="button" className="toggle-btn">
						<FaAlignRight />
					</button>
				</div>
				<PageLinks styleClass="nav-links" />
			</div>
		</nav>
	);
};

export default Navbar;
