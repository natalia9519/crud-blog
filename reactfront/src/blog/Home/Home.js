import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);


  // useEffect(() => {
  //   getBlogs();
  // }, []);

  // const getBlogs = async () => {
  //   const res = await axios.get('http://localhost:8000/blogs');
  //   setBlogs(res.data);
  // };
  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get('http://localhost:8000/blogs');
      setBlogs(res.data);
    };
    getBlogs();
  }, []);

  const displayBlogs = blogs
    
  .map((blog) => (
      <div className='div-publication' key={blog.id}>
        <p>Publicación de la receta {blog.updatedAt}</p>
        <div className='div-home'>
        <h2>{blog.title}</h2>
        <div className='image-content'>
        <p className='content-home'>{blog.content}</p>          
        <img src={blog.image} alt='Imagen de la receta' className='image-blog'/>

        </div>
        <p ><Link className='link-see-more' to={`/recipes/${blog.id}`}>Ver más...</Link>  </p>  
        </div>
      </div>
  ));


  const displayRecipes = blogs
  .map((blog) => (
    <div key={blog.id}>
    <li>{blog.title}</li>
    </div>

));


  return (
    <main>
      <section className="section-home">
        <h1 className="h1-home">Tú también puedes cocinar</h1>

        <article className='article-home' >
         <div className='div-publications'>{displayBlogs}</div> 
          <aside className='nav'>
            <ul>
            <li> <a href='./'> Inicio </a> </li>
            <li><a href='./recipes'> Recetas </a> </li>
              <ul>
              <li> {displayRecipes} </li>
              </ul>
          <li><a href='./administration'>Administrador</a></li>
          <li><a href='./form'>Manda tu receta</a></li>
            </ul>
        </aside>
        </article>
        

      </section>
    </main>
  );
};

export default Home;