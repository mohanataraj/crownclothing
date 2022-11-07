import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
//import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';


const Category = () => {
    const {category} = useParams();
   
   const categoriesMap = useSelector(selectCategoriesMap) 
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() =>{
        setProducts(categoriesMap[category])
        //console.log("CACCACAC",categoriesMap)
    },[category,categoriesMap])

    return (
        <Fragment>
        <h2 className='category-title'> {category.toUpperCase()} </h2>
            <div className='category-container'>
                {
                    //products && products.map is used in order to render only if products data is present... since fetching is async...
                    products && products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </Fragment>
    )
}

export default Category;