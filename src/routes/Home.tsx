import {
	ActionIcon,
	Anchor,
	Box,
	Button,
	Drawer,
	Group,
	Space,
	Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { BiLogoFlutter } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { HiDownload, HiMenu } from 'react-icons/hi';
import {
	SiGraphql,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiUpwork,
} from 'react-icons/si';
import Me from '../Images/me.jpg';
import useAnimation from '../hooks/useAnimation';
import useLinkHandle from '../hooks/useLinkHandle';

const Home = () => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [opened, handler] = useDisclosure();

	// My Resume Link
	const myResumeLink =
		'https://drive.google.com/file/d/1KYVpJzxXq1RZfgzrAxTyVPCJc9RVTppS/view?usp=sharing';

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
					justifyContent: 'space-between',
					// padding: '25px 0px',
					height: 80,
				}}
			>
				<Text fz={50} fw={800}>
					Mehedi H. Rafiz
				</Text>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '25px 0px',
						gap: 50,
					}}
					className='toggle_able_menus'
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
					<Button
						leftSection={<SiUpwork size={18} />}
						color='teal'
						size='xl'
						fz={25}
						onClick={() =>
							linkHandle(
								'https://www.upwork.com/freelancers/~01dcb2c17ef6544290'
							)
						}
					>
						Hire Me
					</Button>
				</div>

				{/* <ActionIcon
					color='gray'
					variant='subtle'
					size={70}
					p={1}
				>
					</ActionIcon> */}
				<HiMenu
					onClick={() => handler.open()}
					className='toggle_btn'
					color='white'
					size={50}
				/>
			</div>

			<Drawer
				position='right'
				size={'lg'}
				opened={opened}
				onClose={handler.close}
				style={{
					backgroundColor: 'red !important',
				}}
				closeButtonProps={{
					iconSize: 'xl',
					children: (
						<ActionIcon color='grey' size={'xl'} variant='subtle'>
							<FaTimes size={20} />
						</ActionIcon>
					),
				}}
			>
				<div
					style={{
						display: 'grid',
						padding: '25px 0px 0px 20px',
						gap: 20,
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
					<Button
						leftSection={<SiUpwork size={18} />}
						color='teal'
						size='xl'
						fz={25}
						onClick={() =>
							linkHandle(
								'https://www.upwork.com/freelancers/~01dcb2c17ef6544290'
							)
						}
					>
						Hire Me
					</Button>
				</div>
			</Drawer>

			<Box
				className='flex_layout'
				style={{
					margin: 'auto',
					width: '100%',
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
						<div style={getStyle('rgb(175 34 34 / 67%)')}>
							<SiNestjs size={20} color='crimson' /> &nbsp; NEST JS
						</div>
						<div style={getStyle('rgb(255 239 1 / 45%)')}>
							<BiLogoFlutter size={20} color='#00FFFF' /> &nbsp; FLUTTER
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
