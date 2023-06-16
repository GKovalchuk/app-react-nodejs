import React from 'react'
import MainHeader from '../MainHeader/MainHeader';
import MainContent from '../MainContent/MainContent';
import './Main.css';

export const Main = () => {

	return (
		<div className="main_wrapper ">
			<MainHeader />
			<MainContent />
		</div>
	);
}

export default Main;
