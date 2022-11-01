import './LeaguesCard.scss';
import leaguePlaceholder from '../../assets/images/league-placeholder.jpg';


export default function LeaguesCard() {

    return (
        <section className='leagues-card'>

            <img src={leaguePlaceholder} className='leagues-card__image' alt='league picture' />
            <div className='leagues-card__content'>


                <div className='leagues-card__info'>
                    <h3 className='leagues-card__name'>League Name</h3>
                    <p className='leagues-card__sport'>Sport</p>
                    <p className='leagues-card__start-date'>Start Date</p>
                </div>

                <div className='leagues-card__address'>
                    <p className='leagues-card__street'>Street Address</p>
                    <p className='leagues-card__city'>City</p>
                </div>

            </div>


        </section>
    )
}