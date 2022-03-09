const getAuthor=require('../database/query/gitAuthors')

const allAuthor = (req,res)=>{
    getAuthor()
    .then(data=>res.json(data.rows)).catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }))
}

module.exports=allAuthor;