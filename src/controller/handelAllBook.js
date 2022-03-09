const getAllData = require('../database/query/gitData');

const getData = (req,res)=>{
    getAllData()
    .then(data=>res.json(data.rows)).catch((err) => res.status(500).json({ msg: 'Internal Server Error', err }))
}

module.exports = getData;