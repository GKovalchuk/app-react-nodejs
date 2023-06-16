import React, { useEffect, useRef } from 'react'
import './Article.css';
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
		<article className="article_wrapper">
			<DateStamp
				classes={['article-date']}
				timestamp={pubDate}
				format={'dd MMMM yyyy'}
			/>
			<Title classes={['article-title']} text={title} />
			<div className='article-text' ref={articleRef}></div>
		</article>
	);
}

export default Article;
