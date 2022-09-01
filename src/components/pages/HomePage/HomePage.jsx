import React from 'react';
import HomePageHeader from '../../homePageComponents/HomePageHeader/HomePageHeader';

const HomePage = () => {
    return (
        <div>
            I am home page!
            <HomePageHeader />
        </div>
    );
}

export default React.memo(HomePage);
