import { SetStateAction, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import Button from '../../components/Button'
import checkValidity from '../../util/checkValidity'

export default function Media() {
	const grades = [6, 8, 9]

	const [notaPrimeiroTrimestre, setNotaPrimeiroTrimestre] =
		useState<number>(0)
	const [notaSegundoTrimestre, setNotaSegundoTrimestre] = useState<number>(0)
	const [notaTerceiroTrimestre, setNotaTerceiroTrimestre] =
		useState<number>(0)
	const [mediaDesejada, setMediaDesejada] = useState<number>(6)
	const [fraseErro, setFraseErro] = useState<string>('')

	useEffect(() => {
		const notaNecessaria =
			(6 * mediaDesejada -
				2 * notaSegundoTrimestre -
				notaPrimeiroTrimestre) /
			3
		setNotaTerceiroTrimestre(notaNecessaria)

		checkValidity(notaPrimeiroTrimestre, setNotaPrimeiroTrimestre)
		checkValidity(notaSegundoTrimestre, setNotaSegundoTrimestre)
		setFraseErro('')
		if (notaNecessaria > 10) setFraseErro('Putz')
	}, [notaPrimeiroTrimestre, notaSegundoTrimestre, mediaDesejada])

	return (
		<main className={`container ${styles.container}`}>
			<Title title='Com que média você quer passar de ano?' />
			<div className={styles.buttons}>
				{grades.map((grade) => (
					<Button
						key={grade}
						value={grade}
						active={grade === mediaDesejada}
						onClick={() => setMediaDesejada(grade)}
					/>
				))}
			</div>
			<div className={styles.inputs}>
				<div className={styles.inputWrapper}>
					<h2 className={styles.inputLabel}>Nota do 1º tri: </h2>
					<input
						type='number'
						maxLength={4}
						value={notaPrimeiroTrimestre}
						onChange={(e) => alterNota(setNotaPrimeiroTrimestre, e)}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<h2 className={styles.inputLabel}>Nota do 2º tri: </h2>
					<input
						type='number'
						maxLength={4}
						value={notaSegundoTrimestre}
						onChange={(e) => alterNota(setNotaSegundoTrimestre, e)}
					/>
				</div>
			</div>
			<div className={styles.outputs}>
				<h2 className={styles.label}>
					Sua nota do 3º tri tem que ser:{' '}
					<span>{notaTerceiroTrimestre.toFixed(2)}</span>
				</h2>
				<p className={styles.fraseErro}>{fraseErro}</p>
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
}
