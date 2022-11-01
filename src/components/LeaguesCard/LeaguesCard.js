import '.LeaguesCard.scss';


export default function LeaguesCard() {

    return (
        <section className='leagues-card'>

            <div className='leagues-card__content'>

                <img src='' className='leagues-card__image' alt='league picture' />

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

            <p className='leagues-card__more-details'>Get More Details</p>

        </section>
    )
}