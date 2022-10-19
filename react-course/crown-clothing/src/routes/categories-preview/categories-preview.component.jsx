import { useContext, Fragment } from 'react';
//import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
//mport './categories-preview.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return(
       <Fragment>
            {
                Object.keys(categoriesMap).map((title) =>{
                 const products = categoriesMap[title]
                 return <CategoryPreview key={title} title={title} products={products} />
                })
            }


       
        </Fragment> 
    )
}
export default CategoriesPreview;