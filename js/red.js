$(document).ready(function() {
    // 點擊redbutton按鈕時執行以下全部
    $('.redbutton').click(function(){
        // 在帶有red樣式的div中添加shake-chunk樣式
        $('.red').addClass('shake-chunk');
        // 點擊按鈕2000毫秒後執行以下操作
        setTimeout(function(){
            // 在带有red樣式的div中删除shake-chunk樣式
            $('.red').removeClass('shake-chunk');
            // 將redbutton按鈕隱藏
            $('.redbutton').css("display" , "none");
            // 修改red 下 span   背景圖
            $('.red > span').css("background-image" , "url(../img/Red_Envelope/red-b.png)");
            // 修改red-jg的css顯示方式為塊
            $('.red-jg').css("display" , "block");
        },2000);
    });
});