import './ProfilePage.scss';
import avatarPlaceholder from '../../assets/images/Mohan-muruge.jpg'
import LoginForm from '../../components/LoginForm/LoginForm';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import { useState } from 'react';
import { getProfileData, loginUser } from '../../utils/api';
import { useEffect } from 'react';


export default function ProfilePage() {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const authorization = { headers: { Authorization: sessionStorage.bearerToken } };
        getProfileData(authorization)
            .then(({ data }) => {
                setIsLoggedIn(true);
                setIsAuthenticating(false);
                setProfileData(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.login_email.value;
        const password = e.target.login_password.value;
        loginUser({ email, password })
            .then((resp) => {
                if (resp.status === 403) {
                    setIsLoginError(true);
                    setErrorMessage(resp.error.message);
                } else {
                    const bearerToken = resp.data.token;
                    sessionStorage.bearerToken = bearerToken;
                    setIsLoggedIn(true);
                    setIsAuthenticating(false);
                    setIsLoginError(false);
                    setErrorMessage('');
                    setProfileData(resp.data.user);
                }
            })
            .catch(err => alert(`Error logging in: ${err}`));
        e.target.reset();
    }

    if (!isLoggedIn) return <LoginForm handleLogin={handleLogin} />;
    if (isAuthenticating) return <p>Loading...</p>;

    return (

        <section className='profile'>

            {profileData && (
                <>
                    <h2 className='profile__title'>{profileData.first_name} {profileData.last_name}</h2>

                    <img src={avatarPlaceholder} className='profile__avatar' alt='profile avatar' />

                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Email: </span>{profileData.email} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Street Address: </span>{profileData.address} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>City: </span>{profileData.city} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Province: </span>{profileData.province} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Country: </span>{profileData.country} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Postal Code: </span>{profileData.postal_code} </p>
                    <p className='profile__text'><span className='profile__text profile__text--emphasis'>Leagues Managed: </span></p>
                </>
            )}

        </section>
    )

}