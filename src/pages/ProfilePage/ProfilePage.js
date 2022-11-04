import './ProfilePage.scss';
import avatarPlaceholder from '../../assets/images/Mohan-muruge.jpg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProfileData } from '../../utils/api';


export default function ProfilePage({ isLoggedIn, profileData, setProfileData, errorMessage }) {

    if (!isLoggedIn) {
        return window.location.href = '/login';
    }

    return (

        <section className='profile'>
            {isLoggedIn ? (
                profileData && (
                    <>
                        <h2 className='profile__title'>{profileData.first_name} {profileData.last_name}</h2>

                        <img src={avatarPlaceholder} className='profile__avatar' alt='profile avatar' />

                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Email: </span>{profileData.email} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Street Address: </span>{profileData.address} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>City: </span>{profileData.city} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Province: </span>{profileData.province} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Country: </span>{profileData.country} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Postal Code: </span>{profileData.postal_code} </p>
                        <p className='profile__text'><span className='profile__text profile__text--emphasis'>Leagues Managed: </span></p>
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