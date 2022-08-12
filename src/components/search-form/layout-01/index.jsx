const SearchForm = () => (
    <form className="search-form-wrapper" action="/search-result">
        <input type="search" placeholder="Search Here" aria-label="Search" />
        <div className="search-icon">
            <button type="button">
                <i className="feather-search" />
            </button>
        </div>
    </form>
);

export default SearchForm;
