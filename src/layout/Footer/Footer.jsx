import styles from './Footer.module.css';
import Logo from '../../components/Logo/Logo';
import SocialButtons from '../../components/SocialButtons/SocialButtons';

const Footer = () => {
	return (
		<footer>
			<div className={styles.wrapper}>
				<div className={styles.social}>
					<SocialButtons />
				</div>
				<div className={styles.menu}>
					<div className={styles.menuWrapper}>
						<a className={styles.menuLink} href="#">
							Правила
						</a>
						<a className={styles.menuLink} href="#">
							Документы
						</a>
						<a className={styles.menuLink} href="#">
							Политика конфиденциальности
						</a>
					</div>
				</div>
				<div className={styles.logo}>
					<Logo />
				</div>
			</div>
		</footer>
	);
}

export default Footer;