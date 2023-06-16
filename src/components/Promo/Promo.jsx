import './Promo.css';
import React from 'react';
import Card from '../Card/Card';

const Promo = (props) => {
	const promoListData = props.promoList;
	const promoList = [];


	promoListData.map((promo) => {
		const detailsLink = `/promotions/${promo.id}`;
		if (promo.id > 5) {
			return;
		}
		const classes = ['wide_card'];
		if (promo.id % 2 === 0) {
			classes.push('wide_card-even');
		}
		promoList.push(
			<Card
				key={promo.id}
				title={promo.title}
				pubDate={promo.pubDate}
				image={promo.image}
				previewtext={promo.previewtext}
				classes={classes}
				detailsLink={detailsLink}
			/>);
		return;
	});

	return (
		<div className='promo-wrapper'>
			{promoList}
		</div>

	);
}

export default Promo;

