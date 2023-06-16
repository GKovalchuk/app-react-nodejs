import './Card.css'
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import SubTitle from '../SubTitle/SubTitle';
import Text from '../Text/Text'
import DateStamp from '../DateStamp/DateStamp';
import Likes from '../Likes/Likes';
import Views from '../Views/Views';
import Comments from '../Comments/Comments';
import SelectButton from '../SelectButton/SelectButton';
import Statistics from '../Statistics/Statistics';

const Card = ({
	title = '',
	pubDate = '',
	image = '/src/assets/images/cardImageDefault.png',
	previewtext = '',
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
			let numOfStr = Math.floor((116 - cardTitleElemH) / 22.5)
			let newClass = `numOfStr-${numOfStr}`;
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

	const buildFooter = () => {
		if (classes.includes('wide_card')) {
			return (
				<>
					<Text
						text={FOOTER_PROMO_TEXT.text}
						classes={['card_footer__text']}
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

	return (
		<div className={cn('card', [...classes])} >
			<div className="card_content">
				<Link to={detailsLink}>
					<SubTitle text={title} ref={titleRef} />
				</Link>
				<SelectButton />
				<Text text={previewtext} classes={textClassMod} ref={textRef} />
			</div>
			<div className="card_footer">
				<DateStamp timestamp={pubDate} classes={["card_footer_date"]} />
				{buildFooter()}
			</div>
			<div className="card_image-wrapper">
				<div className="card_image">
					<img src={image} className={cn('')} />
				</div>
			</div>

		</div>
	);
}

export default Card;