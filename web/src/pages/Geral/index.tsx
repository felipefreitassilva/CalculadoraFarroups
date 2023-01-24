import { useState } from 'react'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import { IMateria } from '../../types/Materias'
import styles from './styles.module.scss'

export default function MediaGeral() {
	return (
		<div className={`container ${styles.container}`}>
			<Title title='Média Geral' />
			<Materia
				nome='Português'
				nota1={0}
				setNota1={() => {}}
				nota2={0}
				setNota2={() => {}}
				nota3={0}
				setNota3={() => {}}
			/>
			<Voltar />
		</div>
	)

	function Materia(props: IMateria) {
		const { nome, nota1, setNota1, nota2, setNota2, nota3, setNota3 } =
			props
		const mediaFinal = (nota1 + 2 * nota2 + 3 * nota3) / 6

		return (
			<div style={{ alignItems: 'center', paddingTop: 30 }}>
				<h2 className={styles.materia}>{nome}</h2>
				<div className={styles.inputWrapper}>
					<div className={styles.input}>
						<h3 className={styles.label}>Nota do 1º tri: </h3>
						<input
							type='number'
							className={styles.textInput}
							maxLength={4}
							value={nota1}
							onChange={(e) => {
								setNota1(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</div>
					<div className={styles.input}>
						<h3 className={styles.label}>Nota do 2º tri: </h3>
						<input
							type='number'
							className={styles.textInput}
							maxLength={4}
							value={nota2}
							onChange={(e) => {
								setNota2(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</div>
					<div className={styles.input}>
						<h3 className={styles.label}>Nota do 3º tri: </h3>
						<input
							type='number'
							className={styles.textInput}
							maxLength={4}
							value={nota3}
							onChange={(e) => {
								setNota3(
									parseFloat(e.target.value.replace(',', '.'))
								)
							}}
						/>
					</div>
				</div>
				<div className={styles.results}>
					<div className={styles.wrapperNotaFinal}>
						<h2 className={styles.notaFinal}>
							{mediaFinal.toFixed(2)}
						</h2>
					</div>
				</div>
			</div>
		)
	}
}
