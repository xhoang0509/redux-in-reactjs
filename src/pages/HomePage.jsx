import casual from 'casual-browserify';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

HomePage.propTypes = {};

function HomePage(props) {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);

    const dispatch = useDispatch();

    const handleRandomHobbyClick = () => {
        // Random a hobby object: id + title
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        };

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div className="home-page">
            <h1>REDUX HOOKS - Home Page</h1>

            <button onClick={handleRandomHobbyClick}>Random hobby</button>

            <HobbyList
                onHobbyClick={handleHobbyClick}
                activeId={activeId}
                hobbyList={hobbyList}
            />
        </div>
    );
}

export default HomePage;
