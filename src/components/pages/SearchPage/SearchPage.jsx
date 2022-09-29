import React from 'react';
import { useParams } from 'react-router-dom';
import PhotosLoader from '../../photosLoader/PhotosLoader';
import './SearchPage.scss';

const SearchPage = () => {
    const {query} = useParams();

    return (
        <div className='search-page'>
            <PhotosLoader query={query} />
        </div>
    );
}

export default SearchPage;
