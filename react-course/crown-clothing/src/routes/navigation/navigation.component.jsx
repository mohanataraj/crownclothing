import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
//import { signOutUser } from '../../utils/firebase/firebase.utils';

//import './navigation.styles.scss'
import { currentUserSelector } from '../../store/user/user.selector';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { selectIsCartOpen } from '../../store/cart/cart.selector';


const Navigation = () => {

  const currentUser = useSelector(currentUserSelector)
   // the navigation component re-renders when current user value is set
  // in the sign in component, implemented in userContext which is reflected in useContext...
  //const { currentUser } = useContext(UserContext);
  //console.log("Current User: ",currentUser, "SET CU",setCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  
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