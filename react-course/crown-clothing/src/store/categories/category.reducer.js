import { CATEGORIES_ACTION_TYPES } from './category.types'

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: [],
    categoriesRoute:[]

}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action={}) => {

    const {type, payload} = action
    
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload}
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_ROUTE:
            return {...state, categoriesRoute: payload}
        default:
            return state
    }
}
