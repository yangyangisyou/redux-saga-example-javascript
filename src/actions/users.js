import * as types from '../config/types';

export function getUsers(users) {
    return {
        type: types.GET_USERS_REQUEST,
        payload: users,
    }
}






