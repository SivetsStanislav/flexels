import React from 'react';
import SearchForm from '../../UI/searchForm/SearchForm';
import TrendTags from '../TrendTags/TrendTags';
import HeaderImage from './headerImage/HeaderImage';

const HomePageHeader = () => {

    return (
        <div className='header-home-page'>
            <HeaderImage />
            <p>
                Лучшие бесплатные стоковые фото,
                изображения без роялти и видео от
                талантливых авторов.
            </p>
            <SearchForm />
            <TrendTags />
        </div>
    );
}

export default React.memo(HomePageHeader);
