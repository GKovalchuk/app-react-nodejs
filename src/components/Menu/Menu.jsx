import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Menu.module.css';
import MenuContext from '../../contexts/MenuContext/MenuContext';
import Logo from '../Logo/Logo';
import CrossIcon from './CrossIcon';

const Menu = ({ titleText = 'Меню раздела', classes = [], }) => {
	const [classActive, setClassActive] = useState(false);
	const { setIsMenu } = useContext(MenuContext);

	useEffect(() => {
		setIsMenu(true);
		const menuButton = document.getElementById('menuButton');
		menuButton.addEventListener('click', toggleMenu);

		return (() => {
			menuButton.removeEventListener('click', toggleMenu);
			setIsMenu(false);
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toggleMenu = () => {
		setClassActive(!classActive);
	}

	return (
		<div id='pageMenu'>
			<div className={cn(styles.modal, [...classes], {
				[styles.active]: classActive
			})}>
			</div>
			<div className={cn(styles.wrapper, [...classes], {
				[styles.active]: classActive
			})}>
				<div className={styles.title}>
					<h3>
						{titleText}
					</h3>
					<button
						type='button'
						onClick={toggleMenu}
						className={styles.close}
					>
						<CrossIcon />
					</button>

				</div>
				<nav className={styles.nav} role='navigation'>
					<ul>
						<li>
							<Link to='/'>Избранное</Link>
						</li>
						<li>
							<Link to='/news/1'>Моя компания</Link>
						</li>
						<li>
							<Link to='/promotions/1'>Моё развитие</Link>
						</li>
						<li>
							<Link to='/profile'>Новости компании</Link>
						</li>
						<li>
							<Link to='/' >Телефонная книга</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.logo}>
					<Logo />
				</div>
			</div >
		</div >
	);
}

export default Menu;
