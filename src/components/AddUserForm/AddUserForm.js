import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createNewUser } from '../../utils/api';
import './AddUserForm.scss';


export default function AddUserForm() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [leagueOwner, setLeagueOwner] = useState(false);
    const [errObj, setErrObj] = useState({});

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleProvinceChange = (e) => setProvince(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const handlePostalChange = (e) => setPostal(e.target.value);
    const handleProfileImgChange = (e) => setProfileImg(e.target.files[0]);
    const handleLeagueOwnerChange = (e) => setLeagueOwner(e.target.value);

    const isFirstNameInvalid = () => !firstName;
    const isLastNameInvalid = () => !lastName;
    const isEmailInvalid = () => !email;
    const isPasswordInvalid = () => !password;
    const isAddressInvalid = () => !address;
    const isCityInvalid = () => !city;
    const isProvinceInvalid = () => !province;
    const isCountryInvalid = () => !country;
    const isPostalInvalid = () => !postal;

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const errObj = {
            firstName: isFirstNameInvalid(),
            lastName: isLastNameInvalid(),
            email: isEmailInvalid(),
            password: isPasswordInvalid(),
            address: isAddressInvalid(),
            city: isCityInvalid(),
            province: isProvinceInvalid(),
            country: isCountryInvalid(),
            postal: isPostalInvalid(),
        }

        const errVals = Object.values(errObj);
        const isFormInvalid = errVals.find(err => err === true);

        if (!isFormInvalid) {
            const formData = new FormData();

            formData.append('first_name', firstName)
            formData.append('last_name', lastName)
            formData.append('email', email)
            formData.append('address', address)
            formData.append('city', city)
            formData.append('province', province)
            formData.append('country', country)
            formData.append('postal_code', postal)
            formData.append('password', password)
            formData.append('avatar_img', profileImg)
            formData.append('is_league_owner', leagueOwner)

            createNewUser(formData)
                .then(() => {
                    navigate('/login');
                })
                .catch(err => alert(`Error adding new user profile: ${err}`));
        } else {
            setErrObj(errObj);
        }
    }


    return (

        <section className='add-user'>
            <h2 className='add-user__title'>Create Your Profile</h2>
            <Link to='/login' className='add-user__user-login'>Already signed up? Login here...</Link>

            <form className='add-user-form' onSubmit={handleSubmitClick}>

                <div className='add-user-form__wrapper'>
                    <div className='add-user-form__user-info'>

                        <label htmlFor='first_name' className='add-user-form__label'>First Name</label>
                        <input onChange={handleFirstNameChange} className='add-user-form__input' id='first_name' name='first_name' placeholder='Enter your first name...' />

                        <label htmlFor='last_name' className='add-user-form__label'>Last Name</label>
                        <input onChange={handleLastNameChange} className='add-user-form__input' id='last_name' name='last_name' placeholder='Enter your last name...' />

                        <label htmlFor='email' className='add-user-form__label'>Email</label>
                        <input onChange={handleEmailChange} type='email' className='add-user-form__input' id='email' name='email' placeholder='Enter your email...' />

                        <label htmlFor='password' className='add-user-form__label'>Password</label>
                        <input onChange={handlePasswordChange} type='password' className='add-user-form__input' id='password' name='password' placeholder='Enter a password...' />

                        <label htmlFor='avatar' className='add-user-form__label'>Profile Picture</label>
                        <input onChange={handleProfileImgChange} type='file' className='add-user-form__input' id='avatar' name='avatar' />

                    </div>
                    <div className='add-user-form__user-address'>

                        <label htmlFor='address' className='add-user-form__label'>Street Address</label>
                        <input onChange={handleAddressChange} className='add-user-form__input' id='address' name='address' placeholder='Enter your address...' />

                        <label htmlFor='city' className='add-user-form__label'>City</label>
                        <input onChange={handleCityChange} className='add-user-form__input' id='city' name='city' placeholder='Enter your city...' />

                        <label htmlFor='province' className='add-user-form__label'>Province</label>
                        <input onChange={handleProvinceChange} className='add-user-form__input' id='province' name='province' placeholder='Enter your province...' />

                        <label htmlFor='country' className='add-user-form__label'>Country</label>
                        <input onChange={handleCountryChange} className='add-user-form__input' id='country' name='country' placeholder='Enter your country...' />

                        <label htmlFor='postal_code' className='add-user-form__label'>Postal Code</label>
                        <input onChange={handlePostalChange} className='add-user-form__input' id='postal_code' name='postal_code' placeholder='Enter your postal code...' />

                    </div>
                </div>


                <div className='add-user-form__buttons'>
                    <Link to='/' className='add-user-form__button add-user-form__button--cancel'>Cancel</Link>
                    <button type='submit' className='add-user-form__button'>Submit</button>
                </div>
            </form>
        </section>
    )
}