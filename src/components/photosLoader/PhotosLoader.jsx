import React, { useEffect, useState } from 'react';
import { PhotosRepository } from '../../dataAccess/photosRepository';
import './PhotosLoader.scss';

const PhotosLoader = (props) => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    const query = props.query;

    useEffect(() => {
        if (fetching) {
            console.log('fetching');
            let fetchData = async () => {
                let photos1 =  await PhotosRepository.getSearchingPhotos({query}, currentPage);
                setCurrentPage(prevState => prevState + 1)
                console.log(photos, 'картинки');
                return await setPhotos([...photos, ...photos1]);
        }
            fetchData()
            .catch(console.error)
            .finally(() => setFetching(false));
        }
    }, [query, currentPage, fetching, photos]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function() {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }

    return (
        <div className='photos-loader__container'>
            {photos.map(photo =>
                <img
                    key={photo.id}
                    src={photo.src.medium}
                    alt={photo.alt}
                    className='loaded-img'
                />
            )}
        </div>
    );
}

export default PhotosLoader;
