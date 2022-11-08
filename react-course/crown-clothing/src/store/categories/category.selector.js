
// causes bottleneck performance everytime this method is called...
export const selectCategoriesMap = (state) => state.categories.categoriesMap
.reduce((acc,categoryItems )=> {
    const { title, items } = categoryItems
    acc[title.toLowerCase()] = items;
    return acc
},{})

export const selectCategoriesRoute = (state) => state.categories.categoriesRoute