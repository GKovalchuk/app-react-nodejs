import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import News from '../News/News';
import Promo from '../Promo/Promo';
import SwitcherLine from '../SwitcherLine/SwitcherLine';
import Button from '../Button/Button';
import useJsonFetch from '../hooks/useJsonFetch';

const MainContent = () => {
	const URL = 'http://localhost:3000/';
	const BUTTON_LIST = [
		{ text: 'Новости', link: 'news' },
		{ text: 'Акции', link: 'promotions' }
	];
	const setDefaultEndOfList = () => {
		if (selected.text === 'Акции') {
			return 3;
		}
		return 5;
	}
	const [selected, setSelected] = useState(BUTTON_LIST[0]);
	let defaultEndOfList = setDefaultEndOfList();
	const [dataList, setDataList] = useState(null);
	const [endOfList, setEndOfList] = useState(defaultEndOfList);
	const [buttonText, setButtonText] = useState('Смотреть еще');
	const [data, error] = useJsonFetch(URL, selected.link);

	useEffect(() => {
		const fetchDataList = () => {
			setDefaultEndOfList()
			setEndOfList(defaultEndOfList);
			setDataList(data);
		}

		fetchDataList();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const switchTabs = (newTab) => {
		setSelected(newTab);
		setButtonText('Смотреть еще');
	}

	const getMoreContent = () => {
		let newEndOfList;
		if (buttonText === 'Свернуть') {
			newEndOfList = defaultEndOfList;
			setButtonText('Смотреть еще');
		}

		if (buttonText === 'Смотреть еще') {
			newEndOfList = endOfList + defaultEndOfList;
			if (newEndOfList >= dataList.length) {
				newEndOfList = dataList.length;
				setButtonText('Свернуть');
			}
		}

		setEndOfList(newEndOfList);
	}

	const buildMainContent = () => {
		if (dataList) {
			let clippedDataList = dataList.slice(0, endOfList);
			if (selected.text === 'Акции') {
				return (
					<Promo promoListData={clippedDataList} />
				);
			}
			return (
				<News newsListData={clippedDataList} />
			);
		}

	}

	return (
		<div className={styles.wrapper}>
			<SwitcherLine
				buttonList={BUTTON_LIST}
				selected={selected}
				switchTabs={switchTabs}
			/>
			{buildMainContent()}
			<Button text={buttonText} doSmth={getMoreContent} />
		</div>
	);
}

export default MainContent;
