import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
          const res= await axios.get(URI)
          setBlog(res.data)
    }

//eliminar un blog
    const deleteBlog = async (id) => {
      await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'> <i className="fas fa-plus"></i></Link>
                    <Link to="/" className='btn btn-primary mt-2 mb-2'> Ver blog</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th className='table-responsive'>Receta</th>
                                <th className='table-responsive'>Ingredientes</th>
                                <th className='table-responsive'>Url de imagenes</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> { blog.title } </td>
                                    <td className='table-responsive'> { blog.content } </td>
                                    <td className='table-responsive'> { blog.ingredient } </td>
                                    <td className='table-responsive'> <a href={ blog.image }> Link de la imagen</a> </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> 
                                        <button onClick={ ()=> deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>

                    </table>


                </div>

            </div>

        </div>

    )

}

export default CompShowBlogs