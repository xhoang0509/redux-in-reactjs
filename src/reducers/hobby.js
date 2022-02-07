const initialState = JSON.parse(localStorage.getItem('hobby_list')) || {
    list: [],
    activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list, action.payload];
            return {
                ...state,
                list: newList,
            };
        }

        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            };
        }

        case 'DELETE_HOBBY': {
            const list = [...state.list];
            const newList = list.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                list: newList,
            };
        }

        default: {
            return state;
        }
    }
};

export default hobbyReducer;
