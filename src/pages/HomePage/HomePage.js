import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';

export default function HomePage() {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [sport, setSport] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSportChange = (e) => {
        setSport(e.target.value);
    }

    const onSubmitClick = (e) => {
        // e.preventDefault();
        sessionStorage.setItem('location', location);
        sessionStorage.setItem('sport', sport);

        navigate(`/search-results/?location=${location}&sport=${sport}`);
    }

    return (
        <section className='hero'>
            <h1 className='hero__title'>Find Your New Teammates Today</h1>

            <form className='hero-form' onSubmit={onSubmitClick} >

                <div className='hero-form__inputs'>
                    <label htmlFor='location' className='hero-form__label'></label>
                    <input onChange={handleLocationChange} type='text' id='location' name='location' className='hero-form__input' placeholder='Enter your location...' />

                    <label htmlFor='sport' className='hero-form__label'></label>
                    <input onChange={handleSportChange} type='text' id='sport' name='sport' className='hero-form__input' placeholder='Which sport would you like to play...' />
                </div>

                <button type='submit' className='hero-form__submit'>Find A League</button>
            </form>


        </section>
    )
}