import GameService from '../services/GameService';



export const getQuests = () => async dispatch => {
    const res = await GameService.getQuests();
    dispatch({ type: 'GET_QUESTS', payload: res });
}

export const getCurrQuestion = idx => async dispatch => {
    const res = await GameService.getCurrQuestion(idx);
    dispatch({ type: 'GET_CURR_QUEST', payload: res });
}

export const updateQuestion = answer => async dispatch => {
    const res = await GameService.updateQuestion(answer);
    dispatch({ type: 'GET_CURR_QUEST', payload: res });
}
