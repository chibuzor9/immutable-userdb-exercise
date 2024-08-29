import styles from './InputForm.module.css';

import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const InputForm = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		age: '',
	});

	const onSubmitHandler = (event) => {
		event.preventDefault();

		props.onUpdateDetails(formData);
		setFormData({
			id: Math.random().toString(),
			username: '',
			age: '',
		});
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	return (
		<Card>
			<form onSubmit={onSubmitHandler}>
				<label className={styles.label}>Username</label>
				<input
					type="text"
					value={formData.username}
					name="username"
					onChange={onChangeHandler}
                    className={styles.input}
				/>
				<label className={styles.label}>Age (Years)</label>
				<input
					type="number"
					value={formData.age}
					name="age"
					onChange={onChangeHandler}
                    className={styles.input}
				/>
				<Button>Add User</Button>
			</form>
		</Card>
	);
};

export default InputForm;
