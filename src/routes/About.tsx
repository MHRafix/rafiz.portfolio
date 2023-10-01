import React from 'react';
import { BiSolidHappyHeartEyes } from 'react-icons/bi';
import { BsSpeedometer } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import exp from '../Images/express.png';
import FIREBASE from '../Images/firebase.png';
import flutter from '../Images/flutter.png';
import GIT from '../Images/git.png';
import GITHUB from '../Images/github.png';
import gql from '../Images/heroku.png';
import MUI from '../Images/icon-10.svg';
import JS from '../Images/icon-3.png';
import MONGODB from '../Images/icon-5.png';
import REACT from '../Images/icon-6.png';
import NODE from '../Images/icon-7.png';
import PHP from '../Images/icon-8.png';
import MYSQL from '../Images/icon-9.png';
import mantine from '../Images/mantine.png';
import mongoose from '../Images/mongoose.png';
import nest from '../Images/nest.png';
import NETLIFY from '../Images/netlify.png';
import next from '../Images/nextjs.png';
import nuxt from '../Images/nuxt.png';
import prisma from '../Images/prisma.png';
import Rn from '../Images/rn.png';
import sp from '../Images/supabase.png';
import ts from '../Images/ts.png';
import vercel from '../Images/vercel.png';
import Vite from '../Images/vite.png';

import useAnimation from '../hooks/useAnimation';

const About = () => {
	// Import AOS animation here
	useAnimation();

	return (
		<div>
			<div className='onDetail'>
				<div className='sectionName'>
					<h1 className='sectionTitle'>
						About <span className='highlight'>Me</span>
					</h1>
				</div>
				<div className='grid_layout'>
					{/* <div> */}
					<div
						className='featureBoxes'
						style={{
							width: '100%',
						}}
					>
						<div className='box' data-aos='flip-up'>
							<span className='boxIcon'>
								<HiViewGrid size={35} className='fas fa-briefcase' />
							</span>
							<h2 className='countNo'>155+</h2>
							<span className='featureName'>Project Done</span>
						</div>
						<div className='box' data-aos='flip-up'>
							<span className='boxIcon'>
								<BiSolidHappyHeartEyes size={990} className='fas' />
							</span>
							<h2 className='countNo'>100%</h2>
							<span className='featureName'>Client Satisfaction</span>
						</div>
						<div className='box' data-aos='flip-down'>
							<span className='boxIcon'>
								<FaChartLine size={28} className='fas' />
							</span>
							<h2 className='countNo'>95%</h2>
							<span className='featureName'>Success Rate</span>
						</div>
						<div className='box' data-aos='flip-down'>
							<span className='boxIcon'>
								<BsSpeedometer size={30} className='fas' />
							</span>
							<h2 className='countNo'>100%</h2>
							<span className='featureName'>Optimized & SEO</span>
						</div>
					</div>
					<div>
						<span
							className='specialitis'
							style={{
								fontWeight: 700,
							}}
						>
							I am Mehedi Hasan Rafiz,
						</span>
						<p className='shortDesc'>
							a full stack web/app developer with 3 years of software
							development experience. I have done 150+ projects with 100% client
							satisfaction. I am experienced in both of front-end and back-end
							of Web Development also experienced in Native App Development. I
							have working experience with MVC, OOP and version controlling with
							git/github. I have also designed user interface with React/Next JS
							and manage state with Redux/React Query. Also manage API request
							with GraphQL. I developed back-end in Node/Express JS where I use
							MVC model. For the complicated service I use Nest JS and GraphQL
							in OOP system.
						</p>
						{/* <Link to='/contactMe' className='regularBtn'>
								Contact Me <span className='icon fas fa-blender-phone'></span>
							</Link> */}
					</div>
				</div>
			</div>

			{/* skill section */}
			<div className='inDetail'>
				<div className='sectionName'>
					<h1 className='sectionTitle'>
						My <span className='highlight'>Skills</span>
					</h1>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: 15,
					}}
				>
					<div>
						<div className='skillBox'>
							<div className='box' data-aos='flip-left'>
								<img src={JS} alt='skillImage' /> <br />
								<span className='skillName'>javascript</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={ts} alt='skillImage' /> <br />
								<span className='skillName'>TypeScript</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={REACT} alt='skillImage' /> <br />
								<span className='skillName'>react js</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={Vite} alt='skillImage' /> <br />
								<span className='skillName'>Vite JS</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={next} alt='skillImage' /> <br />
								<span className='skillName'>Next JS</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={nuxt} alt='skillImage' /> <br />
								<span className='skillName'>Nuxt JS</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={MUI} alt='skillImage' /> <br />
								<span className='skillName'>material ui</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={mantine} alt='skillImage' /> <br />
								<span className='skillName'>Mantine UI</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={Rn} alt='skillImage' /> <br />
								<span className='skillName'>React Native</span>
							</div>{' '}
							<div className='box' data-aos='flip-left'>
								<img src={flutter} alt='skillImage' /> <br />
								<span className='skillName'>Flutter</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={NODE} alt='skillImage' /> <br />
								<span className='skillName'>node js</span>
							</div>{' '}
							<div className='box' data-aos='flip-left'>
								<img src={nest} alt='skillImage' /> <br />
								<span className='skillName'>Nest JS</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={exp} alt='skillImage' /> <br />
								<span className='skillName'>Express JS</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={PHP} alt='skillImage' /> <br />
								<span className='skillName'>PHP</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={MONGODB} alt='skillImage' /> <br />
								<span className='skillName'>mongodb</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={MYSQL} alt='skillImage' /> <br />
								<span className='skillName'>mysql</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={mongoose} alt='skillImage' /> <br />
								<span className='skillName'>Mongoose</span>
							</div>{' '}
							<div className='box' data-aos='flip-left'>
								<img src={prisma} alt='skillImage' /> <br />
								<span className='skillName'>Prisma</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={GITHUB} alt='skillImage' /> <br />
								<span className='skillName'>github</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={GIT} alt='skillImage' /> <br />
								<span className='skillName'>GIT</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={FIREBASE} alt='skillImage' /> <br />
								<span className='skillName'>firebase</span>
							</div>
							<div className='box' data-aos='flip-left'>
								<img src={sp} alt='skillImage' /> <br />
								<span className='skillName'>Supabase</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={NETLIFY} alt='skillImage' /> <br />
								<span className='skillName'>netlify</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={gql} alt='skillImage' /> <br />
								<span className='skillName'>graphql</span>
							</div>
							<div className='box' data-aos='flip-right'>
								<img src={vercel} alt='skillImage' /> <br />
								<span className='skillName'>vercel</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* tools section  */}

			{/* <div className='inDetail'>
				<div className='sectionName'>
					<h1 className='sectionTitle'>
						Tech <span className='highlight'>Tools</span>
					</h1>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: 15,
					}}
				>
					<div
						style={{
							width: '100%',
						}}
					>
						<div className='skillBox'></div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default About;
