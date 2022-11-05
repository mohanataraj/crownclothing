import { createContext, useEffect, useState, useReducer } from "react";

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

const removeCartItem = (removeProduct, cartItems) => {
    return cartItems.filter(cartItem => cartItem.id !== removeProduct.id)
}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    deleteItemFromCart: () => {},
    removeItemFromCart: () =>{},
    totalPrice: 0
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems:[],
    cartCount:0,
    cartTotal:0
}

const cartReducer = (state, action) => {
    const { type, payload } = action
    
    switch(type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN': 
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cart reducer`)
    }
}



export const CartProvider = ({children}) =>{
    // const [isCartOpen,setIsCartOpen] = useState(false)
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const[totalPrice, setCartPrice] = useState(0)

    // useEffect(()=>{
        
    //     setCartCount(newCartCount)
    //     setCartPrice(newCartPrice)
    // },[cartItems])
    const [{ cartItems, cartCount, totalPrice, isCartOpen },dispatch] = useReducer(cartReducer, INITIAL_STATE)
 
    const updateCartItemsReducer = (newCartItems) =>{
        const newCartCount = newCartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
        const newCartPrice = newCartItems.reduce((totalPrice,cartItem)=> (totalPrice + (cartItem.quantity * cartItem.price)),0)
        dispatch({
            type: 'SET_CART_ITEMS',
            payload: {
                cartItems: newCartItems,
                cartTotal: newCartPrice,
                cartCount: newCartCount
            }
        })
    }

    
    const setIsCartOpen = (bool) => {
        dispatch({type:'SET_IS_CART_OPEN', payload: bool})
    }
    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(productToAdd,cartItems))
        updateCartItemsReducer(newCartItems)
    }
    const deleteItemFromCart = (productTodelete) =>{
        const newCartItems = (deleteCartItem(productTodelete, cartItems))
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (removeProduct) => {
        const newCartItems = (removeCartItem(removeProduct, cartItems))
        updateCartItemsReducer(newCartItems)
    }
    const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount, deleteItemFromCart, removeItemFromCart, totalPrice }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}