import React from "react";
import Select from 'react-select'
import cn from 'classnames';
import './SelectInput.css'

const SelectInput = ({
	name,
	label,
	options,
	onChange,
	value,
	disabled,
	errDiv,
	classes = []
}) => {

	const handleChange = (value) => onChange(value);
	const defaultValue = (options, value) => {
		if (options) {
			return options.find(option => option.value === value)
		}
		return '';
	};

	return (
		<div className={cn('form_select-wrapper', [...classes], {
			'form_select-disabled': disabled,
			'form_select-error': errDiv
		})}>
			<label
				className='form_label-select'
				htmlFor={name}
			>
				{label}
			</label>
			<Select
				options={options}
				onChange={handleChange}
				className="select-container"
				classNamePrefix="select"
				value={defaultValue(options, value)}
			/>
		</div>
	);
}

export default SelectInput;