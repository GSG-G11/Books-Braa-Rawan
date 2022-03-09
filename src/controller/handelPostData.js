const postData=require('../database/query/postData')

const postDataFun = (req,res)=>{
 const{book,price,author}= (req.body);
    postData(book,price,author)
    .then(data=>res.redirect('/')).catch(err=>console.log(err))
}

module.exports=postDataFun;