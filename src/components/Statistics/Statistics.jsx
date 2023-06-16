import './Statistics.css'
import React from 'react';
import cn from 'classnames';

const Statistics = (props) => {
	const staticItems = props.children.map((i) => {
		return i;
	})
	return (
		<div className={cn('statistics_wrapper')}>
			{staticItems}
		</div>
	);
}

export default Statistics;