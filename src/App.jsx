import React, { useState } from 'react';
import './App.css';

import InputForm from './components/input/InputForm';
import RenderDetails from './components/display/RenderDetails';
import Modal from './components/UI/Modal';

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
		<>
			<InputForm onUpdateDetails={updateDetails} />
			<RenderDetails renderData={data} />
		</>
	);
}

export default App;
