import './ProfilePage.scss';
import avatarPlaceholder from '../../assets/images/Mohan-muruge.jpg'
import LoginForm from '../../components/LoginForm/LoginForm';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import { useState } from 'react';
import { loginUser } from '../../utils/api';


export default function ProfilePage() {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [profileData, setProfileData] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.login_email.value;
        const password = e.target.login_password.value;
        loginUser({ email, password })
            .then(resp => {
                console.log(resp);
            })
            .catch(err => alert(`Error loggin in: ${err}`));
    }


    if (!isLoggedIn) return <LoginForm handleLogin={handleLogin} />

    return (
        <section className='profile'>
            <h2 className='profile__title'>First Name Last Name</h2>

            <img src={avatarPlaceholder} className='profile__avatar' alt='profile avatar' />

            <p className='profile__text'>Email: </p>
            <p className='profile__text'>Street Address: </p>
            <p className='profile__text'>City: </p>
            <p className='profile__text'>Province: </p>
            <p className='profile__text'>Country: </p>
            <p className='profile__text'>Postal Code: </p>
            <p className='profile__text'>Leagues Managed: </p>
        </section>
    )
}