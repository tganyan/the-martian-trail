const formData = [
	{
		fieldName: 'name',
		placeholder: 'Roger Wilco',
		value: thisField => thisField.state.name,
		label: 'Who\'s captaining this vessel?',
		type: 'text',
	},
	{
		fieldName: 'home',
		placeholder: 'Seattle, WA, USA',
		value: thisField => thisField.state.home,
		label: 'Where did our brave stargazer grow up?',
		type: 'text',
	},
	{
		fieldName: 'gender',
		placeholder: 'Sir',
		value: thisField => thisField.state.gender,
		label: 'How should the captain be addressed? Sir? Ma\'am? Mx?',
		type: 'text',
	}
];

export default formData;