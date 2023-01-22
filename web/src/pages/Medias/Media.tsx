import { useState } from 'react'
import styles from './styles.module.scss'

export default function Media() {
	const [notaPrimeiroTrimestre, setNotaPrimeiroTrimestre] = useState('')
	const [notaSegundoTrimestre, setNotaSegundoTrimestre] = useState('')
	const props = { T3: '6' }

	const T1 = parseFloat(notaPrimeiroTrimestre)
	const T2 = parseFloat(notaSegundoTrimestre)
	const T3 = parseFloat(props.T3)

	const equation = (T3 - 2 * T2 - T1) / 3
	const notaTerceiroTrimestre = parseFloat(equation.toFixed(2))

	function fraseErro() {
		if (T1 > 10 || T2 > 10 || T1 < 0 || T2 < 0) {
			return 'Por favor, digite apenas valores entre 0 e 10'
		}
		if (notaTerceiroTrimestre > 10) {
			return 'Putz'
		}
	}

	return (
		<div style={{ alignItems: 'center' }}>
			<div className={styles.inputWrapper}>
				<div className={styles.input}>
					<h2 className={styles.label}>Nota do 1º tri: </h2>
					<input
						type='number'
						className={styles.textInput}
						maxLength={4}
						value={notaPrimeiroTrimestre}
						onChange={(e) => {
							setNotaPrimeiroTrimestre(
								e.target.value.replace(',', '.')
							)
						}}
					/>
				</div>
				<div className={styles.input}>
					<h2 className={styles.label}>Nota do 2º tri: </h2>
					<input
						type='number'
						className={styles.textInput}
						maxLength={4}
						value={notaSegundoTrimestre}
						onChange={(e) => {
							setNotaSegundoTrimestre(
								e.target.value.replace(',', '.')
							)
						}}
					/>
				</div>
				<div className={styles.input}>
					<h3 className={`${styles.label} ${{ marginTop: 10 }}`}>
						Sua nota do 3º tri tem que ser:
					</h3>
				</div>
			</div>
			<div className={styles.wrapperNotaAlvo}>
				<h2 className={styles.notaAlvo}>{notaTerceiroTrimestre}</h2>
			</div>
			<p className={styles.fraseFinal}>{fraseErro()}</p>
		</div>
	)
}
