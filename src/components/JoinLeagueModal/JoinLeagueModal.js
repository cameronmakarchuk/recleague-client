import { postJoinLeague } from '../../utils/api';
import './JoinLeagueModal.scss';


export default function JoinLeagueModal({ showJoinLeague, setShowJoinLeague, leagueData, profileData }) {


    const handleCloseJoinLeague = () => setShowJoinLeague(false);

    const handleSubmitJoinLeague = () => {
        const details = {
            users_id: profileData.id_user,
            leagues_id: leagueData.id_league
        }
        postJoinLeague(details)
            .then(() => {
                document.querySelector('.join-league').innerHTML = `You've successfully joined ${leagueData.name}! You'll recieve an email after we review your application.`
                setTimeout(() => {
                    setShowJoinLeague(false);
                }, 4000)
            })
            .catch(err => console.log(err));
    }

    if (!showJoinLeague) return;

    return (
        <section className='join-league-background'>
            <article className='join-league'>
                <h2 className='join-league__title'>Confirm you're details to join {leagueData.name}:</h2>

                <p className='join-league__text join-league__text--emphasis'>
                    Name: <span className='join-league__text'>{profileData.first_name} {profileData.last_name}</span>
                </p>

                <p className='join-league__text join-league__text--emphasis'>
                    Email: <span className='join-league__text'>{profileData.email}</span>
                </p>

                <p className='join-league__text join-league__text--emphasis'>
                    League Dates: <span className='join-league__text'>{leagueData.start_date} {leagueData.end_date}</span>
                </p>

                <p className='join-league__text join-league__text--emphasis'>
                    Cost: <span className='join-league__text'>${leagueData.price}</span>
                </p>

                <input type='checkbox' id='join-league__confirm' name='join-league__confirm' className='join-league__checkbox' required />
                <label htmlFor='join-league__confirm' className='join-league__label'>Yes, I'd like to join {leagueData.name}!</label>

                <div className='join-league__buttons'>
                    <button onClick={handleCloseJoinLeague} className='join-league__button join-league__button--cancel'>Cancel</button>
                    <button onClick={handleSubmitJoinLeague} className='join-league__button join-league__button--submit'>Submit</button>
                </div>

            </article>
        </section>
    )
}