const connection = require('../config/connection');

const getAllDta=()=>{
    const sql={
        text:'SELECT books.name, books.price, author.name as author FROM books JOIN author ON (books.author_id = author.id)',
        values:[]
    }
    return connection.query(sql);
}

module.exports=getAllDta;