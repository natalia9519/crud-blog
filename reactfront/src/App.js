import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './asset/jajangmyeon.png';
import './App.css';

import CompShowBlogs from'./blog/ShowBlogs.js';
import CompCreateBlog from './blog/CreateBlog.js';
import CompEditBlog from './blog/EditBlog.js';
import Home from './blog/Home/Home.js'
import Recipes from './blog/Recipes/Recipes.js'
import RecipesUnic from './blog/RecipesUnic/RecipesUnic.js'
import Form from './blog/Form/Form.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <a href='/'><img src={logo}  className="App-logo" alt="logo" /></a> 
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/administration' element={<CompShowBlogs />} />

        <Route path='/create' element={<CompCreateBlog />} />
        <Route path='/edit/:id' element={<CompEditBlog />} />
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipesUnic />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
