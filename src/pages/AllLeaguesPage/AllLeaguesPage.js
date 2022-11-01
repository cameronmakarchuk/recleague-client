import './AllLeaguesPage.scss';
import AllLeaguesList from '../../components/AllLeaguesList/AllLeaguesList';


export default function AllLeaguesPage() {

    return (
        <section className='all-leagues'>

            <h2 className='all-leagues__title'>All Leagues</h2>

            <AllLeaguesList />


        </section>
    )
}