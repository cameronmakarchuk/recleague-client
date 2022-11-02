import LeaguesCard from '../LeaguesCard/LeaguesCard';
import './SearchResultsList.scss';

export default function SearchResultsList({ searchResults, sport }) {

    return (

        <section className='search-results-list'>

            {searchResults.map(result => {
                return (
                    <LeaguesCard
                        key={result.id}
                        leagueId={result.id}
                        leagueName={result.name}
                        leagueSport={result.sport}
                        leagueStart={result.start_date}
                        leagueAddress={result.address}
                        leagueCity={result.city}
                    />
                )

            })}


        </section>
    )
}