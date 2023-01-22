import styles from './styles.module.scss'
import Media from './Media'
import Title from '../../components/Title'
import Voltar from '../../components/Voltar'

export default function Media8() {
	return (
		<div className={styles.container}>
			<Title title='Média 8' />
			<Media />
			<Voltar />
		</div>
	)
}
