import { useState } from 'react'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'
import styles from './styles.module.scss'

export default function Geral1Ano() {
	function Gradeless() {
		const [
			notaPrimeiroTrimestrePortugues,
			setNotaPrimeiroTrimestrePortugues
		] = useState('')
		const [
			notaSegundoTrimestrePortugues,
			setNotaSegundoTrimestrePortugues
		] = useState('')
		const [
			notaTerceiroTrimestrePortugues,
			setNotaTerceiroTrimestrePortugues
		] = useState('')
		const mediaFinalPortugues =
			(3 * parseFloat(notaTerceiroTrimestrePortugues) +
				2 * parseFloat(notaSegundoTrimestrePortugues) +
				parseFloat(notaPrimeiroTrimestrePortugues)) /
				6 || 0

		const [
			notaPrimeiroTrimestreProducaoTextual,
			setNotaPrimeiroTrimestreProducaoTextual
		] = useState('')
		const [
			notaSegundoTrimestreProducaoTextual,
			setNotaSegundoTrimestreProducaoTextual
		] = useState('')
		const [
			notaTerceiroTrimestreProducaoTextual,
			setNotaTerceiroTrimestreProducaoTextual
		] = useState('')
		const mediaFinalProducaoTextual =
			(3 * parseFloat(notaTerceiroTrimestreProducaoTextual) +
				2 * parseFloat(notaSegundoTrimestreProducaoTextual) +
				parseFloat(notaPrimeiroTrimestreProducaoTextual)) /
				6 || 0

		const [
			notaPrimeiroTrimestreLiteratura,
			setNotaPrimeiroTrimestreLiteratura
		] = useState('')
		const [
			notaSegundoTrimestreLiteratura,
			setNotaSegundoTrimestreLiteratura
		] = useState('')
		const [
			notaTerceiroTrimestreLiteratura,
			setNotaTerceiroTrimestreLiteratura
		] = useState('')
		const mediaFinalLiteratura =
			(3 * parseFloat(notaTerceiroTrimestreLiteratura) +
				2 * parseFloat(notaSegundoTrimestreLiteratura) +
				parseFloat(notaPrimeiroTrimestreLiteratura)) /
				6 || 0

		const [notaPrimeiroTrimestreArtes, setNotaPrimeiroTrimestreArtes] =
			useState('')
		const [notaSegundoTrimestreArtes, setNotaSegundoTrimestreArtes] =
			useState('')
		const [notaTerceiroTrimestreArtes, setNotaTerceiroTrimestreArtes] =
			useState('')
		const mediaFinalArtes =
			(3 * parseFloat(notaTerceiroTrimestreArtes) +
				2 * parseFloat(notaSegundoTrimestreArtes) +
				parseFloat(notaPrimeiroTrimestreArtes)) /
				6 || 0

		const [
			notaPrimeiroTrimestreEducacaoFisica,
			setNotaPrimeiroTrimestreEducacaoFisica
		] = useState('')
		const [
			notaSegundoTrimestreEducacaoFisica,
			setNotaSegundoTrimestreEducacaoFisica
		] = useState('')
		const [
			notaTerceiroTrimestreEducacaoFisica,
			setNotaTerceiroTrimestreEducacaoFisica
		] = useState('')
		const mediaFinalEducacaoFisica =
			(3 * parseFloat(notaTerceiroTrimestreEducacaoFisica) +
				2 * parseFloat(notaSegundoTrimestreEducacaoFisica) +
				parseFloat(notaPrimeiroTrimestreEducacaoFisica)) /
				6 || 0

		const [notaPrimeiroTrimestreIngles, setNotaPrimeiroTrimestreIngles] =
			useState('')
		const [notaSegundoTrimestreIngles, setNotaSegundoTrimestreIngles] =
			useState('')
		const [notaTerceiroTrimestreIngles, setNotaTerceiroTrimestreIngles] =
			useState('')
		const mediaFinalIngles =
			(3 * parseFloat(notaTerceiroTrimestreIngles) +
				2 * parseFloat(notaSegundoTrimestreIngles) +
				parseFloat(notaPrimeiroTrimestreIngles)) /
				6 || 0

		const [notaPrimeiroTrimestreAlemao, setNotaPrimeiroTrimestreAlemao] =
			useState('')
		const [notaSegundoTrimestreAlemao, setNotaSegundoTrimestreAlemao] =
			useState('')
		const [notaTerceiroTrimestreAlemao, setNotaTerceiroTrimestreAlemao] =
			useState('')
		const mediaFinalAlemao =
			(3 * parseFloat(notaTerceiroTrimestreAlemao) +
				2 * parseFloat(notaSegundoTrimestreAlemao) +
				parseFloat(notaPrimeiroTrimestreAlemao)) /
				6 || 0

		const [
			notaPrimeiroTrimestreHistoria,
			setNotaPrimeiroTrimestreHistoria
		] = useState('')
		const [notaSegundoTrimestreHistoria, setNotaSegundoTrimestreHistoria] =
			useState('')
		const [
			notaTerceiroTrimestreHistoria,
			setNotaTerceiroTrimestreHistoria
		] = useState('')
		const mediaFinalHistoria =
			(3 * parseFloat(notaTerceiroTrimestreHistoria) +
				2 * parseFloat(notaSegundoTrimestreHistoria) +
				parseFloat(notaPrimeiroTrimestreHistoria)) /
				6 || 0

		const [
			notaPrimeiroTrimestreGeografia,
			setNotaPrimeiroTrimestreGeografia
		] = useState('')
		const [
			notaSegundoTrimestreGeografia,
			setNotaSegundoTrimestreGeografia
		] = useState('')
		const [
			notaTerceiroTrimestreGeografia,
			setNotaTerceiroTrimestreGeografia
		] = useState('')
		const mediaFinalGeografia =
			(3 * parseFloat(notaTerceiroTrimestreGeografia) +
				2 * parseFloat(notaSegundoTrimestreGeografia) +
				parseFloat(notaPrimeiroTrimestreGeografia)) /
				6 || 0

		const [
			notaPrimeiroTrimestreFilosofia,
			setNotaPrimeiroTrimestreFilosofia
		] = useState('')
		const [
			notaSegundoTrimestreFilosofia,
			setNotaSegundoTrimestreFilosofia
		] = useState('')
		const [
			notaTerceiroTrimestreFilosofia,
			setNotaTerceiroTrimestreFilosofia
		] = useState('')
		const mediaFinalFilosofia =
			(3 * parseFloat(notaTerceiroTrimestreFilosofia) +
				2 * parseFloat(notaSegundoTrimestreFilosofia) +
				parseFloat(notaPrimeiroTrimestreFilosofia)) /
				6 || 0

		const [
			notaPrimeiroTrimestreSociologia,
			setNotaPrimeiroTrimestreSociologia
		] = useState('')
		const [
			notaSegundoTrimestreSociologia,
			setNotaSegundoTrimestreSociologia
		] = useState('')
		const [
			notaTerceiroTrimestreSociologia,
			setNotaTerceiroTrimestreSociologia
		] = useState('')
		const mediaFinalSociologia =
			(3 * parseFloat(notaTerceiroTrimestreSociologia) +
				2 * parseFloat(notaSegundoTrimestreSociologia) +
				parseFloat(notaPrimeiroTrimestreSociologia)) /
				6 || 0

		const [
			notaPrimeiroTrimestreAtualidades,
			setNotaPrimeiroTrimestreAtualidades
		] = useState('')
		const [
			notaSegundoTrimestreAtualidades,
			setNotaSegundoTrimestreAtualidades
		] = useState('')
		const [
			notaTerceiroTrimestreAtualidades,
			setNotaTerceiroTrimestreAtualidades
		] = useState('')
		const mediaFinalAtualidades =
			(3 * parseFloat(notaTerceiroTrimestreAtualidades) +
				2 * parseFloat(notaSegundoTrimestreAtualidades) +
				parseFloat(notaPrimeiroTrimestreAtualidades)) /
				6 || 0

		const [notaPrimeiroTrimestreFisica, setNotaPrimeiroTrimestreFisica] =
			useState('')
		const [notaSegundoTrimestreFisica, setNotaSegundoTrimestreFisica] =
			useState('')
		const [notaTerceiroTrimestreFisica, setNotaTerceiroTrimestreFisica] =
			useState('')
		const mediaFinalFisica =
			(3 * parseFloat(notaTerceiroTrimestreFisica) +
				2 * parseFloat(notaSegundoTrimestreFisica) +
				parseFloat(notaPrimeiroTrimestreFisica)) /
				6 || 0

		const [notaPrimeiroTrimestreQuimica, setNotaPrimeiroTrimestreQuimica] =
			useState('')
		const [notaSegundoTrimestreQuimica, setNotaSegundoTrimestreQuimica] =
			useState('')
		const [notaTerceiroTrimestreQuimica, setNotaTerceiroTrimestreQuimica] =
			useState('')
		const mediaFinalQuimica =
			(3 * parseFloat(notaTerceiroTrimestreQuimica) +
				2 * parseFloat(notaSegundoTrimestreQuimica) +
				parseFloat(notaPrimeiroTrimestreQuimica)) /
				6 || 0

		const [
			notaPrimeiroTrimestreBiologia,
			setNotaPrimeiroTrimestreBiologia
		] = useState('')
		const [notaSegundoTrimestreBiologia, setNotaSegundoTrimestreBiologia] =
			useState('')
		const [
			notaTerceiroTrimestreBiologia,
			setNotaTerceiroTrimestreBiologia
		] = useState('')
		const mediaFinalBiologia =
			(3 * parseFloat(notaTerceiroTrimestreBiologia) +
				2 * parseFloat(notaSegundoTrimestreBiologia) +
				parseFloat(notaPrimeiroTrimestreBiologia)) /
				6 || 0

		const [
			notaPrimeiroTrimestreMatematica,
			setNotaPrimeiroTrimestreMatematica
		] = useState('')
		const [
			notaSegundoTrimestreMatematica,
			setNotaSegundoTrimestreMatematica
		] = useState('')
		const [
			notaTerceiroTrimestreMatematica,
			setNotaTerceiroTrimestreMatematica
		] = useState('')
		const mediaFinalMatematica =
			(3 * parseFloat(notaTerceiroTrimestreMatematica) +
				2 * parseFloat(notaSegundoTrimestreMatematica) +
				parseFloat(notaPrimeiroTrimestreMatematica)) /
				6 || 0

		const mediaFinalGeral =
			(mediaFinalPortugues +
				mediaFinalProducaoTextual +
				mediaFinalLiteratura +
				mediaFinalArtes +
				mediaFinalEducacaoFisica +
				mediaFinalIngles +
				mediaFinalAlemao +
				mediaFinalHistoria +
				mediaFinalGeografia +
				mediaFinalFilosofia +
				mediaFinalSociologia +
				mediaFinalAtualidades +
				mediaFinalFisica +
				mediaFinalQuimica +
				mediaFinalBiologia +
				mediaFinalMatematica) /
				16 || 0

		const materias = [
			{
				key: '1',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Português</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestrePortugues}
									onChange={(e) =>
										setNotaPrimeiroTrimestrePortugues(
											e.target.value.replace(',', '.')
										)
									}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestrePortugues}
									onChange={(e) => {
										setNotaSegundoTrimestrePortugues(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestrePortugues}
									onChange={(e) => {
										setNotaTerceiroTrimestrePortugues(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalPortugues.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '2',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Produção Textual</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreProducaoTextual}
									onChange={(e) => {
										setNotaPrimeiroTrimestreProducaoTextual(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreProducaoTextual}
									onChange={(e) => {
										setNotaSegundoTrimestreProducaoTextual(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreProducaoTextual}
									onChange={(e) => {
										setNotaTerceiroTrimestreProducaoTextual(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalProducaoTextual.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '3',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Literatura</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreLiteratura}
									onChange={(e) => {
										setNotaPrimeiroTrimestreLiteratura(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreLiteratura}
									onChange={(e) => {
										setNotaSegundoTrimestreLiteratura(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreLiteratura}
									onChange={(e) => {
										setNotaTerceiroTrimestreLiteratura(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalLiteratura.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '4',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Artes</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreArtes}
									onChange={(e) => {
										setNotaPrimeiroTrimestreArtes(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreArtes}
									onChange={(e) => {
										setNotaSegundoTrimestreArtes(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreArtes}
									onChange={(e) => {
										setNotaTerceiroTrimestreArtes(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalArtes.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '5',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Educação Física</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreEducacaoFisica}
									onChange={(e) => {
										setNotaPrimeiroTrimestreEducacaoFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreEducacaoFisica}
									onChange={(e) => {
										setNotaSegundoTrimestreEducacaoFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreEducacaoFisica}
									onChange={(e) => {
										setNotaTerceiroTrimestreEducacaoFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalEducacaoFisica.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '6',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Inglês</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreIngles}
									onChange={(e) => {
										setNotaPrimeiroTrimestreIngles(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreIngles}
									onChange={(e) => {
										setNotaSegundoTrimestreIngles(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreIngles}
									onChange={(e) => {
										setNotaTerceiroTrimestreIngles(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalIngles.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '7',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Alemão/Espanhol</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreAlemao}
									onChange={(e) => {
										setNotaPrimeiroTrimestreAlemao(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreAlemao}
									onChange={(e) => {
										setNotaSegundoTrimestreAlemao(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreAlemao}
									onChange={(e) => {
										setNotaTerceiroTrimestreAlemao(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalAlemao.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '8',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>História</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreHistoria}
									onChange={(e) => {
										setNotaPrimeiroTrimestreHistoria(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreHistoria}
									onChange={(e) => {
										setNotaSegundoTrimestreHistoria(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreHistoria}
									onChange={(e) => {
										setNotaTerceiroTrimestreHistoria(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalHistoria.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '9',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Geografia</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreGeografia}
									onChange={(e) => {
										setNotaPrimeiroTrimestreGeografia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreGeografia}
									onChange={(e) => {
										setNotaSegundoTrimestreGeografia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreGeografia}
									onChange={(e) => {
										setNotaTerceiroTrimestreGeografia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalGeografia.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '10',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Filosofia</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreFilosofia}
									onChange={(e) => {
										setNotaPrimeiroTrimestreFilosofia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreFilosofia}
									onChange={(e) => {
										setNotaSegundoTrimestreFilosofia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreFilosofia}
									onChange={(e) => {
										setNotaTerceiroTrimestreFilosofia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalFilosofia.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '11',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Sociologia</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreSociologia}
									onChange={(e) => {
										setNotaPrimeiroTrimestreSociologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreSociologia}
									onChange={(e) => {
										setNotaSegundoTrimestreSociologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreSociologia}
									onChange={(e) => {
										setNotaTerceiroTrimestreSociologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalSociologia.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '12',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Atualidades</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreAtualidades}
									onChange={(e) => {
										setNotaPrimeiroTrimestreAtualidades(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreAtualidades}
									onChange={(e) => {
										setNotaSegundoTrimestreAtualidades(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreAtualidades}
									onChange={(e) => {
										setNotaTerceiroTrimestreAtualidades(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalAtualidades.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '13',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Física</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreFisica}
									onChange={(e) => {
										setNotaPrimeiroTrimestreFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreFisica}
									onChange={(e) => {
										setNotaSegundoTrimestreFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreFisica}
									onChange={(e) => {
										setNotaTerceiroTrimestreFisica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalFisica.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '14',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Química</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreQuimica}
									onChange={(e) => {
										setNotaPrimeiroTrimestreQuimica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreQuimica}
									onChange={(e) => {
										setNotaSegundoTrimestreQuimica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreQuimica}
									onChange={(e) => {
										setNotaTerceiroTrimestreQuimica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalQuimica.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '15',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Biologia</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreBiologia}
									onChange={(e) => {
										setNotaPrimeiroTrimestreBiologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreBiologia}
									onChange={(e) => {
										setNotaSegundoTrimestreBiologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreBiologia}
									onChange={(e) => {
										setNotaTerceiroTrimestreBiologia(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalBiologia.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '16',
				content: (
					<div style={{ alignItems: 'center', paddingTop: 30 }}>
						<h2 className={styles.materia}>Matemática</h2>
						<div className={styles.inputWrapper}>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 1º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaPrimeiroTrimestreMatematica}
									onChange={(e) => {
										setNotaPrimeiroTrimestreMatematica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 2º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaSegundoTrimestreMatematica}
									onChange={(e) => {
										setNotaSegundoTrimestreMatematica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
							<div className={styles.input}>
								<h3 className={styles.label}>
									Nota do 3º tri:{' '}
								</h3>
								<input
									type='number'
									className={styles.textInput}
									maxLength={4}
									value={notaTerceiroTrimestreMatematica}
									onChange={(e) => {
										setNotaTerceiroTrimestreMatematica(
											e.target.value.replace(',', '.')
										)
									}}
								/>
							</div>
						</div>
						<div className={styles.results}>
							<div className={styles.wrapperNotaFinal}>
								<h2 className={styles.notaFinal}>
									{mediaFinalMatematica.toFixed(2)}
								</h2>
							</div>
						</div>
					</div>
				)
			},
			{
				key: '17',
				content: (
					<div className={styles.results}>
						<h2 className={styles.materia}>Média Final Geral</h2>
						<div className={styles.wrapperNotaFinal}>
							<h2 className={styles.notaFinal}>
								{parseFloat(mediaFinalGeral.toFixed(2))}
							</h2>
						</div>
					</div>
				)
			}
		]

		return (
			<div style={{ overflowY: 'scroll' }}>
				{materias.map((materia) => (
					<>{materia.content}</>
				))}
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<Title title='Média 1º ano' />
			<Gradeless />
			<Voltar />
		</div>
	)
}
