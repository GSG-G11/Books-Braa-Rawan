const connection = require('../config/connection')

const getAuthor=()=>{
    const sql ={
        text:'select * from author',
        values:[]
    }
    return connection.query(sql);
}

module.exports = getAuthor;