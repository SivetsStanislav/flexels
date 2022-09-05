import React from 'react';
import './SearchInput.scss';

const SearchInput = (props) => {
    return (
        <input className='search-input' {...props}/>
    );
};

export default SearchInput;