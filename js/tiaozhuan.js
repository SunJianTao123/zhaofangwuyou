$(function() {
    // 跳转注册
    $("#login").click(function() {
        // alert(1);
        location.href = "./zhuce.html";
    });
    // 跳转忘记密码
    $("div #forgetpassword").click(function() {
        location.href = "./zhaohuimima.html";
    });
    //跳转首页
    $("#home").click(function() {
        // alert(1);
        location.href = "./shouye.html";
    });

    $("section #home").click(function() {
        // alert(1);
        location.href = "./shouye.html";
    });
    //跳转租房列表
    $("#zufang").click(function() {
        // var index = $(this).index();
        location.href = "./zufangliebiao.html";
    });
    // 跳转我的
    $("#my-t").click(function() {
        location.href = "./wode.html";
    });
    //跳转登录
    $("#register").click(function() {
        location.href = "./denglu.html";
    });
    // 跳转房源信息
    $("#housing").click(function() {
        location.href = "./fangyuanxinxi.html";
    });
    //跳转详情页
    $("#ershoufang li").click(function() {
        location.href = "./xiangqingye.html";
    });
    // 跳转租房详情
    $("#zufanglist li").click(function() {
        location.href = "./fangyuanxinxi.html";
    });
    //跳转二手房列表
    $("#ershoufanglist").click(function() {
        location.href = "./ershoufangliebiao.html";
    });

    $("#guanzhuxiaoqu").click(function() {
        location.href = "./woguanzhudexiaoqu.html";
    });
    $("#xinfang").click(function() {
        location.href = "./xinfang.html";
    });
    $("#maifang").click(function() {
        location.href = "./maifang.html";
    });
})