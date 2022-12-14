import './ProfilePage.scss';
import editIcon from '../../assets/icons/edit-icon.svg';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLeaguesManaged, API_URL, getLeaguesJoinedByUser } from '../../utils/api';


export default function ProfilePage({ isLoggedIn, profileData, leaguesJoined, setLeaguesJoined }) {
    const [leaguesManaged, setLeaguesManaged] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        if (!profileData) {
            navigate('/')
            return;
        }
        setTimeout(() => {
            const { id_user } = profileData;
            getLeaguesManaged(id_user)
                .then(resp => {
                    setLeaguesManaged(resp.data);
                    return getLeaguesJoinedByUser(id_user)
                })
                .then(({ data }) => {
                    setLeaguesJoined(data)
                })
                .catch(err => console.log(err));
        }, 50)
    }, [])


    const handleLogout = () => {
        sessionStorage.clear();
        window.location.href = '/login';
    }

    const showLeaguesJoined = !!leaguesJoined.length;
    const showLeaguesManaged = !!leaguesManaged.length;


    return (

        <section className='profile'>
            {isLoggedIn ? (
                profileData && (
                    <>
                        <div className='profile__title-wrapper'>
                            <h2 className='profile__title'>{profileData.first_name} {profileData.last_name}</h2>

                            <Link to={`/edit-user/${profileData.id_user}`} className='profile__edit-icon'>
                                <img src={editIcon} className='profile__edit-icon--img' alt='edit icon' />
                            </Link>
                        </div>

                        <div className='profile__user'>
                            <img src={`${API_URL}/${profileData.avatar_img}`} className='profile__avatar' alt='profile avatar' />

                            <div className='profile__user-details'>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>Email: </span>{profileData.email} </p>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>Street Address: </span>{profileData.address} </p>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>City: </span>{profileData.city} </p>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>Province: </span>{profileData.province} </p>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>Country: </span>{profileData.country} </p>
                                <p className='profile__text'><span className='profile__text profile__text--emphasis'>Postal Code: </span>{profileData.postal_code} </p>
                            </div>
                        </div>

                        {showLeaguesJoined
                            ? <>
                                <p className='profile__text profile__text--emphasis'>Leagues You're In: </p>
                                <ul className='profile__league-list'>
                                    {leaguesJoined.map(league => {
                                        return <li className='profile__league-list-item' key={`j-${league.id_league}`}><Link className='profile__league-link' to={`/leagues/${league.id_league}`}>{league.name}</Link></li>
                                    }
                                    )}
                                </ul>
                            </>
                            : <p>You're not currently in any leagues.</p>
                        }

                        {showLeaguesManaged
                            ? <>
                                <p className='profile__text profile__text--emphasis'>Leagues You Manage: </p>
                                <ul className='profile__league-list'>
                                    {leaguesManaged.map(league => {
                                        return <li className='profile__league-list-item' key={`m-${league.id_league}`}><Link className='profile__league-link' to={`/leagues/${league.id_league}`}>{league.name}</Link></li>
                                    }
                                    )}
                                </ul>
                            </>
                            : <p>You don't manage any leagues.</p>
                        }

                        <div className='profile__buttons'>
                            <button onClick={() => window.location.href = '/add-league'} className='profile__button profile__button--add-league'>Post Your League</button>
                            <button onClick={handleLogout} className='profile__button profile__button--logout'>Logout</button>
                        </div>
                    </>
                )
            ) : (
                <>
                    <p>Login to view this page:</p>
                    <Link to='/login'>Click here to login</Link>
                </>
            )
            }

        </section >

    )

}