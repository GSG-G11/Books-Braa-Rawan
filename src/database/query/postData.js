const connection = require('../config/connection')

const postData=(book,price,author)=>{
    const sql ={
        text:'insert into books(name,price,author_id) values ($1,$2,$3)  returning *;',
        values:[book,price,author]
    }
    return connection.query(sql);
}
module.exports =postData;