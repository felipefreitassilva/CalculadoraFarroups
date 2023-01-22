import Title from '../../components/Title'
import Media from './Media'
import Voltar from '../../components/Voltar'
import styles from './styles.module.scss'

export default function Media8() {
	return (
		<div className={styles.container}>
			<Title title='Média 8' />
			<Media />
			<Voltar />
		</div>
	)
}
