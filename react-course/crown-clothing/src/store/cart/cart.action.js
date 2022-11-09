

import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';


const addCartItem = (productToAdd, cartItems)=>{

    const existingCartItem = cartItems.find((cartItem)=>(cartItem.id === productToAdd.id))
    
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity:cartItem.quantity+1 }: cartItem)
    }

    return [...cartItems, {...productToAdd, quantity:1}];
}
const deleteCartItem = (productTodelete, cartItems) =>{

    const existingCartItem = cartItems.find((cartItem)=>(cartItem.id === productTodelete.id))

    if(existingCartItem.quantity === 1){
        //we use filter for react render the items with 0 count map does not execute for item with 0 quantity...
        return cartItems.filter( cartItem => cartItem.id !== productTodelete.id)
    }
// we create a new object rather than remove since react - renders the new obj and does not if same with decreased quantity... : mutate objs
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productTodelete.id ? {...cartItem, quantity:cartItem.quantity - 1 }: cartItem)
    }

}

export const removeCartItem = (removeProduct, cartItems) => {
    return cartItems.filter(cartItem => cartItem.id !== removeProduct.id)
}


export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
}
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(productToAdd,cartItems))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}
export const deleteItemFromCart = (cartItems, productTodelete) =>{
    const newCartItems = (deleteCartItem(productTodelete, cartItems))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}
export const removeItemFromCart = (cartItems, removeProduct) => {
    const newCartItems = (removeCartItem(removeProduct, cartItems))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}



