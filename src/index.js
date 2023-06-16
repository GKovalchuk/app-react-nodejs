import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Header />

		<div className="wrapper-scroll-area">
			<App />
			<Footer />
		</div>
	</>

);
