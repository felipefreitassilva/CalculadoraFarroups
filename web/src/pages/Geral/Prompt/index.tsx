import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'

export default function GPrompt() {
	const navigate = useNavigate()
	const title: string = 'GPrompt'

	return (
		<div className={styles.container}>
			<Title title={title} />
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={() => {
						navigate('geral9ano')
					}}
				>
					<h2 className={styles.textButton}>Média 9º ano</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('geral1ano')
					}}
				>
					<h2 className={styles.textButton}>Média 1º ano</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('geral2ano')
					}}
				>
					<h2 className={styles.textButton}>Média 2º ano</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('geral3ano')
					}}
				>
					<h2 className={styles.textButton}>Média 3º ano</h2>
				</button>
			</div>
			<Voltar />
		</div>
	)
}
