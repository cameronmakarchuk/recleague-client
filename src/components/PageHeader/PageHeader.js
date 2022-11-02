import './PageHeader.scss';
import { Link, NavLink } from 'react-router-dom';

export default function PageHeader() {

    return (
        <header className='page-header'>
            <Link to='/' className='page-header__link'><h3 className='page-header__logo'>RecLeague</h3></Link>

            <nav className='page-header-nav'>
                <ul className='page-header-nav__list'>
                    <NavLink to='/all-leagues' className='page-header-nav__link'><li className='page-header-nav__list-item'>All Leagues</li></NavLink>
                </ul>

                <button className='page-header-nav__login-button'>Login/Register</button>
            </nav>

        </header>
    )
}