import { compose, applyMiddleware, createStore  } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// runs before action hits the reducers... only after middleWare action is reached...
const middlerWares = [logger]

// compose: pass multiple functions from left to right...
const composedEnchancers = compose(applyMiddleware(...middlerWares))

// root-reducer
export const store = createStore(rootReducer, undefined, composedEnchancers)