import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Card.module.css';
import SubTitle from '../SubTitle/SubTitle';
import Text from '../Text/Text'
import DateStamp from '../DateStamp/DateStamp';
import Likes from '../Likes/Likes';
import Views from '../Views/Views';
import Comments from '../Comments/Comments';
import SelectButton from '../SelectButton/SelectButton';
import Statistics from '../Statistics/Statistics';
import ImageDefault from './cardImageDefault.png';

const Card = ({
	title = '',
	pubDate = '',
	image,
	previewtext = '',
	isThirdCard,
	isWideCard,
	isEvenWideCard,
	classes = [],
	detailsLink = '/'
}) => {
	const FOOTER_PROMO_TEXT = { text: 'Предложение активно' };
	const [textClassMod, setTextClassMod] = useState('');
	const textRef = useRef(null);
	const titleRef = useRef(null);

	useEffect(() => {
		let cardTitleElemH = titleRef.current.offsetHeight;

		const setNewClass = () => {
			const strCounter = Math.floor((116 - cardTitleElemH) / 22.5);
			let newClass = styles.fourLinesText;
			if (strCounter === 3) newClass = styles.threeLinesText;
			if (strCounter === 2) newClass = styles.twoLinesText;
			if (strCounter === 1) newClass = styles.oneLineText;
			setTextClassMod([newClass]);
		}

		const changeTextHeight = () => {
			let newCardTitleElemH = titleRef.current.offsetHeight;
			if (cardTitleElemH !== newCardTitleElemH) {
				cardTitleElemH = newCardTitleElemH;
				setNewClass();
			}
		}

		changeTextHeight();
		setNewClass();
		window.addEventListener('resize', changeTextHeight);
		return (() => {
			window.removeEventListener('resize', changeTextHeight);
		})
	}, []);

	const buildClasses = () => {
		if (isThirdCard) classes.push(styles.newsThird);
		if (isWideCard) classes.push(styles.wideCard);
		if (isEvenWideCard) classes.push(styles.wideCardEven);
	}

	const buildFooter = () => {
		if (classes.includes(styles.wideCard)) {
			return (
				<>
					<Text
						text={FOOTER_PROMO_TEXT.text}
						classes={[styles.footerText, styles.textWrapper]}
					/>
					<Statistics>
						<Likes likes={123} />
						<Views views={123} />
					</Statistics>
				</>
			);
		}
		return (
			<Statistics>
				<Likes likes={125} />
				<Comments comments={55} />
				<Views views={300} />
			</Statistics>
		);
	}

	const addImage = () => {
		if (image) {
			return <img src={image} alt='card cover' />
		}
		return <img src={ImageDefault} alt='card cover' />
	}

	buildClasses();

	return (
		<div className={cn(styles.card, [...classes])} >
			<div className={styles.content}>
				<Link to={detailsLink}>
					<SubTitle text={title} ref={titleRef} />
				</Link>
				<SelectButton />
				<Text
					text={previewtext}
					classes={[textClassMod, styles.textWrapper]}
					ref={textRef}
				/>
			</div>
			<div className={styles.footer}>
				<DateStamp timestamp={pubDate} classes={[styles.footerDate]} />
				{buildFooter()}
			</div>
			<div className={styles.imageWrapper}>
				<div className={styles.image}>
					{addImage()}
				</div>
			</div>
		</div>
	);
}

export default Card;