import { createAction } from '../../utils/reducer/reducer.utils'

import { CATEGORIES_ACTION_TYPES } from './category.types'

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesMap)

export const setCategoriesRoute = (categoriesRoute) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_ROUTE,categoriesRoute)