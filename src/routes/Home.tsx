import { Box, Group, Space } from '@mantine/core';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { SiMongodb, SiNestjs, SiNextdotjs, SiTsnode } from 'react-icons/si';
import Me from '../Images/me.jpg';
import useAnimation from '../hooks/useAnimation';
import useLinkHandle from '../hooks/useLinkHandle';

const Home = () => {
	// My Resume Link
	const myResumeLink =
		'https://drive.google.com/file/d/1_MctkN8qdhqK55MCXfVvSi2AQ_QzNJYv/view?usp=sharing';

	// Import use link here
	const { linkHandle } = useLinkHandle();
	// Import AOS animation here
	useAnimation();

	return (
		<Box
			className='flex_layout'
			style={{
				margin: 'auto',
				width: '90%',
				height: '100vh',
			}}
		>
			<div className='myImage' data-aos='fade-up'>
				<img className='profilePic' src={Me} alt='MyProfileImage' />
			</div>

			<Space w={60} />

			<div className='themeDetails' data-aos='fade-down'>
				<h3 className='specialitis'>Hey,</h3>
				<h1 className='nameHeading'>I'm Mehedi H. Rafiz</h1>
				<h3 className='specialitis'>Full Stack Web Developer</h3>
				<Group>
					<div style={getStyle('rgb(238 238 238 / 49%)')}>
						<SiNextdotjs size={20} color='white' /> &nbsp; NEXT JS
					</div>
					<div style={getStyle('rgb(255 239 1 / 45%)')}>
						<SiTsnode size={20} color='#ffef01' /> &nbsp; TS
					</div>
					<div style={getStyle('rgb(175 34 34 / 67%)')}>
						<SiNestjs size={20} color='red' /> &nbsp; NEST JS
					</div>
					<div style={getStyle('rgb(6 252 178 / 40%)')}>
						<SiMongodb size={20} color='#12B886' /> &nbsp; MONGO DB
					</div>
				</Group>

				<Space h={10} />

				<p className='shortDesc'>
					Trying to find a web developer,,,? Look no further, I'm your guy. I'm
					a professional Full-Stack Web Application Developer.
				</p>

				<button onClick={() => linkHandle(myResumeLink)} className='regularBtn'>
					Download Resume <HiDownload size={20} className='icon fa' />
				</button>
			</div>
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
