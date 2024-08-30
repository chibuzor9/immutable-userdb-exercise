import styles from './InputForm.module.css';

import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const InputForm = (props) => {
	// eslint-disable-next-line no-unused-vars
	const [error, setError] = useState();

	const [formData, setFormData] = useState({
		username: '',
		age: '',
	});

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (
			formData.username.trim().length === 0 ||
			formData.age.trim().length === 0
		) {
			setError({
				title: 'Invalid Input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+formData.age < 0) {
			setError({
				title: 'Invalid Age',
				message:
					'Please enter a valid age (greater than 0)',
			});
			return;
		}

		props.onUpdateDetails(formData);

		setFormData({
			username: '',
			age: '',
		});
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const clearModalHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<Modal
					title={error.title}
					message={error.message}
					clearModal={clearModalHandler}
				/>
			)}
			<Card>
				<form onSubmit={onSubmitHandler}>
					<label className={styles.label}>
						Username
					</label>
					<input
						type="text"
						value={formData.username}
						name="username"
						onChange={onChangeHandler}
						className={styles.input}
					/>
					<label className={styles.label}>
						Age (Years)
					</label>
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
		</>
	);
};

export default InputForm;
