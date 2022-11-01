import './LeagueDetails.scss';
import mapPlaceholder from '../../assets/images/map-placeholder.png';


export default function LeagueDetails() {

    return (
        <section className='league-details'>
            <h2 className='league-details__title'>League Name</h2>

            <img src={mapPlaceholder} className='league-details__map-image' alt='map' />

            <p className='league-details__text league-details__price'>Price</p>

            <div className='league-details__dates'>
                <p className='league-details__text'>Start Date</p>
                <p className='league-details__text'>-</p>
                <p className='league-details__text'>End Date</p>
            </div>

            <div className='league-details__gender-sport'>
                <p className='league-details__text'>Gender</p>
                <p className='league-details__text'>Sport</p>
            </div>

            <div className='league-details__address'>
                <p className='league-details__text'>Street Address</p>
                <p className='league-details__text'>City</p>
            </div>


            <p className='league-details__text'>Description</p>


            <button className='league-details__join-button'>JOIN</button>





        </section>
    )
}