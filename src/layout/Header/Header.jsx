import { useContext } from 'react';
import cn from 'classnames';
import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import MenuButton from '../../components/MenuButton/MenuButton';
import userAvatar from '../../assets/images/photo_example.png';
import MenuContext from '../../contexts/MenuContext/MenuContext';

const Header = () => {
	const { isMenu } = useContext(MenuContext);

	return (
		<header>
			<div className={cn(styles.wrapper, {
				[styles.wrapperWithMenu]: isMenu
			})}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.input}>
					<Search />
				</div>
				<div className={cn(styles.profile, {
					[styles.profileWithMenu]: isMenu
				})}>
					<button
						type="button"
						className={cn(styles.profile_name, {
							[styles.profileNameWithMenu]: isMenu
						})}
					>
						Александра
					</button>
					<a href="/profile" className={styles.profile_photo}>
						<img src={userAvatar} alt="your avatar" />
					</a>
				</div>
				<div className={cn(styles.button, {
					[styles.buttonWithMenu]: isMenu
				})}>
					<MenuButton />
				</div>
			</div>
		</header>
	);
}

export default Header;