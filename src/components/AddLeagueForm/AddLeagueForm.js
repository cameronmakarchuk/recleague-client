import '../AddUserForm/AddUserForm.scss';


export default function AddUserForm() {


    return (

        <section className='add-user'>
            <h2 className='add-user__title'>Post Your League</h2>

            <form className='add-user-form'>

                <label htmlFor='league_name' className='add-user-form__label'>League Name</label>
                <input className='add-user-form__input' id='league_name' name='league_name' placeholder='Enter your league name...' />

                <label htmlFor='league_sport' className='add-user-form__label'>League Sport</label>
                <input className='add-user-form__input' id='league_sport' name='league_sport' placeholder='Enter your league sport...' />

                <label htmlFor='league_gender' className='add-user-form__label'>League Gender</label>
                <input className='add-user-form__input' id='league_gender' name='league_gender' placeholder='Enter your league gender...' />

                <label htmlFor='league_start-date' className='add-user-form__label'>Start Date</label>
                <input className='add-user-form__input' id='league_start-date' name='league_start-date' placeholder='Enter your start date...' />


                <label htmlFor='league_end-date' className='add-user-form__label'>End Date</label>
                <input className='add-user-form__input' id='league_end-date' name='league_end-date' placeholder='Enter your end date...' />


                <label htmlFor='league_description' className='add-user-form__label'>Description</label>
                <input className='add-user-form__input' id='league_description' name='league_description' placeholder='Enter a description...' />

                <label htmlFor='league_price' className='add-user-form__label'>Cost</label>
                <input className='add-user-form__input' id='league_price' name='league_price' placeholder='Enter your league cost...' />

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