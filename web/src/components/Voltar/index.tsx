import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Voltar() {
	const navigate = useNavigate()

	return (
		<button
			className={styles.button}
			onClick={goBack}
		>
			Voltar
		</button>
	)

	function goBack() {
		return navigate(-1)
	}
}
