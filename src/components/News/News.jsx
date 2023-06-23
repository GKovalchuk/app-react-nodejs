import React from 'react';
import styles from './News.module.css';
import Card from '../Card/Card';

const News = (props) => {
	const { newsListData } = props;
	const newsList = newsListData.map((news) => {
		const detailsLink = `/news/${news.id}`;
		let isThirdCard = false;
		if (news.id % 3 === 0) {
			isThirdCard = true;
		}
		return <Card
			key={news.id}
			title={news.title}
			pubDate={news.pubDate}
			image={news.image}
			previewtext={news.previewtext}
			fulltext={news.fulltext}
			isThirdCard={isThirdCard}
			detailsLink={detailsLink}
		/>;
	});

	return (
		<div className={styles.wrapper}>
			{newsList}
		</div>

	);
}

export default News;

