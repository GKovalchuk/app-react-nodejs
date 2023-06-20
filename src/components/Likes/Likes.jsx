import React from 'react';
import cn from 'classnames';
import styles from './Likes.module.css'
import LikesIcon from './LikesIcon';

const Likes = ({ likes, classes = [] }) => {

	return (
		<button type='button' className={cn(styles.wrapper, [...classes])}>
			<LikesIcon />
			<p>
				{likes}
			</p>
		</button>
	);
}

export default Likes;