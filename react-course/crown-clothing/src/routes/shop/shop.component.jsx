
//import SHOP_DATA from '../../shop-data.json';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories')
            //console.log("Category Map",categoryMap)
           dispatch(setCategoriesMap(categoryMap))
            
        }
        getCategoriesMap()

    }, [])
    return(
       <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />

        </Routes>
    )
}

export default Shop;