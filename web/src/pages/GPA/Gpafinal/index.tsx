import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../../../components/Title'
import Voltar from '../../../components/Voltar'

export default function Gpafinal() {
	const navigate = useNavigate()

	const media9ano = 6
	const media1ano = 6
	const media2ano = 6
	const media3ano = 6
	const GPAFinal = (media9ano + media1ano + media2ano + media3ano) / 10

	function Sair() {
		return (
			<button
				className={styles.button}
				onClick={() => {
					navigate('Main')
				}}
			>
				<p className={styles.buttonText}>Sair</p>
			</button>
		)
	}

	return (
		<div className={styles.container}>
			<Title title='GPA final' />
			<div>
				<p>Sua média no 9º ano: {media9ano}</p>
				<p>Sua média no 1º ano: {media1ano}</p>
				<p>Sua média no 2º ano: {media2ano}</p>
				<p>Sua média no 3º ano: {media3ano}</p>
				<p>Seu GPA final: </p>
			</div>
			<div className={styles.wrapperNotaFinal}>
				<h2 className={styles.notaFinal}>{GPAFinal}</h2>
			</div>
			<Sair />
			<Voltar />
		</div>
	)
}
