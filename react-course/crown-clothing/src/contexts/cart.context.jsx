import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const[totalPrice, setCartPrice] = useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
        const newCartPrice = cartItems.reduce((totalPrice,cartItem)=> (totalPrice + (cartItem.quantity * cartItem.price)),0)
        setCartCount(newCartCount)
        setCartPrice(newCartPrice)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(productToAdd,cartItems))
    }
    const deleteItemFromCart = (productTodelete) =>{
        setCartItems(deleteCartItem(productTodelete, cartItems))
    }
    const removeItemFromCart = (removeProduct) => {
        setCartItems(removeCartItem(removeProduct, cartItems))
    }
    const value = {isCartOpen,setIsCartOpen,cartItems, addItemToCart, cartCount, deleteItemFromCart, removeItemFromCart, totalPrice }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}