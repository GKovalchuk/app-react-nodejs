import React, { forwardRef } from 'react';
import cn from 'classnames';

const Text = forwardRef(({ text, classes = [] }, ref) => {
	return (
		<div ref={ref} className={cn([...classes])}>
			<p>
				{text}
			</p>
		</div>
	);
});

export default Text;