import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';

import Search from '../../components/Search/Search';

const Header = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.input}>
					<Search />
				</div>
				<div className={styles.profile}>
				</div>
				<div className={styles.menu_button}>
				</div>
			</div>
		</header>
	);
}

export default Header;