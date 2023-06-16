import React from 'react';
import cn from 'classnames';
import { forwardRef } from 'react';

const SubTitle = forwardRef((props, ref) => {
	const { text, classes = [] } = props;

	return (
		<div ref={ref} className={cn("title_wrapper", [...classes])}>
			<h3>{text}</h3>
		</div>
	);
});

export default SubTitle;