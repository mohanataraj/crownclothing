import { USER_ACTION_TYPES } from "./user.types"


const INITIAL_STATE = { currentUser: null }

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    console.log("dispatched!!!", type)
    console.log(state)
    //console.log(state)
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                // use the previous state and overwrite the currentUser with payload...
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
    
}


