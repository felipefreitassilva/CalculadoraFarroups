import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Voltar() {
	const navigate = useNavigate()

	return (
		<button
			className={styles.button}
			onClick={() => {
				navigate(-1)
			}}
		>
			<p className={styles.buttonText}>Voltar</p>
		</button>
	)
}
