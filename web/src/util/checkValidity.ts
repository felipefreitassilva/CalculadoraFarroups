import { toast } from 'react-toastify'
export default function checkValidity(
	nota: number,
	setNota: (nota: number) => void
) {
	if (nota < 0 || nota > 10 || isNaN(nota)) {
		setNota(0)
		toast.warn('Favor digite apenas valores entre 0 e 10')
	}
}
