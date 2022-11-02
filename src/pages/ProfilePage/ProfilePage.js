import './ProfilePage.scss';
import avatarPlaceholder from '../../assets/images/Mohan-muruge.jpg'


export default function ProfilePage() {


    return (
        <section className='profile'>
            <h2 className='profile__title'>First Name Last Name</h2>

            <img src={avatarPlaceholder} className='profile__avatar' alt='profile avatar' />

            <p className='profile__text'>Email: </p>
            <p className='profile__text'>Street Address: </p>
            <p className='profile__text'>City: </p>
            <p className='profile__text'>Province: </p>
            <p className='profile__text'>Country: </p>
            <p className='profile__text'>Postal Code: </p>
            <p className='profile__text'>Leagues Managed: </p>
        </section>
    )
}