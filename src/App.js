import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './component/Home/Home'
import Blog from './component/Blog/Blog';
import Login from './component/Login/Login'
import Header from './component/Header/Header';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/blog-details' element={''}></Route>
    </Routes>
    </>
  );
}

export default App;
