import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SelectButton.module.css';
import StarIcon from './StarIcon';

const SelectButton = ({ classes = [] }) => {

	const [selected, setSelected] = useState(false);

	const getSelected = () => {
		setSelected(!selected);
	}

	return (
		<button
			type='button'
			onClick={getSelected}
			className={cn(styles.button, [...classes], {
				[styles.buttonSelected]: selected
			})}
		>
			<StarIcon />
		</button>
	);
}

export default SelectButton;
