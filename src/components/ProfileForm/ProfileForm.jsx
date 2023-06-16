import React from 'react';
import { Formik, useFormik, Field } from 'formik';
import {
	PAGE_TITLE,
	GENERAL_INPUTS,
	CONTACT_INPUTS,
	CHECKBOX_OPINION,
	RADIO_OPINION,
	BUTTON_SAVE,
	BUTTON_REJECT,
} from './ProfileFormData';
import './ProfileForm.css';
import PageTitle from '../PageTitle/PageTitle';
import CommonInput from '../../ui/CommonInput/CommonInput';
import SelectInput from '../../ui/SelectInput/SelectInput';
import Checkbox from '../../ui/Checkbox/Checkbox';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from '../../ui/Radio/Radio';
import TextArea from '../../ui/TextArea/TextArea';


export const ProfileForm = () => {
	const disabledNames = [];
	const phonesNames = [];
	const emailsNames = [];

	const validate = (value) => {
		const REGEXP_EMAIL = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		const errors = {};
		const valueNames = Object.keys(value);
		const activeNames = valueNames.filter(e => !disabledNames.includes(e));

		activeNames.map((name) => {
			if (!value[name]) {
				errors[name] = `Необходимое поле`;
			}
			if (phonesNames.includes(name) &&
				value[name].length < 16) {
				errors[name] = `Телефон некорректен`;
			}
			if (emailsNames.includes(name) &&
				!value[name]
					.match(REGEXP_EMAIL)) {
				errors[name] = `Email некорректен`;
			}
		});
		return errors;
	}

	const profileForm = () => {
		const getNotValidFields = (name) => {
			if (formik.errors[name] && formik.touched[name]) {
				return (
					<div className='form_error'>
						{formik.errors[name]}
					</div>
				);
			}
			return null;
		}
		const getExceptionsForValidate = (name, input, disabled) => {
			if (disabled) {
				disabledNames.push(name);
			}
			if (input === 'phone') {
				phonesNames.push(name);
			}
			if (input === 'email') {
				emailsNames.push(name);
			}
		}

		const buildInputs = (arr) => {
			return arr.map((props) => {
				const {
					input,
					label,
					name,
					options,
					disabled,
					inputStringValue,
					placeholder,
					classes } = props;

				if (input === 'common' ||
					input === 'email') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)
					return (
						<Field
							key={label}
							name={name}
							label={label}
							onChange={formik.handleChange}
							value={formik.values[name]}
							component={CommonInput}
							placeholder={placeholder}
							classes={classes}
							disabled={disabled}
							errDiv={errDiv}
						/>
					);

				} else if (input === 'textarea') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)
					return (
						<Field
							key={label}
							name={name}
							label={label}
							onChange={formik.handleChange}
							value={formik.values[name]}
							component={TextArea}
							placeholder={placeholder}
							classes={classes}
							disabled={disabled}
							errDiv={errDiv}
						/>
					);

				} else if (input === 'phone') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)
					return (
						<Field
							key={label}
							name={name}
							label={label}
							mask={'+7 999 999-99-99'}
							onChange={formik.handleChange}
							value={formik.values[name]}
							component={CommonInput}
							placeholder={placeholder}
							classes={classes}
							disabled={disabled}
							errDiv={errDiv}
						/>
					);

				} else if (input === 'select') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)
					return (
						<SelectInput
							key={label}
							name={name}
							label={label}
							options={options}
							onChange={(value) => {
								return formik
									.setFieldValue(name, value.value);
							}}
							value={formik.values[name]}
							errDiv={errDiv}
							disabled={disabled}
							classes={classes}
						/>
					);

				} else if (input === 'checkbox') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)

					const change = () => {
						let arr = formik.values[name];
						if (formik.values[name].includes(inputStringValue)) {
							arr = arr.filter(e => e !== inputStringValue);
						} else {
							arr.push(inputStringValue);
						}
						formik.setFieldValue(name, arr);
					}
					const checked = () => {
						if (formik.values[name].includes(inputStringValue)) {
							return true;
						}
						return false
					}
					return (
						<Checkbox
							key={label}
							name={name}
							label={label}
							onChange={change}
							checked={checked()}
							disabled={disabled}
							errDiv={errDiv}
						/>
					);


				} else if (input === 'radio') {
					getExceptionsForValidate(name, input, disabled);
					const errDiv = getNotValidFields(name)
					const checked = () => {
						if (formik.values[name] === inputStringValue) {
							return true;
						}
						return false
					}
					return (
						<Radio
							key={label}
							name={name}
							label={label}
							disabled={disabled}
							checked={checked()}
							onChange={() => {
								return formik
									.setFieldValue(name, inputStringValue);
							}}
							classes={classes}
							errDiv={errDiv}
						/>
					);
				}
			});
		}

		const formik = useFormik({
			initialValues: {
				fullName: "",
				specialization: 'Верстальщик',
				document: 'Опция 1',
				city: "",
				aboutMe: "",
				generalWorkPhone: "",
				workPhone: "",
				mobilePhone: "",
				fax: "",
				homePhone: "",
				workEmail: "",
				privateEmail: "",
				checkboxOptions: ["checkboxNotActiveSelected", "loveCheckbox"],
				radioNotActive: "radioNotActiveSelected",
				radioOpinion: "loveRadio",
				comment: ""
			},
			validate,
			onSubmit: (values) => {
				alert(JSON.stringify(values, null, 1));
			}
		});

		const resetForm = () => formik.resetForm({
			values: {
				fullName: "",
				specialization: 'Верстальщик',
				document: 'Опция 1',
				city: "",
				aboutMe: "",
				generalWorkPhone: "",
				workPhone: "",
				mobilePhone: "",
				fax: "",
				homePhone: "",
				workEmail: "",
				privateEmail: "",
				checkboxOptions: ["checkboxNotActiveSelected", "loveCheckbox"],
				radioNotActive: "radioNotActiveSelected",
				radioOpinion: "loveRadio",
				comment: ""
			}
		});

		return (
			<form
				className='profile-form'
				onSubmit={formik.handleSubmit}
				onReset={resetForm}
			>
				<Title text={'Общее'} classes={['form_subtitle']} />
				{buildInputs(GENERAL_INPUTS)}
				<span className='form_span' />
				<Title text={'Контакты'} classes={['form_subtitle']} />
				{buildInputs(CONTACT_INPUTS)}
				<span className='form_span' />
				<Title
					text={'Мое мнение о чекбоксах'}
					classes={['form_subtitle']}
				/>
				{buildInputs(CHECKBOX_OPINION)}
				<span className='form_span' />
				<Title
					text={'Мое мнение о радио-кнопках'}
					classes={['form_subtitle']}
				/>
				{buildInputs(RADIO_OPINION)}
				<span className='form_span' />
				<div className="profile-form_button-wrapper">
					<Button
						text={BUTTON_SAVE.text}
						doSmth={BUTTON_SAVE.doSmth}
						type={BUTTON_SAVE.type}
						classes={['profile-form_button-save']}
					/>
					<Button
						text={BUTTON_REJECT.text}
						doSmth={BUTTON_REJECT.doSmth}
						type={BUTTON_REJECT.type}
						classes={['profile-form_button-reject']}
					/>
				</div>
			</form>
		);
	};

	return (
		<div className="profile-form_wrapper">
			<PageTitle
				text={PAGE_TITLE.text}
				classes={PAGE_TITLE.classes}
			/>
			<Formik>
				{profileForm()}
			</Formik>
		</div>
	);
}

export default ProfileForm; 