import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import HomePage from './pages/HomePage/HomePage';
import AllLeaguesPage from './pages/AllLeaguesPage/AllLeaguesPage';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import AddUserForm from './components/AddUserForm/AddUserForm';
import AddLeagueForm from './components/AddLeagueForm/AddLeagueForm';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { getProfileData, getLeaguesJoinedByUser } from './utils/api';
import EditLeague from './components/EditLeague/EditLeague';
import EditUser from './components/EditUser/EditUser';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoginError, setIsLoginError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [profileData, setProfileData] = useState(null);
	const [leaguesJoined, setLeaguesJoined] = useState([])


	useEffect(() => {
		if (!sessionStorage.bearerToken) {
			return;
		}
		console.log('in app use effect')
		const authorization = { headers: { Authorization: sessionStorage.bearerToken } };
		getProfileData(authorization)
			.then(({ data }) => {
				setIsLoggedIn(true);
				setProfileData(data)
				return getLeaguesJoinedByUser(profileData.id_user);
			})
			.then(({ data }) => {
				setLeaguesJoined(data);
			})
			.catch(err => setErrorMessage(err.message))
	}, [])

	return (
		<BrowserRouter>
			<PageHeader isLoggedIn={isLoggedIn} />
			<Routes>
				<Route path='/' element={<HomePage />} />


				<Route path='/all-leagues' element={<AllLeaguesPage />} />
				<Route path='/leagues/:leagueId' element={<LeagueDetails
					isLoggedIn={isLoggedIn}
					profileData={profileData}
					leaguesJoined={leaguesJoined}
				/>} />
				<Route path='/login' element={<LoginPage
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					isLoginError={isLoginError}
					setIsLoginError={setIsLoginError}
					setErrorMessage={setErrorMessage}
					setProfileData={setProfileData}
				/>} />
				<Route path='/profile' element={<ProfilePage
					isLoggedIn={isLoggedIn}
					profileData={profileData}
					setProfileData={setProfileData}
					errorMessage={errorMessage}
					leaguesJoined={leaguesJoined}
				/>}
				/>
				<Route path='/add-user' element={<AddUserForm />} />

				<Route path='/edit-user/:userId' element={<EditUser />} />

				<Route path='/add-league' element={<AddLeagueForm
					isLoggedIn={isLoggedIn}
					profileData={profileData}
				/>} />

				<Route path='/edit-league/:leagueId' element={<EditLeague
					isLoggedIn={isLoggedIn}
					profileData={profileData}
				/>} />



			</Routes>
			<PageFooter />

		</BrowserRouter>
	);
}

export default App;
