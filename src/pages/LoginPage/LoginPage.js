import './LoginPage.scss';
import { loginUser } from '../../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage({ isLoggedIn, setIsLoggedIn, isSignedUp, setIsLoginError, setErrorMessage, setProfileData }) {

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.login_email.value;
        const password = e.target.login_password.value;
        loginUser({ email, password })
            .then((resp) => {
                if (resp.status === 403) {
                    setIsLoginError(true);
                    // setErrorMessage(resp.error.message);
                } else {
                    const bearerToken = resp.data.token;
                    sessionStorage.bearerToken = bearerToken;
                    setIsLoggedIn(true);
                    setIsLoginError(false);
                    setErrorMessage('');
                    setProfileData(resp.data.user);
                    navigate('/profile');
                }
            })
            .catch(err => alert(`Error logging in: ${err}`));
        e.target.reset();
    }

    // if (isLoggedIn) {
    //     return window.location.href = '/profile';
    // }

    return (
        <section className='login'>
            <h2 className='login__title'>Login</h2>

            {!isLoggedIn ? (
                <form className='login-form' onSubmit={handleLogin}>
                    <label htmlFor='login_email' className='login-form__label'>Email Address</label>
                    <input className='login-form__input' id='login_email' name='login_email' placeholder='Enter your email address...' />

                    <label htmlFor='login_password' className='login-form__label'>Password</label>
                    <input type='password' className='login-form__input' id='login_password' name='login_password' placeholder='Enter your password...' />

                    <button type='submit' className='login-form__submit'>Login</button>
                </form>
            ) : (
                <>
                    <p>You're currently logged in.</p>
                    <Link to='/profile'>View Your Profile</Link>
                </>
            )}


        </section>
    )
}