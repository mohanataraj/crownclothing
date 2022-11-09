import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => { 
    console.log("fired 1")
    return state.categories
}
// export const selectCategories = createSelector(
//     [selectCategoryReducer],
//     (categoriesSlice) => categoriesSlice.categories 
// )

// issue 1: causes bottleneck performance everytime this method is called...
// useSelector resolves the above issue 1: 
export const selectCategoriesMap = createSelector(
    [selectCategoryReducer],
    (categories) => {
    console.log("fired 2...!!!")
  return categories.categoriesMap
    .reduce((acc,categoryItems )=> {
        const { title, items } = categoryItems
        acc[title.toLowerCase()] = items;
        return acc
    }
,{})}
)
export const selectCategoriesRoute = (state) => state.categories.categoriesRoute