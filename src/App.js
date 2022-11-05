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
import { getProfileData } from './utils/api';

function App() {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoginError, setIsLoginError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [profileData, setProfileData] = useState(null);

	useEffect(() => {
		if (!sessionStorage.bearerToken) {
			return;
		}

		const authorization = { headers: { Authorization: sessionStorage.bearerToken } };
		getProfileData(authorization)
			.then(({ data }) => {
				setIsSignedUp(true);
				setIsLoggedIn(true);
				setProfileData(data)
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
				/>} />
				<Route path='/login' element={<LoginPage
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					isSignedUp={isSignedUp}
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
				/>}
				/>
				<Route path='/add-user' element={<AddUserForm
					isSignedUp={isSignedUp}
					setIsSignedUp={setIsSignedUp}
				/>} />

				<Route path='/add-league' element={<AddLeagueForm
					isLoggedIn={isLoggedIn}
					profileData={profileData}
				/>} />


			</Routes>
			<PageFooter />

		</BrowserRouter>
	);
}

export default App;
