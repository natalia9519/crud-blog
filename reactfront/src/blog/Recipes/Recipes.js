import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Recipes.css'

const Recipes = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    getBlogs();
  }, [currentPage]);

  const getBlogs = async () => {
    const res = await axios.get('http://localhost:8000/blogs');
    setBlogs(res.data);
  };

  const displayBlogs = blogs
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((blog) => (
      <div className='div-recipes' key={blog.id}>
        <h2>{blog.title}</h2>
        <receta>{blog.content}</receta>
      </div>
    ));

  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const displayRecipes = blogs
  .map((blog) => (
    <div key={blog.id}>
    <li>{blog.title}</li>
    </div>

));


  return (
    <main>
      <section className="section-recipes">
        <h1 className="h1-recipes">Recetas</h1>
        

        <div className='div-part-recipes'>

            <div>
        <article className='article-recipes' >
          {displayBlogs}
        </article>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          previousLinkClassName={'previous'}
          nextLinkClassName={'next'}
          disabledClassName={'disabled'}
          activeClassName={'active'}
        />
        </div>

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
        </div>
      </section>
    </main>
  );
};

export default Recipes;