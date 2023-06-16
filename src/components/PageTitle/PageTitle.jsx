import React from 'react';
import cn from 'classnames';

const PageTitle = (props) => {
	const { text, classes = [] } = props;

	return (
		<div className={cn([...classes])}>
			<h1>{text}</h1>
		</div>
	);
};

export default PageTitle;