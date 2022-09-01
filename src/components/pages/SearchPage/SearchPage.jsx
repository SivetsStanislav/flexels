import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotosRepository } from '../../../dataAccess/photosRepository';

const SearchPage = () => {
    const {query} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let photos =  await PhotosRepository.getSearchingPhotos({query});
            return await setPhotos(photos);
    }
        fetchData()
        .catch(console.error);
    }, [query]);

    console.log(photos, '2')

    return (
        <div>
            {photos.map(photo =>
                <img
                    key={photo.id}
                    src={photo.src.small}
                    alt={photo.alt}
                />
            )}
            I am search page!
        </div>
    );
}

export default SearchPage;
