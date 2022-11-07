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

   

    const value = { categoriesMap,categoriesRoute  }
    return(
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    )
}