import Directory from '../../components/directory/directory.component';
import { CategoriesContext } from '../../contexts/categories.context';
//import categories from '../../categories-manager.js'
import { useContext, useEffect, useState } from 'react';
import { getCategoriesDocs } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesRoute } from '../../store/categories/category.action';
import { useSelector } from 'react-redux';
import { selectCategoriesRoute } from '../../store/categories/category.selector';

const Home = () => {

  const dispatch = useDispatch();

  const  categoriesRoute  = useSelector(selectCategoriesRoute)
  //const [categories_mangaer,setcategories_manager] = useState(categoriesRoute)
  //console.log("HomePage", categoriesRoute)
  // useEffect(()=>{
  //    setcategories_manager(categoriesRoute)
    
  // },[categoriesRoute])
  
  useEffect(()=>{
    const getCategoriesRoute = async () => {
        const categoryRoute = await getCategoriesDocs('categories-manager')
     dispatch(setCategoriesRoute(categoryRoute))
    }
    getCategoriesRoute()
},[])
  return (
    <Directory categories={categoriesRoute}/>
  )
}

export default Home;