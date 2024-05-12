import '@mantine/carousel/styles.css';
import { Space } from '@mantine/core';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import useAnimation from '../../hooks/useAnimation';
import useLinkHandle from '../../hooks/useLinkHandle';

const Project = ({ project, no }) => {
	// const [modal, setModal] = useState(false);

	// Lets destructuring hte data from the project object
	const { projectName, projectType, projectImg, liveLink, _id } = project;

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
					<span className='projectType'>{projectName} Project</span>

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
							Demo &nbsp; <FaExternalLinkAlt size={16} />
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
