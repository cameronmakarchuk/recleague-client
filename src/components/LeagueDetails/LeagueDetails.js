import './LeagueDetails.scss';
import mapPlaceholder from '../../assets/images/map-placeholder.png';
import { useEffect, useState } from 'react';
import { getLeagueById } from '../../utils/api';
import { useParams } from 'react-router-dom';


export default function LeagueDetails() {
    const { leagueId } = useParams();
    const [leagueData, setLeagueData] = useState(null);


    useEffect(() => {
        getLeagueById(leagueId)
            .then(({ data }) => {
                setLeagueData(data[0]);
            })
    }, [leagueId])

    //  if (error !== '') {
    //         return <p>Sorry, we couldn't load the data. Error: {error}</p>
    //     }

    if (!leagueData) {
        return <p>Loading...</p>;
    }


    return (
        <section className='league-details'>
            <h2 className='league-details__title'>{leagueData.name}</h2>

            <img src={mapPlaceholder} className='league-details__map-image' alt='map' />

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


            <button className='league-details__join-button'>Join</button>





        </section>
    )
}