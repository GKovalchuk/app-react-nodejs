import './DateStamp.css'
import React from 'react';
import { DateTime } from 'luxon';
import cn from 'classnames';

const DateStamp = ({ timestamp, classes = [], format = 'dd.MM.yyyy' }) => {

	const dateToStr = () => {
		let date = DateTime.fromSeconds(Number(timestamp));
		date = date.setLocale('ru').toFormat(format).toLocaleString();
		return date;
	}

	const strDate = dateToStr(timestamp);

	return (
		<time className={cn([...classes])} dateTime={strDate}>{strDate}</time>
	);
}

export default DateStamp;