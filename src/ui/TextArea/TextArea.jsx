import React from 'react';
import cn from 'classnames';
import './TextArea.css';

const TextArea = ({
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
		<div className={cn('form_textarea-wrapper', [...classes], {
			'form_textarea-disabled': disabled,
			'form_textarea-error': errDiv
		})}>
			<label
				className='form_label-textarea'
				htmlFor={name}
			>
				{label}
			</label>
			<textarea
				id={field.name}
				name={field.name}
				onChange={onChange}
				value={value}
				className={cn('form_textarea')}
				placeholder={placeholder}
			/>
			{errDiv}
		</div>
	);
}

export default TextArea;