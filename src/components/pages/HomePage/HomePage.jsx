import React from 'react';
import './HomePage.scss'
import HeaderHomePage from '../../homePageComponents/HeaderHomePage/HeaderHomePage';

const HomePage = () => {
    return (
        <div className='homepage'>
            <HeaderHomePage />
        </div>
    );
}

export default React.memo(HomePage);
