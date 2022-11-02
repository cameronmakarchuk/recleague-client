import './SearchResultsPage.scss';
import SearchResultsList from '../../components/SearchResultsList/SearchResultsList';
import { getSearchResults } from '../../utils/api';
import { useEffect, useState } from 'react';


export default function SearchResultsPage() {
    const location = sessionStorage.getItem('location')
    const sport = sessionStorage.getItem('sport')
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getSearchResults(location)
            .then(({ data }) => {
                setSearchResults(data);
            })
    }, [])

    if (error !== '') {
        return <p>Sorry, we couldn't load the data. Error: {error}</p>
    }

    if (!searchResults) {
        return <p>Loading...</p>;
    }


    return (
        <section className='search-results'>

            <h2 className='search-results__title'>Search Results</h2>

            <SearchResultsList searchResults={searchResults} sport={sport} />


        </section>
    )
}