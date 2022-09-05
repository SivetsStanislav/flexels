import React from 'react';
import { Link } from 'react-router-dom';
import { TagsRepository } from '../../../dataAccess/tagsRepository';
import './TrendTags.scss'


const TrendTags = () => {
    let trendTags = TagsRepository.getRandomTags(5);

    return (
        <div className='trend-tags'>
            <span className='trend-tags__text'>Тенденции:</span>
            <ul className='trend-tags__list'>
                {trendTags.map(tag =>
                    tag === trendTags[trendTags.length - 1] ?
                        <li className='trend-tag__container' key={tag}>
                            <Link to={`/search/${tag}`} className='trend-tag'>
                                {tag}
                            </Link>
                        </li> :
                        <li className='trend-tag__container' key={tag}>
                            <Link to={`/search/${tag}`} className='trend-tag'>
                                {tag},&nbsp;
                            </Link>
                        </li>
                )}
            </ul>
        </div>
    );
}

export default TrendTags;