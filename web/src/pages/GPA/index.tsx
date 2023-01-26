import { SetStateAction, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import checkValidity from '../../util/checkValidity'

export default function Gpafinal() {
	const [mediaNonoAno, setMediaNonoAno] = useState<number>(0)
	const [mediaPrimeiroAno, setMediaPrimeiroAno] = useState<number>(0)
	const [mediaSegundoAno, setMediaSegundoAno] = useState<number>(0)
	const [mediaTerceiroAno, setMediaTerceiroAno] = useState<number>(0)
	const [GPAFinal, setGPAFinal] = useState<number>(0)

	useEffect(() => {
		const mediaNonoAno = search('mediaNonoAno')
		setMediaNonoAno(mediaNonoAno)
		const mediaPrimeiroAno = search('mediaPrimeiroAno')
		setMediaPrimeiroAno(mediaPrimeiroAno)
		const mediaSegundoAno = search('mediaSegundoAno')
		setMediaSegundoAno(mediaSegundoAno)
		const mediaTerceiroAno = search('mediaTerceiroAno')
		setMediaTerceiroAno(mediaTerceiroAno)

		const GPAFinal =
			(mediaNonoAno +
				mediaPrimeiroAno +
				mediaSegundoAno +
				mediaTerceiroAno) /
			10
		setGPAFinal(GPAFinal)

		checkValidity(mediaNonoAno, setMediaNonoAno)
		checkValidity(mediaPrimeiroAno, setMediaPrimeiroAno)
		checkValidity(mediaSegundoAno, setMediaSegundoAno)
		checkValidity(mediaTerceiroAno, setMediaTerceiroAno)
	}, [mediaNonoAno, mediaPrimeiroAno, mediaSegundoAno, mediaTerceiroAno])

	return (
		<main className={`container ${styles.container}`}>
			<Title title='GPA final' />
			<div className={styles.mainWrapper}>
				<div className={styles.inputs}>
					<div className={styles.inputWrapper}>
						<h2 className={styles.inputLabel}>Media do 9º ano: </h2>
						<input
							type='number'
							maxLength={4}
							value={mediaNonoAno}
							onChange={(e) => alterNota(setMediaNonoAno, e)}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<h2 className={styles.inputLabel}>Media do 1º ano: </h2>
						<input
							type='number'
							maxLength={4}
							value={mediaPrimeiroAno}
							onChange={(e) => alterNota(setMediaPrimeiroAno, e)}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<h2 className={styles.inputLabel}>Media do 2º ano: </h2>
						<input
							type='number'
							maxLength={4}
							value={mediaSegundoAno}
							onChange={(e) => alterNota(setMediaSegundoAno, e)}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<h2 className={styles.inputLabel}>Media do 3º ano: </h2>
						<input
							type='number'
							maxLength={4}
							value={mediaTerceiroAno}
							onChange={(e) => alterNota(setMediaTerceiroAno, e)}
						/>
					</div>
				</div>
				<div className={styles.outputs}>
					<h2 className={styles.label}>
						Seu GPA é: <span>{GPAFinal.toFixed(2)}</span>
					</h2>
				</div>
				<div className={styles.observations}>
					Ainda não tem suas médias?{' '}
					<Link to='../mediageral'>Clique aqui</Link> para
					calculá-las.
				</div>
			</div>
			<Voltar />
		</main>
	)

	function alterNota(
		setNota: React.Dispatch<SetStateAction<number>>,
		e: React.ChangeEvent<HTMLInputElement>
	) {
		setNota(parseFloat(e.target.value.replace(',', '.')))
	}

	function search(key: string) {
		const value = localStorage.getItem(key)
		if (!value) return 0
		return parseFloat(value)
	}
}
