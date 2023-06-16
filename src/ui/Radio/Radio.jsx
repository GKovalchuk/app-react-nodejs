import React from "react";
import { Field } from "formik";
import cn from 'classnames';
import './Radio.css';

const Radio = ({
	name,
	label,
	disabled,
	checked,
	onChange,
	classes = [],
}) => {
	return (
		<div className={cn('form_radio-wrapper', [...classes])}>
			<Field name={name}>
				{({ field }) => (
					<input
						{...field}
						disabled={disabled}
						type="radio"
						checked={checked}
						onChange={onChange}
						className={cn('form_radio')}
					/>
				)}
			</Field>
			<label
				className='form_label-radio'
				htmlFor={name}
			>
				{label}
			</label>
		</div>
	);
};

export default Radio;

