const formData = [
	{
		fieldName: 'name',
		placeholder: 'Roger Wilco',
		value: thisField => thisField.state.name,
		label: 'Who\'s captaining this vessel?',
		type: 'text',
	},
	{
		fieldName: 'gender',
		placeholder: '',
		value: thisField => thisField.state.gender,
		label: 'Male',
		type: 'radio',
	},
	{
		fieldName: 'gender',
		placeholder: '',
		value: thisField => thisField.state.gender,
		label: 'Female',
		type: 'radio',
	},
	{
		fieldName: 'gender',
		placeholder: '',
		value: thisField => thisField.state.gender,
		label: 'Other',
		type: 'radio',
	}
];

export default formData;