import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../searchInput/SearchInput';

const SearchForm = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const handleSearch = (e) => setSearch(e.target.value);

    const navigateSearch = () => {
        navigate(`/search/${search}`)
    }

    function handleSubmit(e) {
        navigateSearch();
        e.preventDefault();
    }

    console.log(search);

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput type="text" value={search} onChange={(search) => handleSearch(search)} />
            <input type="submit" value="Поиск" />
        </form>
    );
}

export default SearchForm;
