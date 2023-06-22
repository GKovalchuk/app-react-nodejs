import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Page.module.css';
import Menu from '../Menu/Menu';

const Page = () => {
	return (
		<div className={styles.wrapper}>
			<Menu classes={[]} />
			<Outlet />
		</div>
	);
}

export default Page;
