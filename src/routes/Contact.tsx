import { Alert, Box, Loader } from '@mantine/core';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import {
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaMap,
	FaPhone,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import useAnimation from '../hooks/useAnimation';
import useLinkHandle from '../hooks/useLinkHandle';

const Contact = () => {
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);

	const form = useRef();
	// Send email form validation
	const sendEmail = (e) => {
		// if mail sending process is running display the loader
		if (e) {
			setSending(true);
		}

		e.preventDefault();
		emailjs
			.sendForm(
				'service_2t9cjfb',
				'template_pu6z1yj',
				form.current,
				'user_pLI6nCFTrlaFw52mO0PMA'
			)
			.then(
				(result) => {
					// Email sendis true hide the loader
					if (result) {
						setSending(false);
						setSuccess(true);
					}
				},
				(error) => {
					console.log(error.text);
				}
			);

		// Afetr sending the mail clear or reset the form
		e.target.reset();
	};

	// Import use link here
	const { linkHandle } = useLinkHandle();

	// Import AOS animation here
	useAnimation();

	return (
		<Box>
			<div className='onDetail'>
				<div className='sectionName'>
					<h1 className='sectionTitle'>
						Contact <span className='highlight'>Me</span>
					</h1>
				</div>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
						gap: 30,
					}}
				>
					<div className='contactInfop' style={{ width: '50%' }}>
						<div className='boxContact' data-aos='fade-right'>
							<div className='boxIcon'>
								<FaMap className='fas' />
							</div>
							<div className='icon'>
								<span className='addressField'>Address</span> <br />
								<span className='addressFieldText'>Dhaka, Bangladesh</span>
							</div>
						</div>
						<div className='boxContact' data-aos='fade-right'>
							<div className='boxIcon'>
								<FaEnvelope className='fas' />
							</div>
							<div className='icon'>
								<span className='addressField'>E-mail</span> <br />
								<span className='addressFieldText'>rafiz.mehedi@gmail.com</span>
							</div>
						</div>
						<div className='boxContact' data-aos='fade-right'>
							<div className='boxIcon'>
								<FaPhone className='fas fa-phone' />
							</div>
							<div className='icon'>
								<span className='addressField'>Cell</span> <br />
								<span className='addressFieldText'>+880 1611859722</span>
							</div>
						</div>
						<div className='boxContact text-center w-100'>
							<div
								className='socialIcons'
								style={{
									display: 'flex',
									justifyContent: 'left',
									alignItems: 'center',
									gap: 10,
								}}
								data-aos='fade-right'
							>
								<div
									className='boxIcon'
									onClick={() => linkHandle('https://github.com/mhrafix')}
								>
									<FaGithub />
								</div>{' '}
								<div
									className='boxIcon'
									onClick={() =>
										linkHandle('https://www.upwork.com/freelancers/mehedirafiz')
									}
								>
									<SiUpwork />
								</div>
								<div
									className='boxIcon'
									onClick={() =>
										linkHandle(
											'https://www.linkedin.com/in/mh-rafix-42772a21b/'
										)
									}
								>
									<FaLinkedin />
								</div>
							</div>
						</div>
					</div>
					<Box style={{ width: '50%' }}>
						{success && (
							<Alert variant='success' onClose={() => setSuccess(false)}>
								<h3 className='alert'>Message successfully delivered!</h3>
							</Alert>
						)}

						<form ref={form} onSubmit={sendEmail} data-aos='fade'>
							<input
								id='inputField'
								type='text'
								name='user_name'
								placeholder='Enter your name'
								required
							/>{' '}
							<br />
							<input
								id='inputField'
								type='email'
								name='user_email'
								placeholder='Enter your email'
								required
							/>{' '}
							<br />
							<input
								id='inputField'
								type='text'
								name='user_subject'
								placeholder='Enter your subject'
								required
							/>{' '}
							<br />
							<textarea
								id='inputField'
								name='message'
								placeholder='Enter your message'
								required
							/>{' '}
							<br />
							{sending ? (
								<button type='submit' id='disabledBtn' className='regularBtn'>
									Send <Loader color='red' />
								</button>
							) : (
								<button type='submit' className='regularBtn'>
									Send <span className='icon fas fa-paper-plane'></span>
								</button>
							)}
						</form>
					</Box>
				</Box>
			</div>
		</Box>
	);
};

export default Contact;
