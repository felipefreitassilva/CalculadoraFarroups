import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import styles from './styles.module.scss'

export default function Prompt() {
	const navigate = useNavigate()

	const title: string = 'Média 9º ano'
	const media9ano = 6
	const media1ano = 6
	const media2ano = 6
	const media3ano = 6

	let next: string
	if (title === 'Média 9º ano') {
		next = 'media9ano'
	} else if (title === 'Média 1º ano') {
		next = 'media1ano'
	} else if (title === 'Média 2º ano') {
		next = 'media2ano'
	} else if (title === 'Média 3º ano') {
		next = 'media3ano'
	}

	return (
		<div className={styles.container}>
			<Title title={title} />
			<div style={{ alignItems: 'center' }}>
				<button
					className={styles.button}
					onClick={() => {
						navigate(next)
					}}
				>
					<p className={styles.textButton}>Já tenho minhas notas</p>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate(next)
					}}
				>
					<p className={styles.textButton}>Não tenho minhas notas</p>
				</button>
			</div>
			<Voltar />
		</div>
	)
}
