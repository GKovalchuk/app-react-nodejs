import React from 'react';
import './News.css';
import Card from '../Card/Card';

const News = (props) => {
	const newsListData = props.newsList;
	const newsList = [];

	newsListData.map((news) => {
		const detailsLink = `/news/${news.id}`;
		const classes = [];
		if (news.id % 3 === 0) {
			classes.push('card-news-third');
		}
		newsList.push(
			<Card
				key={news.id}
				title={news.title}
				pubDate={news.pubDate}
				image={news.image}
				previewtext={news.previewtext}
				fulltext={news.fulltext}
				classes={classes}
				detailsLink={detailsLink}
			/>);
		return;
	});

	return (
		<div className='news-wrapper'>
			{newsList}
		</div>

	);
}

export default News;

