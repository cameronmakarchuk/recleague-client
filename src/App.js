import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
	return (
		<BrowserRouter>
			<PageHeader />
			<Routes>
				{/* <Route path='/' element='' /> */}

			</Routes>

		</BrowserRouter>
	);
}

export default App;
