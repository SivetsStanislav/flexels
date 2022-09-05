import React, { useState } from 'react';
import './SearchForm.scss'
import { useNavigate } from 'react-router-dom';
import SearchInput from '../searchInput/SearchInput';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
        <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form__container'>
                <SearchInput
                    type="text"
                    placeholder='Поиск бесплатных изображений'
                    value={search}
                    onChange={(search) => handleSearch(search)}
                />
                <IconButton 
                    className='search-form__button'
                    type='submit'
                >
                    <SearchIcon />
                </IconButton>
            </div>
        </form>
    );
}

export default SearchForm;
