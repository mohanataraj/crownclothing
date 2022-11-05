import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener, createUserDocumentFromAuth,  auth } from "./utils/firebase/firebase.utils";
import {useEffect} from 'react';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import CheckoutPage from './routes/checkout/checkout.component'
import BackroomAdmin from './routes/backroom-admin/backroom-admin.component'


const App = () => {
//useDispatch: sends it to rootReducer which inturn dispatches to all the reducers...
// only one instance of useDispatch is used...
  const dispatch = useDispatch();

    //this useEffect is used to centralize the user authentication, instead of calling the useContext and setting the user call manually...
    // hook runs only when the component mounts...
    useEffect(()=>{
      const unsubscribe = onAuthStateChangedListener((user)=>{

          if(user){
           createUserDocumentFromAuth(user)
          }
          dispatch(setCurrentUser(user))
         console.log("unsubscribe",user,"Auth",auth);

      });
          
      return unsubscribe;
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/backroom' element={<BackroomAdmin/>} />
      </Route>
    </Routes>
  )
}

export default App;
