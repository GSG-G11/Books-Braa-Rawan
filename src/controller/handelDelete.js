const deleteBook =require('../database/query/deleteData')

const delBook=(req,res)=>{
    const bookId = req.params.id;
    deleteBook(bookId);
    res.redirect('/')
}

module.exports=delBook;