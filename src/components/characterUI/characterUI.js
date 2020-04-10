import React from 'react';
import styled from 'styled-components';

import formData from './characterFormData';

const emptyState = {
	name: '',
	gender: '',

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
						
							// {currentInput.type === 'radio' &&
							// 		{currentInput.options.map(currentOption => 
							// 			<React.Fragment key={currentIndex} >
							// 				<input 
							// 					name={currentInput.fieldName} 
							// 					value={currentInput.value(this)}
							// 					onChange={this.handleChange}
							// 					type={currentInput.type}
							// 				/>
	  				// 					<label htmlFor={currentOption}>Male</label>
  					// 				</React.Fragment>
							// 		)}
							// 	} else {
							// 		<React.Fragment key={currentIndex} >
							// 			<input 
							// 				name={currentInput.fieldName} 
							// 				placeholder={currentInput.placeholder}
							// 				value={currentInput.value(this)}
							// 				onChange={this.handleChange}
							// 				type={currentInput.type}
							// 			/>
							// 			<label htmlFor={currentInput.fieldName}>{currentInput.label}</label>
							// 		</React.Fragment>
							// }
							<React.Fragment key={currentIndex} >
								<input 
									name={currentInput.fieldName} 
									placeholder={currentInput.placeholder}
									value={currentInput.value(this)}
									onChange={this.handleChange}
									type={currentInput.type}
								/>
								<label htmlFor={currentInput.fieldName}>{currentInput.label}</label>
							</React.Fragment>
						
					)}
				</form>
			</div>
		);
	}
}

export default CharacterUI;