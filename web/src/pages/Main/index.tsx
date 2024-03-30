import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import getItOnGooglePlay from '/getItOnGooglePlay.png'
import Title from '../../components/Title'

export default function Main() {
	const navigate = useNavigate()

	return (
		<main className={`container ${styles.container}`}>
			<section id={styles.title}>
				<Title title='Bem-vindo!' />
				<p className={styles.textWelcome}>
					{`Aqui existem 3 opções de calculadora; uma para saber a nota que
					você precisa no terceiro trimestre (Médias); uma para ver sua
					média final (Geral); e uma última para calcular seu GPA.`}
				</p>
			</section>
			<section id={styles.buttons}>
				<h3>Eaí, qual vai ser?</h3>
				<div className={styles.buttons}>
					<a
						className={styles.button}
						onClick={() => {
							navigate('/mediaunica')
						}}
					>
						Médias
					</a>
					<a
						className={styles.button}
						onClick={() => {
							navigate('/mediageral')
						}}
					>
						Geral
					</a>
					<a
						className={styles.button}
						onClick={() => {
							navigate('/gpa')
						}}
					>
						GPA
					</a>
				</div>
			</section>
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
			<div className={styles.privacyTerms}>
				<a onClick={() => { navigate('privacy') }}>Política de Privacidade</a>
				<br />
				<a onClick={() => { navigate('terms') }}>Termos & Condições</a>
			</div>
		</main>
	)
}
