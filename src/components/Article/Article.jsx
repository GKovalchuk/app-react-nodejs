import React, { useEffect, useRef } from 'react'
import styles from './Article.module.css';
import DateStamp from '../DateStamp/DateStamp';
import Title from '../Title/Title';

export const Article = (props) => {
	const { fulltext, pubDate, title } = props.data;
	const articleRef = useRef(null);

	useEffect(() => {
		if (fulltext) {
			articleRef.current.insertAdjacentHTML("afterbegin", fulltext);
		}
	}, [fulltext])

	return (
		<article className={styles.wrapper}>
			<DateStamp timestamp={pubDate} format={'dd MMMM yyyy'} />
			<Title classes={[styles.title]} text={title} />
			<div className={styles.text} ref={articleRef}></div>
		</article>
	);
}

export default Article;
