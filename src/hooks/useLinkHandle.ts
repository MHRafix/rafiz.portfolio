const useLinkHandle = () => {
	// Handle project live link open in new tab
	const linkHandle = (link) => {
		window.open(link);
	};

	return { linkHandle };
};

export default useLinkHandle;
