import styles from './Search.module.css';

const Search = () => {
	return (
		<form className={styles.form} method="GET" action="https://www.google.com">
			<button className={styles.button}>
			</button>
			<label className={styles.input_label} htmlFor="q">search field</label>
			<input className={styles.input} id="q" type="text" placeholder="Поиск" />
		</form>
	);
}

export default Search;