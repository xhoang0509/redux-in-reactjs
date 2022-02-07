import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.scss';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null,
};

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props;

    const handleHobbyClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    };
    return (
        <ul className='hobby-list'>
            {hobbyList.map((hobby) => (
                <li
                    className={hobby.id === activeId ? 'active' : ''}
                    onClick={() => handleHobbyClick(hobby)}
                    key={hobby.id}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;
