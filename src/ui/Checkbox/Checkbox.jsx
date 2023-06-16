import React, { useEffect } from "react";
import { Field } from "formik";
import './Checkbox.css';

const Checkbox = ({
	name,
	label,
	onChange,
	checked,
	disabled
}) => {
	return (
		<div className='form_checkbox-wrapper' key={label}>
			<Field name={name}>
				{({ field }) => (
					<input
						className='form_checkbox'
						{...field}
						disabled={disabled}
						type="checkbox"
						checked={checked}
						onChange={onChange}
					/>
				)}
			</Field>
			<label
				className='form_label-checkbox'
				htmlFor={name}
			>
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
