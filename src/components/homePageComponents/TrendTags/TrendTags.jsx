import React from 'react';
import { Link } from 'react-router-dom';
import { TagsRepository } from '../../../dataAccess/tagsRepository';


const TrendTags = () => {
    let trendTags = TagsRepository.getRandomTags(8);

    return (
        <div className='trend-tags_link-container'>
            {trendTags.map(tag =>
                <Link to={`/search/${tag}`} key={tag} className='trend-tags_link'>{tag}, </Link>
            )}
        </div>
    );
}

export default TrendTags;