import './LoginForm.scss';

export default function LoginForm({ handleLogin }) {


    return (
        <section className='login'>
            <h2 className='login__title'>Login</h2>

            <form className='login-form' onSubmit={handleLogin}>
                <label htmlFor='login_email' className='login-form__label'>Email Address</label>
                <input className='login-form__input' id='login_email' name='login_email' placeholder='Enter your email address...' />

                <label htmlFor='login_password' className='login-form__label'>Password</label>
                <input type='password' className='login-form__input' id='login_password' name='login_password' placeholder='Enter your password...' />

                <button type='submit' className='login-form__submit'>Login</button>
            </form>
        </section>
    )
}