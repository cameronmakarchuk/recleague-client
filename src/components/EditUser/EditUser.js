import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { editUserById, getUserById } from '../../utils/api';
import '../AddUserForm/AddUserForm.scss';


export default function EditUser({ setProfileData }) {
    const navigate = useNavigate();
    const { userId } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
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

    const isFirstNameInvalid = () => !firstName;
    const isLastNameInvalid = () => !lastName;
    const isEmailInvalid = () => !email;
    const isPasswordInvalid = () => !password;
    const isAddressInvalid = () => !address;
    const isCityInvalid = () => !city;
    const isProvinceInvalid = () => !province;
    const isCountryInvalid = () => !country;
    const isPostalInvalid = () => !postal;

    useEffect(() => {
        getUserById(userId)
            .then(({ data }) => {
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setPassword(data.password);
                setAddress(data.address);
                setCity(data.city);
                setProvince(data.province);
                setCountry(data.country);
                setPostal(data.postal_code);
            })
            .catch(err => alert(`Error retrieving user: ${err}`))
    }, [])



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
            const editedUser = {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                address,
                city,
                province,
                country,
                postal_code: postal
            }

            editUserById(userId, editedUser)
                .then(() => {
                    return getUserById(userId)
                })
                .then(({ data }) => setProfileData(data))
                .catch(err => alert(`Error editing your user profile: ${err}`));
            navigate('/profile');
        } else {
            setErrObj(errObj);
        }
    }


    return (

        <section className='add-user'>
            <h2 className='add-user__title'>Edit Your Profile</h2>

            <form className='add-user-form' onSubmit={handleSubmitClick}>

                <div className='add-user-form__wrapper'>
                    <div className='add-user-form__user-info'>

                        <label htmlFor='first_name' className='add-user-form__label'>First Name</label>
                        <input value={firstName} onChange={handleFirstNameChange} className='add-user-form__input' id='first_name' name='first_name' placeholder='Enter your first name...' />

                        <label htmlFor='last_name' className='add-user-form__label'>Last Name</label>
                        <input value={lastName} onChange={handleLastNameChange} className='add-user-form__input' id='last_name' name='last_name' placeholder='Enter your last name...' />

                        <label htmlFor='email' className='add-user-form__label'>Email</label>
                        <input value={email} onChange={handleEmailChange} type='email' className='add-user-form__input' id='email' name='email' placeholder='Enter your email...' />

                        <label htmlFor='password' className='add-user-form__label'>Password</label>
                        <input value={password} onChange={handlePasswordChange} type='password' className='add-user-form__input' id='password' name='password' placeholder='Enter a password...' />

                    </div>
                    <div className='add-user-form__user-address'>

                        <label htmlFor='address' className='add-user-form__label'>Street Address</label>
                        <input value={address} onChange={handleAddressChange} className='add-user-form__input' id='address' name='address' placeholder='Enter your address...' />

                        <label htmlFor='city' className='add-user-form__label'>City</label>
                        <input value={city} onChange={handleCityChange} className='add-user-form__input' id='city' name='city' placeholder='Enter your city...' />

                        <label htmlFor='province' className='add-user-form__label'>Province</label>
                        <input value={province} onChange={handleProvinceChange} className='add-user-form__input' id='province' name='province' placeholder='Enter your province...' />

                        <label htmlFor='country' className='add-user-form__label'>Country</label>
                        <input value={country} onChange={handleCountryChange} className='add-user-form__input' id='country' name='country' placeholder='Enter your country...' />

                        <label htmlFor='postal_code' className='add-user-form__label'>Postal Code</label>
                        <input value={postal} onChange={handlePostalChange} className='add-user-form__input' id='postal_code' name='postal_code' placeholder='Enter your postal code...' />

                    </div>
                </div>


                <div className='add-user-form__buttons'>
                    <Link to='/profile' className='add-user-form__button add-user-form__button--cancel'>Cancel</Link>
                    <button type='submit' className='add-user-form__button'>Submit</button>
                </div>
            </form>
        </section>
    )
}