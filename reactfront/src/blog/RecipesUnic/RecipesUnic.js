import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './RecipesUnic.css'

const URI = 'http://localhost:8000/blogs';

const RecipesUnic = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const res = await axios.get(`${URI}/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    getBlogDetails();
  }, [id]);

  return (
    <main>
      <section className="recipe-details">
        <h2 className="tittle-recipes-unic">Receta</h2>
        <aside className='div-publication-recipe' key={blog.id}>
          <p>Publicación del blog {blog.updatedAt}</p>
          <div className='div-home-recipe'>
          <div className="recipe-unic-image-content">
           <img src={blog.image} alt='Imagen de la receta' className='image-blog'/>  
           <div>
            <p className="recipe-content"><strong>Receta: </strong> {blog.content}</p>
            <p className="recipe-content"><strong>Ingredientes: </strong> {blog.ingredient}</p>
            </div>
            </div>
           
            <p><Link className="link-go-back" to={`/`}>Volver al blog</Link></p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default RecipesUnic;