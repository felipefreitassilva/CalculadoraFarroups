import Title from '../../components/Title'
import Media from './Media'
import Voltar from '../../components/Voltar'
import styles from './styles.module.scss'

export default function Media9() {
	return (
		<div className={styles.container}>
			<Title title='Média 9' />
			<Media />
			<Voltar />
		</div>
	)
}
