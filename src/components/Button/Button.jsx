import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({
	text,
	doSmth,
	type = 'button',
	classes = []
}) => {

	return (
		<button
			type={type}
			onClick={doSmth}
			className={cn(styles.default, [...classes])}
		>
			{text}
		</button>
	);
}

export default Button;