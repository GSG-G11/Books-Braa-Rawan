const connection = require('../config/connection');

const deleteBook=(id)=>{
 const sql ={
text:'delete from books where id=$1 returning *',
values:[id]
    }
return connection.query(sql)
}
module.exports=deleteBook;
