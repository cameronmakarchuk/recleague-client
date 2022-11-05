import './ProfilePage.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLeaguesByUserId, API_URL, getLeaguesJoinedByUser } from '../../utils/api';


export default function ProfilePage({ isLoggedIn, profileData, setProfileData, errorMessage }) {
    const [leaguesByUser, setLeaguesByUser] = useState(null)
    const [leaguesJoined, setLeaguesJoined] = useState(null)



    useEffect(() => {
        if (!profileData) {
            return;
        }

        const { id_user } = profileData;
        getLeaguesByUserId(id_user)
            .then(resp => {
                if (resp.status === 200 && resp.data !== undefined) {
                    setLeaguesByUser(resp.data);
                } else {
                    setLeaguesByUser(null)
                }
                return getLeaguesJoinedByUser(id_user);
            })
            .then(({ data }) => {
                setLeaguesJoined(data);
            })
            .catch(err => console.log(err));
    }, [])


    const handleLogout = () => {
        sessionStorage.clear();
        window.location.href = '/login';
    }

    if (!isLoggedIn) {
        return window.location.href = '/login';
    }

    return (

        <section className='profile'>
            {isLoggedIn ? (
                profileData && (
                    <>
                        <h2 className='profile__title'>{profileData.first_name} {profileData.last_name}</h2>

                        <img src={`${API_URL}/${profileData.avatar_img}`} className='profile__avatar' alt='profile avatar' />

                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Email: </span>{profileData.email} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Street Address: </span>{profileData.address} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>City: </span>{profileData.city} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Province: </span>{profileData.province} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Country: </span>{profileData.country} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Postal Code: </span>{profileData.postal_code} </p>

                        {leaguesJoined
                            ? <>
                                <p className='profile__text profile__text--emphasis'>Leagues You're In: </p>
                                <ul className='profile__league-list'>
                                    {leaguesJoined.map(league => {
                                        return <li className='profile__league-list-item' key={league.id}><Link className='profile__text profile__league-link' to={`/leagues/${league.id}`}>{league.name}</Link></li>
                                    }
                                    )}
                                </ul>
                            </>
                            : <p>You're not currently in any leagues.</p>
                        }

                        {leaguesByUser
                            ? <>
                                <p className='profile__text profile__text--emphasis'>Leagues You Manage: </p>
                                <ul className='profile__league-list'>
                                    {leaguesByUser.map(league => {
                                        return <li className='profile__league-list-item' key={league.id_league}><Link className='profile__text profile__league-link' to={`/leagues/${league.id_league}`}>{league.name}</Link></li>
                                    }
                                    )}
                                </ul>
                            </>
                            : <p>You don't manage any leagues.</p>
                        }

                        <button onClick={handleLogout} className='profile__button profile__button--logout'>Logout</button>
                        <button onClick={() => window.location.href = '/add-league'} className='profile__button profile__button--add-league'>Post Your League</button>
                    </>
                )
            ) : (
                <>
                    <p>{errorMessage}</p>
                    <p>Login to view this page:</p>
                    <Link to='/login'>Click here to login</Link>
                </>
            )
            }

        </section >

    )

}