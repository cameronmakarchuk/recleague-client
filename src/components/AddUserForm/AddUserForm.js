import './AddUserForm.scss';


export default function AddUserForm() {


    return (

        <section className='add-user'>
            <h2 className='add-user__title'>Create Your Profile</h2>

            <form className='add-user-form'>

                <label htmlFor='first_name' className='add-user-form__label'>First Name</label>
                <input className='add-user-form__input' id='first_name' name='first_name' placeholder='Enter your first name...' />

                <label htmlFor='last_name' className='add-user-form__label'>Last Name</label>
                <input className='add-user-form__input' id='last_name' name='last_name' placeholder='Enter your last name...' />

                <label htmlFor='email' className='add-user-form__label'>Email</label>
                <input className='add-user-form__input' id='email' name='email' placeholder='Enter your email...' />

                <label htmlFor='password' className='add-user-form__label'>Password</label>
                <input type='password' className='add-user-form__input' id='password' name='password' placeholder='Enter a password...' />

                <label htmlFor='address' className='add-user-form__label'>Street Address</label>
                <input className='add-user-form__input' id='address' name='address' placeholder='Enter your address...' />

                <label htmlFor='city' className='add-user-form__label'>City</label>
                <input className='add-user-form__input' id='city' name='city' placeholder='Enter your city...' />

                <label htmlFor='province' className='add-user-form__label'>Province</label>
                <input className='add-user-form__input' id='province' name='province' placeholder='Enter your province...' />

                <label htmlFor='country' className='add-user-form__label'>Country</label>
                <input className='add-user-form__input' id='country' name='country' placeholder='Enter your country...' />

                <label htmlFor='postal_code' className='add-user-form__label'>Postal Code</label>
                <input className='add-user-form__input' id='postal_code' name='postal_code' placeholder='Enter your postal code...' />

                <label htmlFor='avatar' className='add-user-form__label'>Profile Picture</label>
                <input type='file' className='add-user-form__input' id='avatar' name='avatar' />

                <button type='submit' className='add-user-form__submit'>Submit</button>

            </form>
        </section>
    )
}