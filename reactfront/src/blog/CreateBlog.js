import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content, ingredient: ingredient, image: image })
        navigate('/')
    }

    return (
        <div>
            <h3 className="form-h2">Create POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='tittles'>Titulo</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                    />

                </div>
                <div className='mb-3'>

                    <label className='tittles'>Receta</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className='form-control'
                    />

                </div>


                <div className='mb-3'>

                    <label className='tittles'>Ingredientes</label>
                    <textarea
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                        type="text"
                        className='form-control'
                    />

                </div>

                <div className='mb-3'>

                    <label className='tittles'>Url</label>
                    <textarea
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className='form-control'
                    />

                </div>




                <button type='submit' className='btn btn-primary'>Store</button>

            </form>
        </div>
    )


}
export default CompCreateBlog