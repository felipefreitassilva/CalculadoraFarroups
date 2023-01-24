import { SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import Button from '../../components/Button'

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

		if (!valid(notaPrimeiroTrimestre) || !valid(notaSegundoTrimestre))
			setFraseErro('Por favor, digite apenas valores entre 0 e 10')
		if (notaNecessaria > 10) setFraseErro('Putz')
	}, [notaPrimeiroTrimestre, notaSegundoTrimestre, mediaDesejada])

	return (
		<main className={`container ${styles.container}`}>
			<Title title='Com que média você quer passar de ano?' />
			<div className={styles.buttons}>
				{grades.map((grade) => (
					<Button
						value={grade}
						active={grade === mediaDesejada}
						onClick={() => setMediaDesejada(grade)}
					/>
				))}
			</div>
			<div className={styles.inputs}>
				<Input
					text='Nota do 1º tri: '
					state={notaPrimeiroTrimestre}
					setState={setNotaPrimeiroTrimestre}
				/>
				<Input
					text='Nota do 2º tri: '
					state={notaSegundoTrimestre}
					setState={setNotaSegundoTrimestre}
				/>
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

	function valid(grade: number) {
		return grade < 0 || grade > 10
	}

	function Input({
		state,
		setState,
		text
	}: {
		state: number
		setState: React.Dispatch<SetStateAction<number>>
		text: string
	}) {
		return (
			<div className={styles.inputWrapper}>
				<h2 className={styles.inputLabel}>{text}</h2>
				<input
					type='number'
					maxLength={4}
					value={state}
					onChange={(e) => alterNota(setState, e)}
				/>
			</div>
		)
	}
}
