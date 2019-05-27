
const initialState = {
    items: [],
    item: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_QUESTS':
            // const copyQuests = JSON.parse(JSON.stringify(state));
            return {
                ...state,
                items: action.payload
            };
        case 'GET_CURR_QUEST':
            // const copyCurrQuest = JSON.parse(JSON.stringify(state))
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
