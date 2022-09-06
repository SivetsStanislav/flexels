import React from 'react';
import './HeaderHomePage.scss'
import SearchForm from '../../UI/searchForm/SearchForm';
import TrendTags from '../TrendTags/TrendTags';
import HeaderImage from './headerImage/HeaderImage';

const HeaderHomePage = () => {
    return (
        <div className='header-home-page'>
            <HeaderImage />
            <div className='header-home-page__container'>
                <h1 className='header-home-page__title'>
                    Лучшие бесплатные стоковые фото,{<br />}
                    изображения без роялти и видео от{<br />}
                    талантливых авторов.
                </h1>
                <SearchForm />
                <TrendTags />
            </div>
        </div>
    );
}

export default React.memo(HeaderHomePage);
