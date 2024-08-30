import styles from './InputForm.module.css';

import { useRef, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const InputForm = (props) => {
	const nameRef = useRef();
	const ageRef = useRef();

	const [error, setError] = useState();

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const currUsername = nameRef.current.value;
		const currAge = ageRef.current.value;

		if (
			currUsername.trim().length === 0 ||
			currAge.trim().length === 0
		) {
			setError({
				title: 'Invalid Input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+currAge < 0) {
			setError({
				title: 'Invalid Age',
				message:
					'Please enter a valid age (greater than 0)',
			});
			return;
		}

		props.onUpdateDetails({
			username: currUsername,
			age: +currAge,
		});

		nameRef.current.value = ''
		ageRef.current.value = ''
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
						className={styles.input}
						ref={nameRef}
					/>
					<label className={styles.label}>
						Age (Years)
					</label>
					<input
						type="number"
						className={styles.input}
						ref={ageRef}
					/>
					<Button>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default InputForm;
