import styles from './SwitcherLine.module.css';
import React from 'react';
import cn from 'classnames';

const SwitcherLine = ({
	buttonList = [],
	selected,
	switchTabs,
	classes = []
}) => {

	const buildButtons = () => {
		return buttonList.map(({ text, link }) => {

			return (
				<button
					key={text}
					type='button'
					onClick={() => { switchTabs({ text, link }) }}
					className={cn(styles.button, [...classes], {
						[styles.selected]: text === selected.text
					})}
				>
					{text}
				</button>
			);
		});
	}

	return (
		<div className={styles.wrapper}>
			{buildButtons()}
		</div>
	);
}

export default SwitcherLine;