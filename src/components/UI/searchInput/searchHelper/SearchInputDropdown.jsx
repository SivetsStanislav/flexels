import React from 'react';
import { Link } from 'react-router-dom';
import { TagsRepository } from '../../../../dataAccess/tagsRepository';

const SearchInputDropdown = () => {
    let suggestions = TagsRepository.getRandomTags(6)

    return (
        <div className='searching-input__dropdown'>
            <ul className='suggestions'>
                {suggestions.map(tag =>
                    <li key={tag}>
                        <Link to='/search/' className='suggestions_link'>{tag}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SearchInputDropdown;
