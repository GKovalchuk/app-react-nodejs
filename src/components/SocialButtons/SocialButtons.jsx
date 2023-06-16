import styles from './SocialButtons.module.css';

const SocialButtons = () => {
	return (
		<div className={styles.wrapper}>
			<a href="https://youtube.com">
				<svg width="40" height="40" viewBox="0 0 40 40" ill="white" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM27.4017 28.1533C23.8983 28.3933 16.095 28.3933 12.5967 28.1533C8.80333 27.8933 8.36167 26.0367 8.33333 20C8.36167 13.9517 8.80833 12.1067 12.5967 11.8467C16.095 11.6067 23.9 11.6067 27.4017 11.8467C31.1967 12.1067 31.6367 13.9633 31.6667 20C31.6367 26.0483 31.1917 27.8933 27.4017 28.1533ZM16.6667 16.0967L24.8617 19.9933L16.6667 23.9033V16.0967Z" />
				</svg>
			</a>
			<a href="https://www.instagram.com/">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M24.715 10.5033C23.485 10.4467 23.115 10.4367 20 10.4367C16.885 10.4367 16.5167 10.4483 15.2867 10.5033C12.1217 10.6483 10.6483 12.1467 10.5033 15.2867C10.4483 16.5167 10.435 16.885 10.435 20C10.435 23.115 10.4483 23.4833 10.5033 24.715C10.6483 27.8467 12.115 29.3533 15.2867 29.4983C16.515 29.5533 16.885 29.5667 20 29.5667C23.1167 29.5667 23.485 29.555 24.715 29.4983C27.88 29.355 29.3517 27.8517 29.4983 24.715C29.5533 23.485 29.565 23.115 29.565 20C29.565 16.885 29.5533 16.5167 29.4983 15.2867C29.3517 12.1483 27.8767 10.6483 24.715 10.5033ZM20 25.9917C16.6917 25.9917 14.0083 23.31 14.0083 20C14.0083 16.6917 16.6917 14.01 20 14.01C23.3083 14.01 25.9917 16.6917 25.9917 20C25.9917 23.3083 23.3083 25.9917 20 25.9917ZM26.2283 15.1733C25.455 15.1733 24.8283 14.5467 24.8283 13.7733C24.8283 13 25.455 12.3733 26.2283 12.3733C27.0017 12.3733 27.6283 13 27.6283 13.7733C27.6283 14.545 27.0017 15.1733 26.2283 15.1733ZM23.8883 20C23.8883 22.1483 22.1467 23.8883 20 23.8883C17.8533 23.8883 16.1117 22.1483 16.1117 20C16.1117 17.8517 17.8533 16.1117 20 16.1117C22.1467 16.1117 23.8883 17.8517 23.8883 20ZM20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM31.5967 24.81C31.405 29.0517 29.0433 31.4017 24.8117 31.5967C23.5667 31.6533 23.1683 31.6667 20 31.6667C16.8317 31.6667 16.435 31.6533 15.19 31.5967C10.95 31.4017 8.59833 29.0483 8.40333 24.81C8.34667 23.5667 8.33333 23.1683 8.33333 20C8.33333 16.8317 8.34667 16.435 8.40333 15.19C8.59833 10.95 10.9517 8.59833 15.19 8.405C16.435 8.34667 16.8317 8.33333 20 8.33333C23.1683 8.33333 23.5667 8.34667 24.8117 8.405C29.0533 8.6 31.4067 10.9583 31.5967 15.19C31.6533 16.435 31.6667 16.8317 31.6667 20C31.6667 23.1683 31.6533 23.5667 31.5967 24.81Z" />
				</svg>
			</a>
		</div>
	)
}

export default SocialButtons;