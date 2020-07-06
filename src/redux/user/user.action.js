import {UserActionTypes} from '../action_types/action.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
