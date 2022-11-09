import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';
import {  useSelector } from 'react-redux';
//import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';


const CartDropdown = () =>{
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()

    const goToCheckoutPage = () =>{
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
                : <EmptyMessage> Your cart is empty</EmptyMessage>
            }
            </CartItems>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutPage} >CHECKOUT</Button>         
        </CartDropdownContainer>
    )
}

export default CartDropdown;