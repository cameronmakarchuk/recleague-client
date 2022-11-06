import './LeaguesCard.scss';
import { Link } from 'react-router-dom';


export default function LeaguesCard({ leagueId, leagueName, leagueSport, leagueStart, leagueAddress, leagueCity }) {


    return (
        <Link to={`/leagues/${leagueId}`} className='leagues-card__link'>
            <section className='leagues-card'>
                <h3 className='leagues-card__name'>{leagueName}</h3>

                <div className='leagues-card__content'>

                    <div className='leagues-card__info'>
                        <p className='leagues-card__sport'>{leagueSport}</p>
                        <p className='leagues-card__start-date'>{leagueStart}</p>
                    </div>

                    <div className='leagues-card__address'>
                        <p className='leagues-card__street'>{leagueAddress}</p>
                        <p className='leagues-card__city'>{leagueCity}</p>
                    </div>

                </div>


            </section>
        </Link>
    )
}