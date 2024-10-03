import { Routes, Route } from 'react-router-dom'

//COMPONENTSd
import Layout from './components/layout/Layout';

//PAGES
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';
import Users from './pages/users/Users';
import Page404 from './pages/page404/Page404';

//STYLES
import "./styles/bootstrap.scss"
import "./styles/global.scss"
import User from './pages/user/User';
import Order from './pages/order/Order';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='/sluzby' element={[<Carousel name='Služby'/>, <Servises />]}/>*/}
          <Route path='/objednavky' element={<Orders />} />
          <Route path='/objednavky/:id' element={<Order />}/>
          <Route path='/uzivatele' element={<Users />} />
          <Route path='/uzivatele/:id' element={<User />}/>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
