import styles from './SocialButtons.module.css';
import InstagramIcon from './InstagramIcon';
import YouTubeIcon from './YouTubeIcon';

const SocialButtons = () => {
	return (
		<div className={styles.wrapper}>
			<a href="https://youtube.com">
				<YouTubeIcon />
			</a>
			<a href="https://www.instagram.com/">
				<InstagramIcon />
			</a>
		</div>
	)
}

export default SocialButtons;