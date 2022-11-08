import './LeagueDetails.scss';
import editIcon from '../../assets/icons/edit-icon.svg';
import { useEffect, useState } from 'react';
import { getLeagueById, getUsersInLeague, G_MAPS_EMBED_API_KEY, G_MAPS_STATIC_URL } from '../../utils/api';
import { useParams, Link } from 'react-router-dom';
import JoinLeagueModal from '../JoinLeagueModal/JoinLeagueModal';


export default function LeagueDetails({ isLoggedIn, profileData, leaguesJoined }) {
    const { leagueId } = useParams();
    const [leagueData, setLeagueData] = useState(null);
    const [showJoinLeague, setShowJoinLeague] = useState(false);
    const [leagueMember, setLeagueMember] = useState(false);
    const [convertedAddress, setConvertedAddress] = useState('')
    const [usersInLeague, setUsersInLeague] = useState([]);
    const [isLeagueOwner, setIsLeagueOwner] = useState(false);



    useEffect(() => {
        getLeagueById(leagueId)
            .then(({ data }) => {
                setLeagueData(data);
                setConvertedAddress(data.address.replaceAll(' ', '+'))
                setLeagueMember(leaguesJoined.find(league => league.id_league === Number(leagueId)));
                setIsLeagueOwner(Number(data.league_owner) === Number(profileData.id_user));
                return getUsersInLeague(data.id_league)
            })
            .then(({ data }) => setUsersInLeague(data))
            .catch(err => console.log(err));
    }, [leaguesJoined])




    if (!leagueData) {
        return <p>Loading...</p>;
    }

    return (
        <section className='league-details'>
            <div className='league-details__title-wrapper'>
                <h2 className='league-details__title'>{leagueData.name}</h2>

                {isLeagueOwner &&

                    <Link to={`/edit-league/${leagueId}`} className='league-details__edit-icon'>
                        <img src={editIcon} className='league-details__edit-icon--img' alt='edit icon' />
                    </Link>}
            </div>

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

                    {isLoggedIn && isLeagueOwner
                        && (
                            <>
                                <button className='league-details__button league-details__button--manager'>Manager</button>

                                <article className='league-members'>
                                    <h3 className='league-members__subheader'>League Members:</h3>

                                    <ul className='league-members__user-list'>
                                        {usersInLeague.map(user => {
                                            return <li key={user.id_user} className='league-members__user'>
                                                {user.first_name} {user.last_name}
                                                <a href={`mailto:${user.email}`} className='league-members__user-email-link'>{user.email}</a>
                                            </li>
                                        })}
                                    </ul>
                                </article>
                            </>
                        )
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