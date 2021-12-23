// 创建服务器
const express = require('express');
const connection = require('./mysql')

// 解决跨域
const cors = require('cors');
const app = express();
// 获取post数据
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json())
app.use(cors());
const path = require("path");
app.use(express.static(path.resolve(__dirname,"../弘扬红色文化")))
// let username = ''
// let password = ''


app.get('/api/login', (req, res) => {
    // 拿到用户数据进行核验
    let uname = req.query.username;
    let pwd = req.query.password;
  
    // 从数据库中获取数据进行验证是否存在该用户
    connection.query(`SELECT username,password FROM users WHERE username = "${uname}"`, function (error, results, fields) {

       
       if(uname,pwd){
        if (JSON.stringify(results) !== "[]") {  
                            
                    // 有该用户
                    // 取出密码进行验证
                    let password = results[0].password;
                    
                    if (pwd === password) {
                        res.send("登录成功")
                        
                    } else {
                        res.send("密码错误，请重新输入");
                    }

                } else {
                    // 没有该用户 提醒用户注册
                    res.send("未注册，请注册后登陆 ")
                }
       }else{
           res.send("账号或密码不可为空");
       }
        
    })
})


app.post('/api/register', (req, res) => {
    // 拿到用户注册数据
    let uname = req.body.username;
    let pwd = req.body.password;

    // 查找该用户是否存在
    connection.query(`SELECT username FROM users WHERE username = "${uname}"`, function (error, results, fields) {
        if (JSON.stringify(results) === "[]") {
            // 没有该用户
            // 则注册该用户
            if(uname,pwd){
                 connection.query(`INSERT INTO users VALUES("${uname}","${pwd}")`, function (error, results, fields) {               
                res.send("用户注册成功")
            })
            }else{
                res.send("账号或密码不可为空")
               
            }
           
        } else {
            // 有该用户 提醒用户登录
            res.send("用户名存在 ")
        }
    })
})


app.get('/',(req,res)=>{
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results)
    });

})

app.listen(8000, function () {
    console.log("端口为8000的服务器已启动");
})

