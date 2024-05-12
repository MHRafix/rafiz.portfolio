import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './CSS-STYLE/GLOBAL-CSS.css';
import ProjectView from './ProjectView.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/project-view/:projectId',
		element: <ProjectView />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider>
			<RouterProvider router={router} />
		</MantineProvider>
	</React.StrictMode>
);
