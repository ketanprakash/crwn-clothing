import { Routes, Route } from 'react-router';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component'
import {ShopPage} from './pages/shop/shop.component'

const App = () => (
  <div>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/shop' element = {<ShopPage/>}></Route>
    </Routes>
  </div>
)

export default App;
