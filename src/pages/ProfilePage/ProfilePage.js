import './ProfilePage.scss';
import avatarPlaceholder from '../../assets/images/Mohan-muruge.jpg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLeaguesByUserId, API_URL } from '../../utils/api';


export default function ProfilePage({ isLoggedIn, profileData, setProfileData, errorMessage }) {
    const [leaguesByUser, setLeaguesByUser] = useState(null)



    useEffect(() => {
        if (!profileData) {
            return;
        }

        const { id } = profileData;
        getLeaguesByUserId(id)
            .then(resp => {
                if (resp.status === 200 && resp.data !== undefined) {
                    setLeaguesByUser(resp.data);
                } else {
                    return;
                }
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

                        <p className='profile__text profile__text--emphasis'>Leagues Managed: </p>
                        {leaguesByUser
                            ? <ul className='profile__league-list'>
                                {leaguesByUser.map(league => {
                                    return <li className='profile__text' key={league.id}>{league.name}</li>
                                }
                                )}
                            </ul>
                            : <span>no leagues managed</span>}

                        <button onClick={handleLogout} className='profile__logout-button'>Logout</button>
                    </>
                )
            ) : (
                <>
                    <p>{errorMessage}</p>
                    <p>Login to view this page:</p>
                    <Link to='/login'>Click here to login</Link>
                </>
            )}

        </section>

    )

}