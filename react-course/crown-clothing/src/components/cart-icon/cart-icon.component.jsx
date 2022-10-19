import './cart-icon.styles';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () =>{
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
    
    return (
        <CartIconContainer onClick={ toggleIsCartOpen }>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;