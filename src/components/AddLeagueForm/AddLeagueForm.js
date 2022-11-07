import '../AddUserForm/AddUserForm.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { createNewLeague } from '../../utils/api';


export default function AddUserForm({ profileData, isLoggedIn }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [sport, setSport] = useState('');
    const [gender, setGender] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
    const [errObj, setErrObj] = useState({});

    const handleNameChange = (e) => setName(e.target.value);
    const handleSportChange = (e) => setSport(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleStartDateChange = (e) => setStartDate(e.target.value);
    const handleEndDateChange = (e) => setEndDate(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleProvinceChange = (e) => setProvince(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const handlePostalChange = (e) => setPostal(e.target.value);

    const isNameInvalid = () => !name;
    const isSportInvalid = () => !sport;
    const isGenderInvalid = () => !gender;
    const isStartDateInvalid = () => !startDate;
    const isEndDateInvalid = () => !endDate;
    const isDescriptionInvalid = () => !description;
    const isPriceInvalid = () => !price;
    const isAddressInvalid = () => !address;
    const isCityInvalid = () => !city;
    const isProvinceInvalid = () => !province;
    const isCountryInvalid = () => !country;
    const isPostalInvalid = () => !postal;

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const errObj = {
            name: isNameInvalid(),
            sport: isSportInvalid(),
            gender: isGenderInvalid(),
            startDate: isStartDateInvalid(),
            endDate: isEndDateInvalid(),
            description: isDescriptionInvalid(),
            price: isPriceInvalid(),
            address: isAddressInvalid(),
            city: isCityInvalid(),
            province: isProvinceInvalid(),
            country: isCountryInvalid(),
            postal: isPostalInvalid(),
        }

        const errVals = Object.values(errObj);
        const isFormInvalid = errVals.find(err => err === true);

        if (!isFormInvalid) {
            const newLeague = {
                league_owner: profileData.id,
                name,
                sport,
                gender,
                start_date: startDate,
                end_date: endDate,
                description,
                price,
                address,
                city,
                province,
                country,
                postal_code: postal
            }

            createNewLeague(newLeague)
                .then(({ data }) => {
                    alert(`${newLeague.name} has been created!`);
                    navigate(data)
                })
                .catch(err => alert(`Error adding new league: ${err}`))
        } else {
            setErrObj(errObj);
        }
    }


    return (
        <section className='add-user'>
            {isLoggedIn ? (
                profileData && (
                    <>
                        <h2 className='add-user__title'>Post Your League</h2>

                        <form className='add-user-form' onSubmit={handleSubmitClick}>

                            <div className='add-user-form__wrapper'>
                                <div className='add-user-form__user-info'>

                                    <label htmlFor='league_name' className='add-user-form__label'>League Name</label>
                                    <input onChange={handleNameChange} className='add-user-form__input' id='league_name' name='league_name' placeholder='Enter your league name...' />

                                    <label htmlFor='league_sport' className='add-user-form__label'>League Sport</label>
                                    <input onChange={handleSportChange} className='add-user-form__input' id='league_sport' name='league_sport' placeholder='Enter your league sport...' />

                                    <label htmlFor='league_gender' className='add-user-form__label'>Men's / Women's / Co-Ed</label>
                                    <select onChange={handleGenderChange} name='league_gender' id='league_gender' className='add-user-form__input'>
                                        <option value={`Men's`}>--Please Select An Option--</option>
                                        <option value={`Men's`}>Men's</option>
                                        <option value={`Men's`}>Women's</option>
                                        <option value={`Men's`}>Co-Ed</option>
                                    </select>

                                    <label htmlFor='league_start-date' className='add-user-form__label'>Start Date</label>
                                    <input onChange={handleStartDateChange} type='date' className='add-user-form__input' id='league_start-date' name='league_start-date' placeholder='Enter your start date...' />


                                    <label htmlFor='league_end-date' className='add-user-form__label'>End Date</label>
                                    <input onChange={handleEndDateChange} type='date' className='add-user-form__input' id='league_end-date' name='league_end-date' placeholder='Enter your end date...' />


                                    <label htmlFor='league_description' className='add-user-form__label'>Description</label>
                                    <textarea onChange={handleDescriptionChange} className='add-user-form__input' id='league_description' name='league_description' placeholder='Enter a description...' />
                                </div>
                                <div className='add-user-form__user-address'>



                                    <label htmlFor='league_price' className='add-user-form__label'>Cost</label>
                                    <input onChange={handlePriceChange} className='add-user-form__input' id='league_price' name='league_price' placeholder='Enter your league cost...' />

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

                            <button type='submit' className='add-user-form__submit'>Submit</button>
                        </form>
                    </>
                )
            ) : (
                <>
                    <p>Login to view this page:</p>
                    <Link to='/login'>Click here to login</Link>
                </>
            )
            }

        </section>
    )
}