import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import Main from './pages/Main'
import MediaUnica from './pages/Media'
import MediaGeral from './pages/Geral'
import Gpafinal from './pages/GPA'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					key='main'
					element={<Main />}
				/>
				<Route
					key='mediaunica'
					path='mediaunica'
					element={<MediaUnica />}
				/>
				<Route
					key='mediageral'
					path='mediageral'
					element={<MediaGeral />}
				/>
				<Route
					key='gpa'
					path='gpa'
					element={<Gpafinal />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
