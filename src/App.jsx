import React, { useState } from 'react';
import InputForm from './components/input/InputForm';
import RenderDetails from './components/display/RenderDetails';
import './App.css';

function App() {
	const [data, setData] = useState([
		{
			username: 'Chibuzor',
			age: 21,
		},
		{
			username: 'Emmanuel',
			age: 15,
		},
		{
			username: 'Chris',
			age: 30,
		},
	]);

	const updateDetails = (details) => {
		setData([...data, details]);
	};

	return (
		<div>
			<InputForm onUpdateDetails={updateDetails} />
			<RenderDetails renderData={data} />
		</div>
	);
}

export default App;
