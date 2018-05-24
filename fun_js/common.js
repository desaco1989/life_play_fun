//把URL后面的参数解析为对象 ,解决中文乱码
//window.location.href = "https://www.google.com/search?q=hello&oq=hello"
// 用户登录时，获取cookies
function parseURL(url){
    var url = url.split("?")[1];
    var para = url.split("&");
    var len = para.length;
    var res = {};
    var arr = [];
    for(var i=0;i<len;i++){
        arr = para.split("=");
        res[arr[0]] = arr[1];
    }
    return res;
}
//方法二：cookie传参
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for(var i=0;i<ca.length;i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1); 
        }
        if(c.indexof(cname) == 0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
//方法三：H5中Web Storage中的localStorage对象
function setCache(nickName) {
    localStorage.setItem("nickName",nickName);
    // localStorage.lastname = "lu";
}
function getCache(){
    var nickName = localStorage.getItem("nickName");
    return nickName;
    // localStorage.lastname;
}

