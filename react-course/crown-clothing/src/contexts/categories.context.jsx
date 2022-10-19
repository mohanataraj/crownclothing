import { useEffect } from "react";
import { createContext,useState } from "react";

import { getCategoriesAndDocuments, getCategoriesDocs } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    categoriesRoute: []
});


export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
    const [categoriesRoute, setCategoriesRoute] = useState([]);

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories')
            setCategoriesMap(categoryMap)
            //onsole.log("CA",categoriesMap)c
        }
        getCategoriesMap()

        const getCategoriesRoute = async () => {
            const categoryRoute = await getCategoriesDocs('categories-manager')
         setCategoriesRoute(categoryRoute)
        }
        getCategoriesRoute()

    }, [])

    const value = { categoriesMap,categoriesRoute  }
    return(
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    )
}