import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            title: title,
            content: content,
            ingredient: ingredient,
            image: image
        })
        navigate('/')

    }

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setTitle(res.data.title)
        setContent(res.data.content)
        setIngredient(res.data.ingredient)
        setImage(res.data.image)
    }

    return (
        <div>
            <h3 className="form-h2">Editar POST</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='tittles'>Titulo de la receta</label>
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

export default CompEditBlog