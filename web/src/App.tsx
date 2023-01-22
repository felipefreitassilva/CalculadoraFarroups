import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import Main from './pages/Main'

import Medias from './pages/Medias/Medias'
import Media6 from './pages/Medias/Media6'
import Media8 from './pages/Medias/Media8'
import Media9 from './pages/Medias/Media9'

import GPrompt from './Geral/Prompt'
import Geral9Ano from './Geral/Geral9Ano'
import Geral1Ano from './Geral/Geral1Ano'
import Geral2Ano from './Geral/Geral2Ano'
import Geral3Ano from './Geral/Geral3Ano'

import Prompt from './GPA/Prompt'
import Media9Ano from './GPA/Media9Ano'
import Media1Ano from './GPA/Media1Ano'
import Media2Ano from './GPA/Media2Ano'
import Media3Ano from './GPA/Media3Ano'
import Gpafinal from './GPA/Gpafinal'

export default function App() {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route
						index
						key='Main'
						element={<Main />}
					/>
					<Route
						key='Medias'
						path='Medias'
						element={<Medias />}
					/>
					<Route
						key='Media6'
						path='medias/media6'
						element={<Media6 />}
					/>
					<Route
						key='Media8'
						path='medias/media8'
						element={<Media8 />}
					/>
					<Route
						key='Media9'
						path='medias/media9'
						element={<Media9 />}
					/>
					<Route
						key='GPrompt'
						path='gPrompt'
						element={<GPrompt />}
					/>
					<Route
						key='geral9ano'
						path='gprompt/geral9ano'
						element={<Geral9Ano />}
					/>
					<Route
						key='geral1ano'
						path='gprompt/geral1ano'
						element={<Geral1Ano />}
					/>
					<Route
						key='geral2ano'
						path='gprompt/geral2ano'
						element={<Geral2Ano />}
					/>
					<Route
						key='geral3ano'
						path='gprompt/geral3ano'
						element={<Geral3Ano />}
					/>
					<Route
						key='Prompt'
						path='prompt'
						element={<Prompt />}
					/>
					<Route
						key='media9ano'
						path='prompt/media9ano'
						element={<Media9Ano />}
					/>
					<Route
						key='media1ano'
						path='prompt/media1ano'
						element={<Media1Ano />}
					/>
					<Route
						key='media2ano'
						path='prompt/media2ano'
						element={<Media2Ano />}
					/>
					<Route
						key='media3ano'
						path='prompt/media3ano'
						element={<Media3Ano />}
					/>
					<Route
						key='gpafinal'
						path='gpafinal'
						element={<Gpafinal />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

