import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Error404 = () => {
	const ERR_TEXT = 'Кажется, такой страницы не существует'
	return (
		<PageTitle text={ERR_TEXT} />
	);
}

export default Error404;
