import './checkout.styles.scss'

import { useDispatch, useSelector } from 'react-redux'

//import { useContext } from "react";
//import { CartContext } from "../../contexts/cart.context";
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () =>{

    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotal)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
          {
            
              cartItems.map((cartItem)=>{
                return(<div key={cartItem.id}>
                     <CheckoutItem  key={cartItem.id} cartItem={cartItem} />
                </div>)
              })
           
          } 
        <span className='total'>Total: ${totalPrice}</span>
        </div>
    )
}

export default CheckoutPage;