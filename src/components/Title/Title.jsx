import React from 'react';
import cn from 'classnames';

const Title = (props) => {
	const { text, classes = [] } = props;

	return (
		<div className={cn([...classes])}>
			<h2>
				{text}
			</h2>
		</div>
	);
};

export default Title;