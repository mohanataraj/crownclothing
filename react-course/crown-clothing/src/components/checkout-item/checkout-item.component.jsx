import {CheckoutItemContainer, Value, ImageContainer,Image, Arrow, Spanned, RemoveButton} from './checkout-item.styles'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price } = cartItem; 
    const { addItemToCart, deleteItemFromCart, removeItemFromCart } = useContext(CartContext)
    const increamentHandler = ()=>(addItemToCart(cartItem))
    const decrementHandler = () => (deleteItemFromCart(cartItem))
    const removeItemHandler = () => (removeItemFromCart(cartItem))
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