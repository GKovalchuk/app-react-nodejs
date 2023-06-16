import './Button.css'
import React from 'react';
import cn from 'classnames';

const Button = ({ text, doSmth, type = 'button', classes = [] }) => {

	return (
		<button
			type={type}
			onClick={doSmth}
			className={cn('button-default', [...classes])}
		>
			{text}
		</button>
	);
}

export default Button;