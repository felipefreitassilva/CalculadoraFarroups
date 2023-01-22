import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import getItOnGooglePlay from '../../../public/getItOnGooglePlay.png'
import Title from '../../components/Title'

export default function Main() {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<Title title='Bem-vindo!' />
			<h1 className={styles.textWelcome}>
				Aqui existem 3 opções de calculadora; uma para saber a nota que
				você precisa no terceiro trimestre (Médias); uma para ver sua
				média final (Geral); e uma última para calcular seu GPA.
			</h1>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={() => {
						navigate('Medias')
					}}
				>
					<h2 className={styles.textButton}>Médias</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('GPrompt')
					}}
				>
					<h2 className={styles.textButton}>Geral</h2>
				</button>
				<button
					className={styles.button}
					onClick={() => {
						navigate('/prompt')
					}}
				>
					<h2 className={styles.textButton}>GPA</h2>
				</button>
			</div>
			<a
				className={styles.appButton}
				href='https://play.google.com/store/apps/details?id=com.outdevs.calculadorafarroups&pli=1'
				target='_blank'
			>
				<img
					src={getItOnGooglePlay}
					alt='Baixe o App na Play Store'
				/>
			</a>
		</div>
	)
}
