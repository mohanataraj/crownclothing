import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'

const Sidebar = () =>{
  return (
    <div>
      <h1>I am sidebar</h1>
    </div>  
  )}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />}/>
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
