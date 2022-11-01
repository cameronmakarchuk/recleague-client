import './SearchResultsPage.scss';
import SearchResultsList from '../../components/SearchResultsList/SearchResultsList';


export default function SearchResultsPage() {


    return (
        <section className='search-results'>

            <h2 className='search-results__title'>Search Results</h2>

            <SearchResultsList />


        </section>
    )
}