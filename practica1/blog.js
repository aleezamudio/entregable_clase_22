import { normalize,schema,denormalize } from "normalizr";

const blog = {
    id:"1",
    title:"Titulo de publicacion",
    descriptio:"Descripcion de la publicacion",
    content:"Hola,este es mi aporte",
    author:{
        id:1,
        name:"Jhon"
    },
    comments:[
        {
            id:"1",
            author:"Alejandro",
            content:"Buen post!"
        },
        {
            id:"2",
            author:"Leandro",
            content:"Mal post"

        }
    ]
}

/*PROCESO DE NORMALIZACION*/
const author = new schema.Entity('authors')
const comment = new schema.Entity('comments')
const blogSchema = new schema.Entity('blog',{
    author:author,
    comments:[comment]
})
const normalizedData = normalize(blog,blogSchema)

//console.log(JSON.stringify(normalizedData,null, '\t'))

/*DESNORMALIZACION*/
const normalData = denormalize(normalizedData.result,blogSchema,normalizedData.entities)
console.log(normalData);