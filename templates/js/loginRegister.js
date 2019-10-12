$("#loginButton").click(function(){
        var username=$("#name").val();
        if (username==""){
                alert("用户名不能为空！");
                return false;
        };
        var password=$("#pass").val();
        if (password==""){
                alert("密码不能为空！");
                return false;
        };


        $.ajax({
            url:"http://127.0.0.1:8000/api/login/",
            type:"POST",
            async : false,
            data:{
                "username":username,
                "password":password
            },
            success: function (data) {
                //返回1000成功，否则由后台程序报错，比如用户名和密码问题或者后台程序异常都在返回中的msg提示
                if(data.code == 1000){
                    $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie，同时用以实现前端跨页面通信
                    $.cookie("username", str_username, { expires: 7 });
                    $.cookie("password", str_password, { expires: 7 });
                    window.location.href = 'home.html'
                }else {
                    alert(data.msg)
                    return false
                }
            },
            error: function() {
                alert('登录失败，可能是您的网络出现问题或者联系我们')
                return false
            }
        })

});

$("#registerButton").click(function(){
        var username=$("#regname").val();
        if (username==""){
                alert("用户名不能为空！");
                return false;
        };
        var password=$("#regpass").val();
        if (password==""){
                alert("密码不能为空！");
                return false;
        };
        if( password != $('#reregpass').val() ){
            alert('两次输入密码不一致')
            return false
        }



        $.ajax({
            url:"http://127.0.0.1:8000/api/register/",
            type:"POST",
            async : false,
            data:{
                "username":username,
                "password":password
            },
            success: function (data) {
                //返回1000成功，否则由后台程序报错，比如用户名和密码问题或者后台程序异常都在返回中的msg提示
                if(data.code == 1000){
                    $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie，同时用以实现前端跨页面通信
                    $.cookie("username", str_username, { expires: 7 });
                    $.cookie("password", str_password, { expires: 7 });
                    window.location.href = 'home.html'
                }else {
                    alert(data.msg)
                    return false
                }
            },
            error: function() {
                alert('注册失败，可能是您的网络出现问题或者联系我们')
                return false
            }
        })

});






