import { Routes, Route } from 'react-router';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component'
import {ShopPage} from './pages/shop/shop.component'
import {Header} from './components/header/header.component'
const App = () => (
  <div>
    <Header/>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/shop' element = {<ShopPage/>}></Route>
    </Routes>
  </div>
)

export default App;
