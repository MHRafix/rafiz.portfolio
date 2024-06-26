import { Carousel } from '@mantine/carousel';
import {
	ActionIcon,
	Anchor,
	Box,
	Button,
	Drawer,
	Loader,
	Paper,
	Space,
	Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import {
	FaArrowLeft,
	FaArrowRight,
	FaExternalLinkAlt,
	FaGithub,
	FaTimes,
} from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { SiUpwork } from 'react-icons/si';
import { useNavigate, useParams } from 'react-router-dom';
import useLinkHandle from './hooks/useLinkHandle';

const ProjectView = () => {
	const { projectId } = useParams();
	const [project, setProject] = useState<any>();
	const [getting, setGetting] = useState(false);
	const [opened, handler] = useDisclosure();

	useEffect(() => {
		setGetting(true);
		fetch('https://rafiz-server.up.railway.app/projects')
			.then((res) => res.json())
			.then((data) => {
				const findProject = data?.find((item) => item?._id === projectId);
				setProject(findProject);
				setGetting(false);
			})
			.catch((err) => setGetting(false));
	}, [projectId]);

	// Import use link here
	const { linkHandle } = useLinkHandle();

	const navigation = useNavigate();

	return (
		<div
			className='container_wrapper'
			// style={{
			// 	overflow: 'hidden',
			// }}
		>
			<Box id='home'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						// padding: '25px 0px',
						marginBottom: 20,
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
						<Anchor href='/#home' className='navLink'>
							<div>Home</div>
						</Anchor>
						<Anchor href='/#about_us' className='navLink'>
							<div className='navLink'>About</div>
						</Anchor>
						<Anchor href='/#projects' className='navLink'>
							<div className='navLink'>Projects</div>
						</Anchor>
						<Anchor href='/#contact' className='navLink'>
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
						<Anchor href='/#home' className='navLink'>
							<div>Home</div>
						</Anchor>
						<Anchor href='/#about_us' className='navLink'>
							<div className='navLink'>About</div>
						</Anchor>
						<Anchor href='/#projects' className='navLink'>
							<div className='navLink'>Projects</div>
						</Anchor>
						<Anchor href='/#contact' className='navLink'>
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
				{getting ? (
					<div
						style={{
							margin: 'auto',
							textAlign: 'center',
							display: 'flex',
							alignItems: 'center',
							height: '75vh',
							justifyContent: 'center',
						}}
					>
						<Loader size={'lg'} color='red' />
					</div>
				) : (
					<>
						{project ? (
							<Box
								className='flex_layout'
								style={{
									margin: 'auto',
									width: '90%',
									height: '100vh',
								}}
							>
								<Space w={60} />
								<div className='single-project-wrapper'>
									<Paper
										radius={10}
										bg={'dark'}
										py={70}
										shadow='lg'
										ta={'center'}
									>
										<Carousel
											controlSize={70}
											nextControlIcon={<FaArrowRight size={18} />}
											previousControlIcon={<FaArrowLeft size={18} />}
										>
											<Carousel.Slide>
												<img
													src={project?.projectImg}
													alt='thumbnail'
													style={{
														width: '90%',
														borderRadius: '10px',
														margin: 'auto !important',
														height: '420px',
														objectFit: 'cover',
														objectPosition: 'center',
													}}
												/>
											</Carousel.Slide>
											<Carousel.Slide>
												<img
													src={project?.projectImg2}
													alt='thumbnail'
													style={{
														width: '90%',
														borderRadius: '10px',
														margin: 'auto !important',
														height: '420px',
														objectFit: 'cover',
														objectPosition: 'center',
													}}
												/>
											</Carousel.Slide>
											<Carousel.Slide>
												<img
													src={project?.projectImg3}
													alt='thumbnail'
													style={{
														width: '90%',
														borderRadius: '10px',
														margin: 'auto !important',
														height: '420px',
														objectFit: 'cover',
														objectPosition: 'center',
													}}
												/>
											</Carousel.Slide>
										</Carousel>

										<Space h={50} />

										<div
											style={{
												width: '90%',
												margin: 'auto',
											}}
										>
											<Text ta={'left'} fz={40} fw={700}>
												Project Summaries:{' '}
											</Text>

											<Text ta={'left'} c={'white'} fz={25} fw={500}>
												{project?.projectType}
											</Text>

											<Space h={'xl'} />

											<div className='grid_layout_btn'>
												{project?.liveLink && (
													<button
														onClick={() => linkHandle(project?.liveLink)}
														className='regularBtn'
													>
														Live &nbsp; <FaExternalLinkAlt size={16} />
													</button>
												)}{' '}
												&nbsp;&nbsp;
												{project?.clientCodeLink && (
													<button
														onClick={() => linkHandle(project?.clientCodeLink)}
														className='regularBtn'
													>
														Frontend &nbsp; <FaGithub size={16} />
													</button>
												)}
												&nbsp;&nbsp;
												{project?.serverCodeLink && (
													<button
														onClick={() => linkHandle(project?.serverCodeLink)}
														className='regularBtn'
													>
														Server &nbsp; <FaGithub size={16} />
													</button>
												)}
											</div>

											{/* <Space h={'xl'} />

											<Text ta={'left'} fz={40} fw={700}>
												Technologies:{' '}
											</Text>
											<div
												className='skillTags'
												style={{
													textAlign: 'left',
												}}
											>
												<span className='skillTag'>
													{project?.technologies}
												</span>
											</div> */}

											<Space h={'xl'} />

											<Text ta={'left'} fz={40} fw={700}>
												Project Description:{' '}
											</Text>

											{/* <Space h={'xl'} /> */}

											<Text
												ta={'left'}
												fz={27}
												c={'white'}
												dangerouslySetInnerHTML={{
													__html: `<div>${project?.projectDesc}</div>`,
												}}
											></Text>
										</div>
									</Paper>
									<Space h={80} />
								</div>
							</Box>
						) : (
							<div
								style={{
									margin: 'auto',
									textAlign: 'center',
									display: 'flex',
									alignItems: 'center',
									height: '60vh',
									justifyContent: 'center',
								}}
							>
								<div>
									<Text c={'red'} fz={50} fw={700}>
										Project not found!
									</Text>

									<Space h={'lg'} />

									<Button
										fz={25}
										color='red'
										leftSection={<FaArrowLeft size={18} />}
										size='xl'
										onClick={() => navigation('/')}
									>
										Go Back
									</Button>
								</div>
							</div>
						)}
					</>
				)}
			</Box>
		</div>
	);
};

export default ProjectView;
