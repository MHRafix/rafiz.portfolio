import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsUiChecksGrid } from 'react-icons/bs';
import { MdOutlineContactPhone } from 'react-icons/md';
import { PiUserListBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className='header'>
				<nav>
					<div className='navenus'>
						<Link to='/' className='flex_layout'>
							<BiHomeAlt size={30} className='fas fa-home' />
							&nbsp;&nbsp;
							<span className='routeName'>Home</span>
						</Link>
						<Link to='/aboutMe' className='flex_layout'>
							<PiUserListBold className='fas fa-user-secret' size={24} />
							&nbsp;&nbsp;
							<span className='routeName'>About Me</span>
						</Link>
						<Link to='/myPortfolio' className='flex_layout'>
							<BsUiChecksGrid className='fas fa-briefcase' size={24} />
							&nbsp;&nbsp;
							<span className='routeName'>My Projects</span>
						</Link>

						<Link to='/contactMe' className='flex_layout'>
							<MdOutlineContactPhone
								className='fas fa-address-book'
								size={24}
							/>
							&nbsp;&nbsp;
							<span className='routeName'>Contact Me</span>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
