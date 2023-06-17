import React from 'react';
import { Outlet } from 'react-router-dom';
import './Page.css';
import Menu from '../Menu/Menu';
import MenuProvider from '../../contexts/MenuContext/MenuProvider';

const Page = () => {
	return (
		<div className="page_wrapper">
			<Menu classes={[]} />
			<Outlet />
		</div>
	);
}

export default Page;
