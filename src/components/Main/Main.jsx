import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainContent from '../MainContent/MainContent';
import styles from './Main.module.css';

export const Main = () => {

	return (
		<div className={styles.wrapper}>
			<MainHeader />
			<MainContent />
		</div>
	);
}

export default Main;
