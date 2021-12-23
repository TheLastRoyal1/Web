
        // 点击跳转登录与注册：
    window.onload = function () {
        // 1.1 获取需要的标签
        let as = document.getElementsByClassName('header')[0].getElementsByTagName('a');
    let contents = document.getElementsByClassName('dom');

    // 1.2 遍历
    for (let i = 0; i < as.length; i++) {
        // 1.2.1 取出单个对象
        let a = as[i];
    a.id = i;

    // 1.2.2 监听鼠标的移动事件
    a.onclick = function () {
                    // 让所有的a的class都清除
                    for (let j = 0; j < as.length; j++) {
        as[j].className = '';
    contents[j].style.display = 'none';
                    }

    // 设置当前a的class
    this.className = 'current';
    // 从contents数组中取出对应的标签
    contents[this.id].style.display = 'block';
                }

            }
        }
// 用户登录
    function getname() {
            var uname = document.getElementById('name').value;
    var psw = document.getElementById('psw').value;
    var p = `username=${uname}&password=${psw}`

    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://127.0.0.1:8000/api/login?' + p)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
    xhr.send();
    xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 & xhr.status < 300) {
        console.log(xhr.response)
                         if (xhr.response === "登录成功") {
                        location.href = './index.html'
                         window.sessionStorage.setItem('username',`${uname}`)
                        }else{
                        alert(xhr.response)
    }
                    }
                }
            }
        }
// 游客登录
function you(){
    location.href = './index.html'
}
// 用户注册
    function register() {
    var res_name = document.getElementById('res_name').value;
    var res_psw = document.getElementById('res_psw').value;
    var p = `username=${res_name}&password=${res_psw}`
            const xhr = new XMLHttpRequest();
            xhr.open('post', 'http://127.0.0.1:8000/api/register')
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
            xhr.send(p);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 & xhr.status < 300) {
                        console.log(xhr.response)                        
                        if(xhr.response==="用户注册成功"){
                            alert("注册成功,请重新登录")
                            location.href = './login.html'                           
                        }else{
                            alert(xhr.response)
                        }
                    }
                }
            }
        }




