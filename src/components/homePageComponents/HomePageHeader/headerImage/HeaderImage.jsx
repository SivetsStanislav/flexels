import React, { useState, useEffect } from 'react';
import { PhotosRepository } from '../../../../dataAccess/photosRepository';

const HeaderImage = () => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        let fetchData = async () => {
            let photo =  await PhotosRepository.getRandomPhoto();
            return await setImage(photo);
        }

        fetchData()
            .catch(console.error);
    }, []);

    console.log(image, '1');

    return (
        <img
            src={image}
            alt='header'
            className='header-image'
        />
    );
}

export default HeaderImage;
