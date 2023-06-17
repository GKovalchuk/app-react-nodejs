import styles from './Logo.module.css';
import LogoAmoCRM from './LogoAmoCRM';

const Logo = () => {
	return (
		<div className={styles.wrapper}>
			<a className={styles.link} href="/">
				<LogoAmoCRM />
			</a>
		</div>
	);
}

export default Logo;