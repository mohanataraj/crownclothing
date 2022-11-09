import {CheckoutItemContainer, Value, ImageContainer,Image, Arrow, Spanned, RemoveButton} from './checkout-item.styles'

import { useDispatch, useSelector } from 'react-redux'

//import { useContext } from 'react';
//import { CartContext } from '../../contexts/cart.context';

import { addItemToCart, deleteItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {name, quantity, imageUrl, price } = cartItem; 
    const cartItems = useSelector(selectCartItems)
    //const { addItemToCart, deleteItemFromCart, removeItemFromCart } = useContext(CartContext)
    const increamentHandler = ()=>dispatch(addItemToCart(cartItems,cartItem))
    const decrementHandler = () => dispatch(deleteItemFromCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem))
    return(
        <CheckoutItemContainer>
            <ImageContainer>
             <Image  src={imageUrl} alt={`${name}`} />
            </ImageContainer>
                <Spanned>{name}</Spanned>
                <Spanned>
                    <Arrow onClick={decrementHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value> 
                    <Arrow onClick={increamentHandler}>&#10095;</Arrow> 
                </Spanned>
                <Spanned> {price}</Spanned>
                <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;