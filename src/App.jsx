import { Space } from '@mantine/core';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
	return (
		<div className='container_wrapper'>
			<Home />

			<Space h={100} />

			<About />

			<Space h={100} />

			<Projects />

			<Space h={100} />

			<Contact />
			<Space h={100} />
		</div>
	);
}

export default App;
