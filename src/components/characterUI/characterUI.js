import React from 'react';
import styled from 'styled-components';

import formData from './characterFormData';

const emptyState = {
	name: '',
	home: '',
	gender: '',
	bio: '',
};

class CharacterUI extends React.Component {
	constructor(props) {
		super(props);

		this.state = emptyState;
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		return(
			<div>
				<h1>Create your Captain</h1>
				<form>
					{formData.map((currentInput, currentIndex) => 
						<React.Fragment key={currentIndex} >
							<input 
								name={currentInput.fieldName} 
								placeholder={currentInput.placeholder}
								value={currentInput.value(this)}
								onChange={this.handleChange}
								type={currentInput.type}
							/>
							<label htmlFor={currentInput.fieldName}>{currentInput.label}</label>
							<br />
						</React.Fragment>						
					)}
					<textarea 
						name='bio' 
						rows='6' 
						cols='50'
						placeholder='It all started when I was dropped as a baby...'
						value={this.state.bio}
						onChange={this.handleChange}
					></textarea>
					<label htmlFor='bio'>What tragic and riveting backstory does our brave hero boast about?</label>
				</form>
			</div>
		);
	}
}

export default CharacterUI;