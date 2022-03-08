const connection = require('../config/connection');

const deleteBook=(id)=>{
 const sql ={
text:'delete from books where id=$1',
values:[id]
    }
return connection.query(sql)
}
module.exports=deleteBook;
