import LeaguesCard from '../LeaguesCard/LeaguesCard';
import './SearchResultsList.scss';

export default function SearchResultsList({ searchResults, location, sport }) {


    return (

        <section className='search-results'>
            <h2 className='search-results__title'>Search Results</h2>


            {searchResults.map(result => {
                return (
                    <LeaguesCard
                        key={result.id_league}
                        leagueId={result.id_league}
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