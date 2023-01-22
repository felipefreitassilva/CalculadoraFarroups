import styles from './styles.module.scss'
import Media from './Media'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'

export default function Media6() {
	return (
		<div className={styles.container}>
			<Title title='Média 6' />
			<Media />
			<Voltar />
		</div>
	)
}
