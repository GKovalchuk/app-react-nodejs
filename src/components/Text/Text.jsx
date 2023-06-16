import './Text.css'
import React, { forwardRef } from 'react';
import cn from 'classnames';

const Text = forwardRef(({ text, classes = [] }, ref) => {
	return (
		<div ref={ref} className={cn('text_wrapper', [...classes])}>
			<p>{text}</p>
		</div>
	);
});

export default Text;