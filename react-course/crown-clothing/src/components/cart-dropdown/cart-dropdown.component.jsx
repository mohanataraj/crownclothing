import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)

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