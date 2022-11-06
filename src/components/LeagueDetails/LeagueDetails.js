import './LeagueDetails.scss';
import mapPlaceholder from '../../assets/images/map-placeholder.png';
import { useEffect, useState } from 'react';
import { getLeagueById, getLeagueLocationByMap, G_MAPS_EMBED_API_KEY, G_MAPS_EMBED_URL, G_MAPS_STATIC_URL } from '../../utils/api';
import { useParams } from 'react-router-dom';
import JoinLeagueModal from '../JoinLeagueModal/JoinLeagueModal';


export default function LeagueDetails({ isLoggedIn, profileData, leaguesJoined }) {
    const { leagueId } = useParams();
    const [leagueData, setLeagueData] = useState(null);
    const [showJoinLeague, setShowJoinLeague] = useState(false);
    const [leagueMember, setLeagueMember] = useState(false);
    const [convertedAddress, setConvertedAddress] = useState('')



    useEffect(() => {
        getLeagueById(leagueId)
            .then(({ data }) => {
                setLeagueData(data[0]);
                setConvertedAddress(leagueData.address.replaceAll(' ', '+'))
                setLeagueMember(leaguesJoined.find(league => league.id_league === Number(leagueId)));
            })
            .catch(err => console.log(err));
    }, [leaguesJoined])


    if (!leagueData) {
        return <p>Loading...</p>;
    }

    return (
        <section className='league-details'>
            <h2 className='league-details__title'>{leagueData.name}</h2>

            <img src={`${G_MAPS_STATIC_URL}?size=400x400&markers=${convertedAddress},${leagueData.city},${leagueData.province}&key=${G_MAPS_EMBED_API_KEY}`} className='league-details__map-image' alt='map' />



            <p className='league-details__text league-details__price'>Cost: {leagueData.price}</p>

            <div className='league-details__dates'>
                <p className='league-details__text'>{leagueData.start_date}</p>
                <p className='league-details__text'>-</p>
                <p className='league-details__text'>{leagueData.end_date}</p>
            </div>

            <div className='league-details__gender-sport'>
                <p className='league-details__text'>{leagueData.gender}</p>
                <p className='league-details__text'>{leagueData.sport}</p>
            </div>

            <div className='league-details__address'>
                <p className='league-details__text'>{leagueData.address}</p>
                <p className='league-details__text'>{leagueData.city}</p>
            </div>


            <p className='league-details__text'>{leagueData.description}</p>


            {isLoggedIn
                ? (leagueMember
                    ? <button>Member</button>
                    : <button onClick={() => setShowJoinLeague(true)} className='league-details__join-button'>Join League</button>
                )
                : <button onClick={() => window.location.href = '/login'}>Login</button>
            }


            <JoinLeagueModal
                showJoinLeague={showJoinLeague}
                setShowJoinLeague={setShowJoinLeague}
                leagueData={leagueData}
                profileData={profileData}
            />


        </section>
    )
}