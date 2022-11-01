import './HomePage.scss';

export default function HomePage() {

    return (
        <section className='hero'>
            <h1 className='hero__title'>Find Your New Teammates Today</h1>

            <form className='hero-form'>
                <label htmlFor='location' className='hero-form__label'></label>
                <input type='text' id='location' name='location' className='hero-form__input' placeholder='Enter your location...' />

                <label htmlFor='sport' className='hero-form__label'></label>
                <input type='text' id='sport' name='sport' className='hero-form__input' placeholder='Which sport would you like...' />

                <button type='submit' className='hero-form__submit'>Find A League</button>
            </form>


        </section>
    )
}