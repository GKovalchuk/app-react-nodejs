import React from 'react';
import styles from './MainHeader.module.css';

const MainHeader = () => {
	const TEXT = "amoCRM — это полный набор инструментов, которые раскроют потенциал вашего отдела продаж и повысят его эффективность. Считается лучшей CRM-системой по версии "
	const link = { text: "crmrating.ru", link: "https://crmrating.ru" };

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				ПОЛУЧИТЕ <b>МАКСИМУМ</b> ОТ ОТДЕЛА ПРОДАЖ
			</h1>
			<div className={styles.text}>
				<p>
					{TEXT}
					<a href={link.link}>{link.text}</a>.
				</p>
			</div>

		</div>

	);
}

export default MainHeader;