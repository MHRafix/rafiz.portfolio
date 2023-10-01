import { Box, Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Project from '../components/projects/ProjectDetails';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [getting, setGetting] = useState(false);

	useEffect(() => {
		setGetting(true);
		fetch('https://rafiz-portfolio-api.vercel.app/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
				setGetting(false);
			});
	}, []);

	let no = 1;

	return (
		<Box>
			<div className='onDetail'>
				<div className='sectionName'>
					<h1 className='sectionTitle'>
						My <span className='highlight'>Works</span>
					</h1>
				</div>

				{getting ? (
					<div className='loaderGif'>
						<Loader className='loader' color='red' />
					</div>
				) : (
					<div className='flex_layout'>
						{projects.map((project: any) => (
							<Project key={project._id} project={project} no={no++} />
						))}
					</div>
				)}
			</div>
		</Box>
	);
};

export default Projects;
