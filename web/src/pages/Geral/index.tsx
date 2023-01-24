import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import {
	materias9ano,
	materias1ano,
	materias2ano,
	materias3ano
} from '../../util/materias'
import Materia from '../../components/Materia'
import Button from '../../components/Button'

export default function MediaGeral() {
	const years = [9, 1, 2, 3]
	const [anoDesejado, setAnoDesejado] = useState<number>(2)
	const [materias, setMaterias] = useState<string[]>([])
	const [mediaGeral, setMediaGeral] = useState<number>(0)

	useEffect(() => {
		switch (anoDesejado) {
			case 9:
				setMaterias(materias9ano)
				break

			case 1:
				setMaterias(materias1ano)
				break

			case 2:
				setMaterias(materias2ano)
				break

			case 3:
				setMaterias(materias3ano)
				break

			default:
				setMaterias(['Escolha um ano para calcular suas médias'])
				break
		}
	}, [anoDesejado])

	useEffect(() => {
		let timeRemaining: number = 3
		setInterval(() => {
			const el = document.getElementById('timeRemaining')
			if (el) el.innerHTML = timeRemaining.toString()
			timeRemaining -= 1
			if (timeRemaining < 0) {
				getMedias()
				timeRemaining = 3
			}
		}, 1000)
	}, [mediaGeral])

	return (
		<main className={`container ${styles.container}`}>
			<Title title='Média Geral' />
			<div className={styles.buttons}>
				{years.map((year) => (
					<Button
						key={year}
						value={year}
						active={year === anoDesejado}
						onClick={() => setAnoDesejado(year)}
						text='º'
					/>
				))}
			</div>
			<div className={styles.materias}>
				{materias.map((materia) => {
					return (
						<Materia
							key={materia}
							nome={materia}
						/>
					)
				})}
				<div className={styles.mediaFinal}>
					<h2 className={styles.label}>
						Sua média final é: <span>{mediaGeral.toFixed(2)}</span>
					</h2>
					<p>
						Atualizando em: <span id='timeRemaining'></span>s
					</p>
				</div>
			</div>
			<Voltar />
			<ToastContainer
				position='top-right'
				autoClose={3000}
				limit={3}
				newestOnTop
				hideProgressBar={false}
				pauseOnFocusLoss={true}
				progressClassName={styles.toast__body}
			/>
		</main>
	)

	function getMedias() {
		let mediaTotal = 0
		const medias = document.querySelectorAll('#mediaFinal')
		medias.forEach((media) => (mediaTotal += parseFloat(media.innerHTML)))
		setMediaGeral(mediaTotal / medias.length)
	}
}
