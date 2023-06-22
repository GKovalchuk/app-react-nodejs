export const PAGE_TITLE = {
	text: 'Редактировать профиль',
};
export const GENERAL_INPUTS = [
	{
		input: 'common',
		label: 'ФИО',
		name: 'fullName'
	},
	{
		input: 'select',
		label: 'Специализация',
		name: 'specialization',
		options: [
			{ value: 'Верстальщик', label: 'Верстальщик' },
			{ value: 'Backend', label: 'Backend' },
			{ value: 'Главный капитан', label: 'Главный капитан' }
		],
	},
	{
		input: 'select',
		label: 'Документ',
		name: 'document',
		options: [
			{ value: 'Опция 1', label: 'Опция 1' },
			{ value: 'Опция 2', label: 'Опция 2' },
			{ value: 'Опция 3', label: 'Опция 3' }
		],
	},
	{
		input: 'common',
		label: 'Город',
		name: 'city',
		placeholder: 'Название города',
		disabled: true
	},
	{
		input: 'textarea',
		label: 'О себе',
		name: 'aboutMe',
	},
];
export const CONTACT_INPUTS = [
	{
		input: 'phone',
		label: 'Раб. тел.',
		name: 'generalWorkPhone',
	},
	{
		input: 'phone',
		label: 'Раб. прямой',
		name: 'workPhone',
		placeholder: '+7'
	},
	{
		input: 'phone',
		label: 'Мобильный',
		name: 'mobilePhone',
		placeholder: '+7'
	},
	{
		input: 'phone',
		label: 'Факс',
		name: 'fax',
		placeholder: '+7'
	},
	{
		input: 'phone',
		label: 'Домашний',
		name: 'homePhone',
		placeholder: '+7'
	},
	{
		input: 'email',
		label: 'Email раб.',
		name: 'workEmail'
	},
	{
		input: 'email',
		label: 'Email личн.',
		name: 'privateEmail'
	},
];
export const CHECKBOX_OPINION = [
	{
		input: 'checkbox',
		label: 'Неактивен, выбран',
		name: 'checkboxOptions',
		inputStringValue: 'checkboxNotActiveSelected',
		disabled: true,
	},
	{
		input: 'checkbox',
		label: 'Неактивен, не выбран',
		name: 'checkboxOptions',
		inputStringValue: 'checkboxNotActiveNotSelected',
		disabled: true,
	},
	{
		input: 'checkbox',
		label: 'Я люблю чекбоксы',
		name: 'checkboxOptions',
		inputStringValue: 'loveCheckbox',
		disabled: false,
	},
	{
		input: 'checkbox',
		label: 'Я ненавижу чекбоксы',
		name: 'checkboxOptions',
		inputStringValue: 'hateCheckbox',
		disabled: false,
	},
];
export const RADIO_OPINION = [
	{
		input: 'radio',
		label: 'Неактивна, выбранa',
		name: 'radioNotActive',
		inputStringValue: 'radioNotActiveSelected',
		disabled: true
	},
	{
		input: 'radio',
		label: 'Неактивна, не выбранa',
		name: 'radioNotActive',
		inputStringValue: 'radioNotActiveNotSelected',
		disabled: true
	},
	{
		input: 'radio',
		label: 'Я люблю радио-кнопки',
		name: 'radioOpinion',
		inputStringValue: 'loveRadio',
		disabled: false
	},
	{
		input: 'radio',
		label: 'Я ненавижу радио-кнопки',
		name: 'radioOpinion',
		inputStringValue: 'hateRadio',
		disabled: false
	},
	{
		input: 'textarea',
		label: 'Комментарий',
		name: 'comment',
		value: 'comment',
	},
];

export const BUTTON_SAVE =
{
	text: 'Сохранить',
	type: 'submit',
	doSmth: () => { }
};
export const BUTTON_REJECT =
{
	text: 'Отмена',
	type: 'reset',
	doSmth: () => { }
};