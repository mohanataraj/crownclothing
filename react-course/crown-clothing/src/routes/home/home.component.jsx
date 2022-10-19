import Directory from '../../components/directory/directory.component';
import { CategoriesContext } from '../../contexts/categories.context';
//import categories from '../../categories-manager.js'
import { useContext, useEffect, useState } from 'react';

const Home = () => {

  
  const { categoriesRoute } = useContext(CategoriesContext)
  const [categories_mangaer,setcategories_manager] = useState(categoriesRoute)
  //console.log("HomePage", categoriesRoute)
  useEffect(()=>{
     setcategories_manager(categoriesRoute)
    
  },[categoriesRoute])
  return (
    <Directory categories={categories_mangaer}/>
  )
}

export default Home;