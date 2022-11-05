import LeaguesCard from '../LeaguesCard/LeaguesCard';
import './AllLeaguesList.scss';
import '../../utils/api';
import { useState, useEffect } from 'react';
import { getAllLeagues } from '../../utils/api';

export default function AllLeaguesList() {
    const [leagues, setLeagues] = useState(undefined);
    const [error, setError] = useState('')

    useEffect(() => {
        getAllLeagues()
            .then(({ data }) => {
                setLeagues(data);
            })
            .catch(err => setError(err));
    }, []);

    if (error !== '') {
        return <p>Sorry, we couldn't load the data. Error: {error}</p>
    }

    if (!leagues) {
        return <p>Loading...</p>;
    }


    return (

        <section className='all-leagues-list'>

            {leagues.map(league => {
                return (
                    <LeaguesCard
                        key={league.id_league}
                        leagueId={league.id_league}
                        leagueName={league.name}
                        leagueSport={league.sport}
                        leagueStart={league.start_date}
                        leagueAddress={league.address}
                        leagueCity={league.city} />
                )
            })}




        </section>
    )
}