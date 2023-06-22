import React from 'react';
import cn from 'classnames';
import styles from './Comments.module.css';
import CommentsIcon from './CommentsIcon';

const Comments = ({ comments, classes = [] }) => {

	return (
		<button
			type='button'
			className={cn(styles.wrapper, [...classes])}
		>
			<CommentsIcon />
			<p className={styles.counter}>
				{comments}
			</p>
		</button>
	);
}

export default Comments;