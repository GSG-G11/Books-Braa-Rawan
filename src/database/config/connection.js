require('env2')('.env');
const {Pool} = require('pg');

let DB_URL=''

if(process.env.NODE_ENV='development'){
    DB_URL=process.env.DB_URL_Dev
}
else if(process.env.NODE_ENV='test'){
    DB_URL=process.env.DB_URL_Test
}
else if(!process.env.DB_URL){
    throw new Error ('database not found')
}
const connections = new Pool({
    connectionString:DB_URL,
    ssl : false
});

module.exports=connections;