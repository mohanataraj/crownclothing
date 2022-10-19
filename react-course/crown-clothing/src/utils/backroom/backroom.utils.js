import { addCollectionAndDocuments, addCollections } from "../firebase/firebase.utils";
import SHOP_DATA from "../../shop-data.js";
import CATEGORY_DATA from "../../categories-manager.js"



  export  const LoadCategoryData = () =>{
    return addCollectionAndDocuments('categories', SHOP_DATA)
  }


  export const LoadCategoryManager = () => {
    return addCollections('categories-manager', CATEGORY_DATA)
  }
