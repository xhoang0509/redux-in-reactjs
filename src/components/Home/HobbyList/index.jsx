import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHobby } from '../../../actions/hobby';
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
    const dispatch = useDispatch();
    
    const handleHobbyClick = (hobby) => {
        if (!onHobbyClick) return;
        onHobbyClick(hobby);
    };

    const handleBtnEditClick = (hobbyId) => {
        console.log(hobbyId);
    };
    const handleBtnDeleteClick = (hobby) => {
        const action = deleteHobby(hobby);
        dispatch(action);
    };
    return (
        <ul className="hobby-list">
            {hobbyList.map((hobby) => (
                <li
                    className={hobby.id === activeId ? 'active' : ''}
                    key={hobby.id}
                    onClick={() => handleHobbyClick(hobby)}
                >
                    {hobby.title}

                    <button
                        className="btn btn-edit"
                        onClick={() => handleBtnEditClick(hobby)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={() => handleBtnDeleteClick(hobby)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;
