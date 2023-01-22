import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'

export default function Main() {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<Title title='Médias' />
			<h1 className={styles.textWelcome}>
				Quanto você precisa para passar; outra para saber quanto você
				precisa para ter média geral 8; uma para saber quanto você
				precisa para ter média geral 9
			</h1>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={() => {
						navigate('Media6')
					}}
				>
					<h2 className={styles.textButton}>Média 6</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('Media8')
					}}
				>
					<h2 className={styles.textButton}>Média 8</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('Media9')
					}}
				>
					<h2 className={styles.textButton}>Média 9</h2>
				</button>
			</div>
			<Voltar />
		</div>
	)
}
