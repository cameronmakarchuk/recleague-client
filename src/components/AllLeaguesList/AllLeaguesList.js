import LeaguesCard from '../LeaguesCard/LeaguesCard';
import './AllLeaguesList.scss';
import '../../utils/api';
import { useState, useEffect } from 'react';
import { getAllLeagues } from '../../utils/api';

export default function AllLeaguesList() {
    const [leagues, setLeagues] = useState(undefined);

    useEffect(() => {
        getAllLeagues()
            .then(({ data }) => {
                setLeagues(data);
            })
            .catch(err => `Could not retrieve leagues: ${err}`);
    }, []);

    if (!leagues) {
        return <p>Loading...</p>;
    }


    return (

        <section className='all-leagues-list'>

            {leagues.map(league => {
                return (
                    <LeaguesCard
                        leagueId={league.id}
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