import styles from './Statistics.module.css'
import React from 'react';
import cn from 'classnames';

const Statistics = (props) => {
	const staticItems = props.children.map((i) => {
		return i;
	});

	return (
		<div className={cn(styles.wrapper)}>
			{staticItems}
		</div>
	);
}

export default Statistics;