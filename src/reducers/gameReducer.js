
const initialState = {
    items: [],
    item: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_QUESTS':
            return {
                ...state,
                items: action.payload
            };
        case 'GET_CURR_QUEST':
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
