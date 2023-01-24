import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { toast } from 'react-toastify'

export default function Materia({ nome }: { nome: string }) {
	const [nota1, setNota1] = useState<number>(0)
	const [nota2, setNota2] = useState<number>(0)
	const [nota3, setNota3] = useState<number>(0)
	const [mediaFinal, setMediaFinal] = useState<number>(0)

	useEffect(() => {
		checkInvalid(nota1, setNota1)
		checkInvalid(nota2, setNota2)
		checkInvalid(nota3, setNota3)
		setMediaFinal((nota1 + 2 * nota2 + 3 * nota3) / 6)
	}, [nota1, nota2, nota3])

	return (
		<div className={styles.materiaWrapper}>
			<label className={styles.mediaFinal}>
				<h2>{nome}</h2>
				<span id='mediaFinal'>{mediaFinal.toFixed(2)}</span>
			</label>
			<div className={styles.inputs}>
				<div className={styles.input}>
					<label>
						Nota do 1º tri:
						<input
							type='number'
							maxLength={4}
							value={nota1}
							onChange={(e) => {
								setNota1(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</label>
				</div>
				<div className={styles.input}>
					<label>
						Nota do 2º tri:
						<input
							type='number'
							maxLength={4}
							value={nota2}
							onChange={(e) => {
								setNota2(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</label>
				</div>
				<div className={styles.input}>
					<label>
						Nota do 3º tri:
						<input
							type='number'
							maxLength={4}
							value={nota3}
							onChange={(e) => {
								setNota3(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</label>
				</div>
			</div>
		</div>
	)

	function checkInvalid(nota: number, setNota: (nota: number) => void) {
		if (nota < 0 || nota > 10) {
			setNota(0)
			toast.warn('Favor digite apenas valores entre 0 e 10')
		}
	}
}
