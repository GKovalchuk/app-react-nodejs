import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import useJsonFetch from '../hooks/useJsonFetch';
import Article from '../Article/Article';
import PageTitle from '../PageTitle/PageTitle';
import Error404 from '../Error404/Error404';

export const Details = () => {
	const URL = 'http://localhost:3000/';
	const PAGE_TITLE = {
		text: 'Заголовок страницы',
		classes: ['details_title'],
	};
	const location = useLocation();
	const address = String(location.pathname).slice(1);
	const [detailData, setDetaillData] = useState(null);
	const [data, error] = useJsonFetch(URL, address);

	useEffect(() => {
		const setNewData = async () => {
			await setDetaillData(null);
			await setDetaillData(data);
		}

		if (data) {
			setNewData();
		}

	}, [data, error]);

	const buildDetailsContent = () => {
		if (detailData !== null) {
			if (detailData.length === 0) {
				return (
					<Error404 />
				);
			}
			return (
				<>
					<PageTitle
						text={PAGE_TITLE.text}
						classes={PAGE_TITLE.classes}
					/>
					<div className="details_article">
						<Article data={detailData} />
					</div>
				</>
			);
		}
	}

	return (
		<div className="details_wrapper">
			{buildDetailsContent()}
		</div>
	);
}

export default Details;
