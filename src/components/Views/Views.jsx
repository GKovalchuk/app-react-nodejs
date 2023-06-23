import styles from './Views.module.css'
import React from 'react';
import cn from 'classnames';
import ViewsIcon from './ViewsIcon';

const Views = ({ views, classes = [] }) => {

	return (
		<div className={cn(styles.wrapper, [...classes])}>
			<ViewsIcon />
			<p className={styles.counter}>{views}</p>
		</div>
	);
}

export default Views;
