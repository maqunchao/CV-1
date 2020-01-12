let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string1 = "";
let n = 0;
//注意CSS的注释格式
let string = `/* 大家好,这是我做的一个动态div展示
 首先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 
 首先将这个div变成一个圆
*/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 
 设置CSS，1黑1白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 
 加上两个太极
*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`;

//使用string1接收是防止换行时候打印出br标签
let start = () => {
  setTimeout(() => {
    //1.遇见换行符就加上br标签进行换行
    //2.遇见空格处理
    if (string[n] === "\n") {
      string1 += "<br>";
    } else if (string[n] === " ") {
      string1 += "&nbsp";
    } else {
      string1 += string[n];
    }
    html.innerHTML = string1;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);

    //假如n不是最后一个就继续执行
    if (n < string.length - 1) {
      n += 1;
      start();
    }
  }, 10);
};

start();
