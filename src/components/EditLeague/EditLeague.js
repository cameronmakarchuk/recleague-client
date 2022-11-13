import '../AddLeagueForm/AddLeagueForm.scss';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { editLeagueById, getLeagueById } from '../../utils/api';


export default function EditLeague({ profileData, isLoggedIn }) {
    const navigate = useNavigate();
    const { leagueId } = useParams();
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
    const [leagueOwner, setLeagueOwner] = useState(null);
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

    useEffect(() => {
        getLeagueById(leagueId)
            .then(({ data }) => {
                const newStart = new Date(data.start_date).toISOString().split('T')[0];
                const newEnd = new Date(data.end_date).toISOString().split('T')[0];
                setName(data.name);
                setSport(data.sport);
                setGender(data.gender);
                setStartDate(newStart);
                setEndDate(newEnd);
                setDescription(data.description);
                setPrice(data.price);
                setAddress(data.address);
                setCity(data.city);
                setProvince(data.city);
                setCountry(data.country);
                setPostal(data.postal_code);
                setLeagueOwner(data.league_owner);
            })
            .catch(err => alert(err));
    }, [])

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
            const editedLeague = {
                league_owner: profileData.id_user,
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

            editLeagueById(leagueId, editedLeague)
                .then(({ data }) => {
                    navigate(`/leagues/${data}`)
                })
                .catch(err => alert(`Error editing your league: ${err}`))
        } else {
            setErrObj(errObj);
        }
    }


    if (!isLoggedIn || Number(profileData.id_user) !== Number(leagueOwner)) {
        return <p className='access-error-msg'>You do not have access to this page. Please either <a href='/login'>login</a>, or create a new league.</p>
    }


    return (
        <section className='add-league'>
            {isLoggedIn ? (
                profileData && (
                    <>
                        <h2 className='add-league__title'>Edit Your League</h2>

                        <form className='add-league-form' onSubmit={handleSubmitClick}>

                            <div className='add-league-form__wrapper'>
                                <div className='add-league-form__user-info'>

                                    <label htmlFor='add-league_name' className='add-league-form__label'>League Name</label>
                                    <input value={name} onChange={handleNameChange} className='add-league-form__input' id='add-league_name' name='add-league_name' placeholder='Enter your league name...' />

                                    <label htmlFor='add-league_sport' className='add-league-form__label'>League Sport</label>
                                    <input value={sport} onChange={handleSportChange} className='add-league-form__input' id='add-league_sport' name='add-league_sport' placeholder='Enter your league sport...' />

                                    <label htmlFor='add-league_gender' className='add-league-form__label'>Men's / Women's / Co-Ed</label>
                                    <select value={gender} onChange={handleGenderChange} name='add-league_gender' id='add-league_gender' className='add-league-form__input'>
                                        <option value=''>--Please Select An Option--</option>
                                        <option value={`Men's`}>Men's</option>
                                        <option value={`Women's`}>Women's</option>
                                        <option value={`Co-Ed`}>Co-Ed</option>
                                    </select>

                                    <label htmlFor='add-league_start-date' className='add-league-form__label'>Start Date</label>
                                    <input value={startDate} onChange={handleStartDateChange} type='date' className='add-league-form__input' id='add-league_start-date' name='add-league_start-date' placeholder='Enter your start date...' />


                                    <label htmlFor='add-league_end-date' className='add-league-form__label'>End Date</label>
                                    <input value={endDate} onChange={handleEndDateChange} type='date' className='add-league-form__input' id='add-league_end-date' name='add-league_end-date' placeholder='Enter your end date...' />


                                    <label htmlFor='add-league_description' className='add-league-form__label'>Description</label>
                                    <textarea value={description} onChange={handleDescriptionChange} className='add-league-form__input' id='add-league_description' name='add-league_description' placeholder='Enter a description...' />
                                </div>
                                <div className='add-user-form__user-address'>



                                    <label htmlFor='add-league_price' className='add-league-form__label'>Cost</label>
                                    <input value={price} onChange={handlePriceChange} className='add-league-form__input' id='add-league_price' name='add-league_price' placeholder='Enter your league cost...' />

                                    <label htmlFor='add-league_address' className='add-league-form__label'>Street Address</label>
                                    <input value={address} onChange={handleAddressChange} className='add-league-form__input' id='add-league_address' name='add-league_address' placeholder='Enter your address...' />

                                    <label htmlFor='add-league_city' className='add-league-form__label'>City</label>
                                    <input value={city} onChange={handleCityChange} className='add-league-form__input' id='add-league_city' name='add-league_city' placeholder='Enter your city...' />

                                    <label htmlFor='add-league_province' className='add-league-form__label'>Province</label>
                                    <input value={province} onChange={handleProvinceChange} className='add-league-form__input' id='add-league_province' name='add-league_province' placeholder='Enter your province...' />

                                    <label htmlFor='add-league_country' className='add-league-form__label'>Country</label>
                                    <input value={country} onChange={handleCountryChange} className='add-league-form__input' id='add-league_country' name='add-league_country' placeholder='Enter your country...' />

                                    <label htmlFor='add-league_postal_code' className='add-league-form__label'>Postal Code</label>
                                    <input value={postal} onChange={handlePostalChange} className='add-league-form__input' id='add-league_postal_code' name='add-league_postal_code' placeholder='Enter your postal code...' />


                                </div>
                            </div>

                            <div className='add-league-form__buttons'>
                                <Link to={`/leagues/${leagueId}`} className='add-league-form__button add-league-form__button--cancel'>Cancel</Link>
                                <button type='submit' className='add-league-form__button'>Submit</button>
                            </div>

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