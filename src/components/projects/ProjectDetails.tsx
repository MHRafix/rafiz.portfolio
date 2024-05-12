import '@mantine/carousel/styles.css';
import { Space } from '@mantine/core';
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import useAnimation from '../../hooks/useAnimation';
import useLinkHandle from '../../hooks/useLinkHandle';

const Project = ({ project, no }) => {
	const [modal, setModal] = useState(false);

	// Lets destructuring hte data from the project object
	const {
		projectName,
		projectType,
		projectImg,
		projectImg2,
		projectImg3,
		liveLink,
		projectDesc,
		clientCodeLink,
		serverCodeLink,
		technologies,
		_id,
	} = project;

	// Import use link here
	const { linkHandle } = useLinkHandle();

	const navigate = useNavigate();

	// Handle read more button
	const handleReadMore = (_id) => {
		navigate(`/project-view/${_id}`);
	};

	// Import AOS animation here
	useAnimation();

	return (
		<div>
			{/* <Modal
				opened={modal}
				onClose={() => setModal(false)}
				// dialogClassName='modal-90w'
				// aria-labelledby='example-custom-modal-styling-title'
				title={<h2>Detail of this {projectType} projects</h2>}
				fullScreen
			>
				<div
					style={{
						background: '#000',
					}}
				>
					<div className='projectImageSlider'>
						<Carousel>
							<Carousel.Slide>
								<img
									className='d-block w-100'
									src={projectImg}
									alt='projectSliderImg'
								/>
							</Carousel.Slide>
							<Carousel.Slide>
								<img
									className='d-block w-100'
									src={projectImg2}
									alt='projectSliderImg'
								/>
							</Carousel.Slide>
							<Carousel.Slide>
								<img
									className='d-block w-100'
									src={projectImg3}
									alt='projectSliderImg'
								/>
							</Carousel.Slide>
						</Carousel>
					</div>
					<div className='projectDetails'>
						<h3 className='specialitis'>{projectName}</h3>
						<p className='shortDesc'>{projectDesc}</p>
						<h3 className='nameOfAr'>Used Technology :-</h3>
						<div className='skillTags'>
							<span className='skillTag'>{technologies}</span>
						</div>
						<div className='authorityInfo'>
							<button
								onClick={() => linkHandle(liveLink)}
								className='regularBtn'
							>
								Live Site
							</button>{' '}
							&nbsp;&nbsp;
							<button
								onClick={() => linkHandle(clientCodeLink)}
								className='regularBtn'
							>
								Client Side Code
							</button>
							&nbsp;&nbsp;
							<button
								onClick={() => linkHandle(serverCodeLink)}
								className='regularBtn'
							>
								Server Side Code
							</button>
						</div>
					</div>
				</div>
			</Modal> */}
			<div
				className='projectsBox'
				style={{
					overflow: 'hidden',
					margin: 10,
				}}
				data-aos='flip-left'
			>
				<div className='projectThumbnail'>
					<img src={projectImg} alt='projectsImage' />
				</div>
				<div className='projectInfo'>
					{/* <h3 className='projectCountNo'>Project &nbsp; 0{no}</h3> */}
					<span className='projectType'>{projectType} Project</span>

					<Space h={'md'} />

					<div
						style={{
							display: 'flex',
							gap: 10,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<button onClick={() => linkHandle(liveLink)} className='regularBtn'>
							Live &nbsp; <FaExternalLinkAlt size={16} />
						</button>
						<button onClick={() => handleReadMore(_id)} className='regularBtn'>
							Read More &nbsp; <HiOutlineBookOpen size={22} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
