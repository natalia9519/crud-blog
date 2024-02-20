import db from "../database/db.js"

//importamos la conexion a la base de datos

import { DataTypes } from "sequelize"

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    ingredient: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
})

export default BlogModel