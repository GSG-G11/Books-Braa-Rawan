require('env2')('.env');
const {Pool} = require('pg');

if(!process.env.DB_URL){
    throw new Error ('database not found');
}

const connections = new Pool({
    connectionString:process.env.DB_URL,
    ssl : false
});

module.exports=connections;