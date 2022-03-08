const getAllData = require('../database/query/gitData');

const getData = (req,res)=>{
    getAllData()
    .then(data=>res.json(data.rows))
}

module.exports = getData;