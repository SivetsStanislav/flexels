import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotosRepository } from '../../../dataAccess/photosRepository';
import './SearchPage.scss';

const SearchPage = () => {
    const {query} = useParams();
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

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

    console.log(photos, '2')

    return (
        <div className='search-page'>
            {photos.map(photo =>
                <img
                    key={photo.id}
                    src={photo.src.medium}
                    alt={photo.alt}
                    className='search-page__img'
                />
            )}
            I am search page!
        </div>
    );
}

export default SearchPage;
