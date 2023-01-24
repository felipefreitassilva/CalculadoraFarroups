import styles from './styles.module.scss'
export default function Button({
	value,
	active,
	onClick,
	text
}: {
	value: number
	active: boolean
	onClick: () => void
	text?: string
}) {
	return (
		<button
			className={`${styles.button} ${active ? styles.active : ''}`}
			onClick={onClick}
		>
			{value}
			{text}
		</button>
	)
}
