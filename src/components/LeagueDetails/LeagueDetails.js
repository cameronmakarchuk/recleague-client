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
                setConvertedAddress(data[0].address.replaceAll(' ', '+'))
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

            <div className='league-details__map-info-wrapper'>
                <img src={`${G_MAPS_STATIC_URL}?size=800x350&zoom=15&markers=${convertedAddress},${leagueData.city},${leagueData.province}&key=${G_MAPS_EMBED_API_KEY}`} className='league-details__map-image' alt='map' />

                <div className='league-details__league-info'>
                    <p className='league-details__text league-details__price'>Cost: ${leagueData.price}</p>

                    <div className='league-details__dates'>
                        <span className='league-details__text league-details__text--emphasis'>Dates:</span><p className='league-details__text'>{leagueData.start_date}</p>
                        <p className='league-details__text'> - </p>
                        <p className='league-details__text'>{leagueData.end_date}</p>
                    </div>

                    <span className='league-details__text league-details__text--emphasis'>Sport:</span><span className='league-details__text'>{leagueData.sport}</span>

                    <div className='league-details__address'>
                        <p className='league-details__text league-details__address--street'>{leagueData.address}</p>
                        <span className='league-details__text league-details__address--city'>{leagueData.city},</span><span className='league-details__text league-details__address--province'>{leagueData.province}</span>
                    </div>


                    <p className='league-details__text'>{leagueData.description}</p>

                    {isLoggedIn
                        ? (leagueMember
                            ? <button className='league-details__button league-details__button--member'>Member</button>
                            : <button onClick={() => setShowJoinLeague(true)} className='league-details__button league-details__button--join'>Join League</button>
                        )
                        : <button onClick={() => window.location.href = '/login'} className='league-details__button league-details__button--login'>Login To Join</button>
                    }

                </div>
            </div>





            <JoinLeagueModal
                showJoinLeague={showJoinLeague}
                setShowJoinLeague={setShowJoinLeague}
                leagueData={leagueData}
                profileData={profileData}
            />


        </section>
    )
}