import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
	return (
		<BrowserRouter>
			<PageHeader />
			<Routes>
				{/* <Route path='/' element='' /> */}

			</Routes>
			<PageFooter />

		</BrowserRouter>
	);
}

export default App;
