import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from '../components/Main/Main';
import Page from '../components/Page/Page';
import Details from '../components/Details/Details';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import Error404 from '../components/Error404/Error404';

const LayoutRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route element={<Page />}>
					<Route path="/profile" element={<ProfileForm />} />
					<Route path="/news/:news/" element={<Details />} />
					<Route path="/promotions/:promotions/" element={<Details />} />
				</Route>
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
}
export default LayoutRouter;