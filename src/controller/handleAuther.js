const getAuthor=require('../database/query/gitAuthors')

const allAuthor = (req,res)=>{
    getAuthor()
    .then(data=>res.json(data.rows)).catch(err=>console.log(err))
}

module.exports=allAuthor;