import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import CheckoutPage from './routes/checkout/checkout.component'
import BackroomAdmin from './routes/backroom-admin/backroom-admin.component'


const App = () => {

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
