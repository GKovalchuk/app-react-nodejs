import React from 'react';
import styles from './MainHeader.module.css';

const MainHeader = () => {
	const description = {
		part1: `Реализовано 3 страницы: главная, 
	редактирование профиля, детальная страница новости.
	Контент приходит как JSON c Node JS сервера.`,
		part2: `Использованные библиотеки: classnames, formik, luxon,
	react-input-mask, react router v6, react-select, stylelint`,
		part3: `Страница `,
	}
	const link = {
		text: "GitHub",
		link: "https://github.com/GKovalchuk/app-react-nodejs",
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				НЕБОЛЬШОЙ САЙТ НА <b>REACT</b> И NODE JS
			</h1>
			<div className={styles.text}>
				<p>
					{description.part1}
				</p>
				<p>
					{description.part2}
				</p>
				<p>
					{description.part3}
					<a href={link.link}>{link.text}</a>.
				</p>
			</div>

		</div>

	);
}

export default MainHeader;