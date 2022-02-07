import casual from 'casual-browserify';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import InputField from '../components/form-controls/InputField';
import HobbyList from '../components/Home/HobbyList';

HomePage.propTypes = {};

function HomePage() {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();

    const handleHobbyFormSubmit = (hobbyTitle) => {
        const newHobby = {
            id: casual.uuid,
            title: hobbyTitle,
        };

        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    const handleRandomHobbyClick = () => {
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        };

        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };
    return (
        <div>
            <h1>REDUX HOOKS - Home Page</h1>
            <h3>Enter your hobby: </h3>
            <InputField onHobbySubmit={handleHobbyFormSubmit} />

            <br />
            <button onClick={handleRandomHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;
