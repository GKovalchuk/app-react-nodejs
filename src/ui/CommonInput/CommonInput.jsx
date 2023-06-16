import React from 'react';
import InputMask from "react-input-mask";
import cn from 'classnames';
import './CommonInput.css';

const CommonInput = ({
	name,
	label,
	field,
	onChange,
	value,
	mask,
	placeholder = '...',
	classes = [],
	errDiv,
	disabled = false
}) => {
	return (
		<div className={cn('form_input-wrapper', [...classes], {
			'form_input-disabled': disabled,
			'form_input-error': errDiv
		})}>

			<label
				className='form_label-input'
				htmlFor={name}
			>
				{label}
			</label>
			<InputMask
				mask={mask}
				maskPlaceholder={null}
				id={field.name}
				name={field.name}
				type='text'
				onChange={onChange}
				value={value}
				className={cn('form_input-common')}
				placeholder={placeholder}
				disabled={disabled}
			/>
			{errDiv}
		</div>
	);
}

export default CommonInput;