import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import LayoutRouter from './layout/LayoutRouter';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import MenuProvider from './contexts/MenuContext/MenuProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<MenuProvider>
			<Header />
			<div className="wrapperScrollArea">
				<main>
					<LayoutRouter />
				</main>
				<Footer />
			</div>
		</MenuProvider>
	</>

);
