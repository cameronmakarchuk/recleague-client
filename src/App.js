import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import HomePage from './pages/HomePage/HomePage';
import AllLeaguesPage from './pages/AllLeaguesPage/AllLeaguesPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import AddUserForm from './components/AddUserForm/AddUserForm';

function App() {
	return (
		<BrowserRouter>
			<PageHeader />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/all-leagues' element={<AllLeaguesPage />} />
				<Route path='/search-results' element={<SearchResultsPage />} />



				{/* Delete this route after set up */}
				<Route path='/league-details' element={<LeagueDetails />} />
				<Route path='/add-user' element={<AddUserForm />} />


			</Routes>
			<PageFooter />

		</BrowserRouter>
	);
}

export default App;
