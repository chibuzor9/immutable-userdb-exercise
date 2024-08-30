import Button from './Button';
import styles from './Modal.module.css';

const Modal = (props) => {
	const onClickHandler = () => {
		props.clearModal();
	};

	return (
		<div
			className={styles['top-body']}
			onClick={onClickHandler}
		>
			<div className={styles.card}>
				<div className={styles.title}>
					{props.title}
				</div>
				<div className={styles.message}>
					{props.message}
				</div>
				<div className={styles.button}>
					<Button onClick={onClickHandler}>
						Okay
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
