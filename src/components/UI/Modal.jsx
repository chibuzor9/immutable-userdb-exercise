import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import styles from './Modal.module.css';

const Overlay = (props) => {
	return (
		<div
			className={styles['top-body']}
			onClick={props.clearModal}
		>
			<div className={styles.card}>
				<div className={styles.title}>
					{props.title}
				</div>
				<div className={styles.message}>
					{props.message}
				</div>
				<div className={styles.button}>
					<Button onClick={props.clearModal}>
						Okay
					</Button>
				</div>
			</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Overlay clearModal={props.clearModal} title={props.title} message={props.message}/>,
				document.getElementById('modal--root')
			)}
		</>
	);
	// return ReactDOM.render(<Overlay/>, document.getElementById('modal'))
};

export default Modal;
