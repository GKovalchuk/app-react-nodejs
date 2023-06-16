import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
	const text = "amoCRM — это полный набор инструментов, которые раскроют потенциал вашего отдела продаж и повысят его эффективность. Считается лучшей CRM-системой по версии "
	const link = { text: "crmrating.ru", link: "https://crmrating.ru" };
	return (
		<div className="main-header_wrapper ">
			<h1 className="main-header_title">
				ПОЛУЧИТЕ <b>МАКСИМУМ</b> ОТ ОТДЕЛА ПРОДАЖ
			</h1>
			<div className="main-header_text">
				<p>
					{text}
					<a href={link.link}>{link.text}</a>.
				</p>
			</div>

		</div>

	);
}

export default MainHeader;