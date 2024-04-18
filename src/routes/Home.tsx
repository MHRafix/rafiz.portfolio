import { Anchor, Box, Group, Space } from '@mantine/core';
import React from 'react';
import { BiLogoFlutter } from 'react-icons/bi';
import { HiDownload } from 'react-icons/hi';
import { SiGraphql, SiMongodb, SiNestjs, SiNextdotjs } from 'react-icons/si';
import Me from '../Images/me.jpg';
import useAnimation from '../hooks/useAnimation';
import useLinkHandle from '../hooks/useLinkHandle';

const Home = () => {
	// My Resume Link
	const myResumeLink =
		'https://drive.google.com/file/d/1w1Lg6XQ7H8RBr49vt0XaleCgL9lgBdSj/view?usp=sharing';

	// Import use link here
	const { linkHandle } = useLinkHandle();
	// Import AOS animation here
	useAnimation();

	return (
		<Box id='home'>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '25px 0px',
					gap: 50,
					marginBottom: 20,
				}}
			>
				<Anchor href='#home' className='navLink'>
					<div>Home</div>
				</Anchor>
				<Anchor href='#about_us' className='navLink'>
					<div className='navLink'>About</div>
				</Anchor>
				<Anchor href='#projects' className='navLink'>
					<div className='navLink'>Projects</div>
				</Anchor>
				<Anchor href='#contact' className='navLink'>
					<div className='navLink'>Contact</div>
				</Anchor>
			</div>
			<Box
				className='flex_layout'
				style={{
					margin: 'auto',
					width: '90%',
					height: '100vh',
				}}
			>
				<div className='myImage' data-aos='fade-right'>
					<img className='profilePic' src={Me} alt='MyProfileImage' />
				</div>

				<Space w={60} />

				<div className='themeDetails' data-aos='fade-left'>
					<h3 className='specialitis'>Hey,</h3>
					<h1 className='nameHeading'>I'm Mehedi H. Rafiz</h1>
					<h3 className='specialitis'>Web Developer || App Developer</h3>

					<Space h={'sm'} />

					<Group>
						<div style={getStyle('rgb(238 238 238 / 49%)')}>
							<SiNextdotjs size={20} color='white' /> &nbsp; NEXT JS
						</div>
						<div style={getStyle('rgb(255 239 1 / 45%)')}>
							<BiLogoFlutter size={20} color='#00FFFF' /> &nbsp; FLUTTER
						</div>
						<div style={getStyle('rgb(175 34 34 / 67%)')}>
							<SiNestjs size={20} color='crimson' /> &nbsp; NEST JS
						</div>
						<div style={getStyle('rgb(175 34 34 / 67%)')}>
							<SiGraphql size={20} color='crimson' /> &nbsp; GRAPHQL
						</div>
						<div style={getStyle('rgb(6 252 178 / 40%)')}>
							<SiMongodb size={20} color='#12B886' /> &nbsp; MONGO DB
						</div>
					</Group>
					<Space h={'xs'} />

					<Space h={10} />

					<p className='shortDesc'>
						Trying to find a web developer,,,? Look no further, I'm experienced
						in Web Development also expert in Flutter Mobile App Development.
					</p>

					<button
						onClick={() => linkHandle(myResumeLink)}
						className='regularBtn'
					>
						Download Resume <HiDownload size={20} className='icon fa' />
					</button>
				</div>
			</Box>

			<Space h={80} />
		</Box>
	);
};

export default Home;

export const getStyle = (color) => {
	return {
		// border: `1px solid ${color}`,
		borderRadius: '2px',
		display: 'flex',
		alignItems: 'center',
		gap: 2,
		fontSize: 13,
		padding: '2px 5px',
		boxShadow: `0px 0px 0px 1px ${color}`,
	};
};

// #af222269 0px 0px 0px 1px
