import LeaguesCard from '../LeaguesCard/LeaguesCard';
import './SearchResultsList.scss';

export default function SearchResultsList({ searchResults, sport }) {

    // SET UP FILTER BY SPORT ON SEARCHRESULTS

    return (

        <section className='search-results-list'>
            <h2 className='search-results__title'>Search Results</h2>


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