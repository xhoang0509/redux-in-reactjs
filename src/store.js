import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

store.subscribe(() => {
    const hobbyList = store.getState().hobby;
    localStorage.setItem('hobby_list', JSON.stringify(hobbyList));
});

export default store;
