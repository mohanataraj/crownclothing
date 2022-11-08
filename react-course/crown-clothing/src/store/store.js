import { compose, applyMiddleware, createStore  } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// runs before action hits the reducers... only after middleWare action is reached...
//const middlerWares = [logger]

const loggerMiddleware = (store) => (next) => (action) =>{
    if(action.type){
        return   next(action)
    }

    console.log('type :', action.type)
    console.log('payload :', action.payload)
    console.log('currentState :', store.getState())

    next(action)
    console.log('next state :', store.getState())
} 

const middleWares = [loggerMiddleware]
// compose: pass multiple functions from left to right...
const composedEnchancers = compose(applyMiddleware(...middleWares))

// root-reducer
export const store = createStore(rootReducer, undefined, composedEnchancers)