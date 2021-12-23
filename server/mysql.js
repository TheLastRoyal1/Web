// 配置数据库
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '15118458090',
    database: 'user'
});  


connection.connect();

module.exports = connection
// connection.end();