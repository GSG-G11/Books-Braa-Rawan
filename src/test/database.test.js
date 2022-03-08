const connection = require('../database/config/connection');
const dbBuild = require('../database/config/build');

const delBok = require('../database/query/deleteData');
const gitAut = require('../database/query/gitAuthors');
const gitDat = require('../database/query/gitData');
const postDat = require('../database/query/postData');

beforeEach(()=> dbBuild() );
afterAll(()=>connection.end());

test('test get data',()=>{
    return gitDat()
    .then((data)=>{
        expect(data.rows.length).toBe(2);
    })
});
test('test get authors',()=>{
    return gitAut()
    .then((data)=>{
        expect(data.rows.length).toBe(2);
    })
});

test('test post data',()=>{
    return postDat('ali',22,2)
    .then((data)=>{
        expect(data.rows[0].name).toBe('ali');
    })
});

test('test delete data',()=>{
    return delBok(2)
    .then((data)=>{
        expect(data.rows.length).toBe(1);
    })
});