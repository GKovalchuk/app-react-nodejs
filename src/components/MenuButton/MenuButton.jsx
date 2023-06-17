import MenuButtonIcon from './MenuButtonIcon.jsx';
import styles from './MenuButton.module.css';

const MenuButton = () => {
	return (
		<button
			type="button"
			id='menuButton'
			className={styles.menuButton}
		>
			<MenuButtonIcon />
		</button>
	)
};

export default MenuButton;