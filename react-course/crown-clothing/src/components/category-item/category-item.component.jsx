import {BackgroundImage, CategoryItemContainer, Body} from './category-item.styles'
import { Link, useNavigate } from 'react-router-dom'

const CategoryItem = ({ category}  ) => {
    const {title, imageUrl, route} = category
    const navigate = useNavigate()

    const NavigateHandler = () => navigate(route)

    return (
        <CategoryItemContainer onClick={NavigateHandler}>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <Link to={route}>Shop Now</Link> 
        </Body>
      </CategoryItemContainer>
    )
}

export default CategoryItem