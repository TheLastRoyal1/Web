var swiper = new Swiper(".mySwiper", {});
// 将浏览器存储的用户名显示在页面上
if (window.sessionStorage.getItem('username')){
    $("#aaa").append("<p>" + "用户" + window.sessionStorage.getItem('username') + "，" + "</p>");
} else{
$("#aaa").append("请先登录！");
}
// 退出登录
function reset(){
    window.sessionStorage.clear()
    location.href = './login.html'
}

function show() {
    //创建内置Date对象
    var date = new Date();
    //获取当前年份
    var year = date.getFullYear();
    //获取当前的月份,范围是0-11
    var month = date.getMonth() + 1;
    //获取该月的第几天
    var day = date.getDate();

    //getDay方法获取当前是这个星期的第几天范围是0-6
    //周日对应0，123456分别是对应的星期几
    var week = "日一二三四五六";
    //返回索引处的字符
    var weeks = week.charAt(date.getDay());//这里可以直接写成：var weeks = "日一二三四五六".charAt(date.getDay())

    //获取当前小时分钟和秒
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //把当前的时间动态的表现到页面上面
    var elements = document.getElementsByClassName("hello_time");
    for (var i = 0; i < elements.length; i++) {
        // elements[i].innerHTML = year + "-" + month + "-" + day + " " + "周" + weeks + "	" + hour + ":" + minute + ":" + second + "";
        elements[i].innerHTML =  hour + ":" + minute + ":" + second + "";
    }
}
show();
//每间隔1000毫秒执行一次程序，保证时间动态显示
setInterval("show()", 1000);  

// 不同时间问候语
function hello() { 
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
        var str1 = "早上好！";
        $("#wen").append("<p>" + str1 + "</p>");
     
    } else if (hour >= 12 && hour < 18) {
        var str2 = "下午好！";
        $("#wen").append("<p>" + str2+ "</p>");
      
    } else {
        var str3 = "晚上好！";
        $("#wen").append("<p>" + str3 + "</p>");
       
    }
 }
 hello()