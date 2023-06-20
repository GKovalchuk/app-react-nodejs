import styles from './Promo.module.css';
import React from 'react';
import Card from '../Card/Card';

const Promo = (props) => {
	const { promoListData } = props;
	const promoList = promoListData.map((promo) => {
		const detailsLink = `/promotions/${promo.id}`;
		let [isWideCard, isEvenWideCard] = [true, false];
		if (promo.id % 2 === 0) {
			isEvenWideCard = true;
		}
		return <Card
			key={promo.id}
			title={promo.title}
			pubDate={promo.pubDate}
			image={promo.image}
			previewtext={promo.previewtext}
			isWideCard={isWideCard}
			isEvenWideCard={isEvenWideCard}
			detailsLink={detailsLink}
		/>;
	});

	return (
		<div className={styles.wrapper}>
			{promoList}
		</div>
	);
}

export default Promo;

