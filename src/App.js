import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Header from './component/Header/Header';
import { createContext, useState } from 'react';
import BlogDetails from './component/BlogDetails/BlogDetails'


export const BlogContext = createContext()

function App() {
  // context api create
  const [blogs, setBlogs] = useState([])
  console.log(blogs)
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
