import { Fragment, useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
//import { signOutUser } from '../../utils/firebase/firebase.utils';

//import './navigation.styles.scss'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';



const Navigation = () => {

  // the navigation component re-renders when current user value is set
  // in the sign in component, implemented in userContext which is reflected in useContext...
  const { currentUser } = useContext(UserContext);
  //console.log("Current User: ",currentUser, "SET CU",setCurrentUser)
  const { isCartOpen, cartItems } = useContext(CartContext)
  
    return(
      <Fragment> 
        <NavigationContainer>
        <LogoContainer  to='/'>
           <CrwnLogo className='logo'/>
        </LogoContainer>
         <NavLinks>
              <NavLink  to='/shop'>
                    SHOP
              </NavLink>
              {
                currentUser ?( <NavLink as='span' onClick={signOutUser} to="/">
                SIGN OUT
            </NavLink>) : (
              <NavLink  to='/auth'>
              SIGN IN
            </NavLink>
            )
              
              }
              <CartIcon />
         </NavLinks>
          { isCartOpen && <CartDropdown /> }
        </NavigationContainer> 
        <Outlet />
      </Fragment>
    )
  }
export default Navigation;