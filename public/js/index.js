// 登录注册
$(function () {
    // 登录注册切换
    $('#tab').find('ul li a').each(function () {
        var index;
        $(this).click(function () {
            console.log(1);
            index = $(this).parent().index();
            $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
            $(this).parents('ul').siblings('div').children('div:eq('+ index +')').show().siblings('div').hide();
        });
    });

    var registerBox = $('#registerBox');
    var loginBox = $('#loginBox');
    // 提交注册
    registerBox.find('.register-btn').on('click',function () {
        $.ajax({
            type:'POST',
            url:'api/user/register',
            data:{
                username:registerBox.find('[name="username"]').val(),
                password:registerBox.find('[name="password"]').val(),
                repassword:registerBox.find('[name="repassword"]').val(),
                mobile:registerBox.find('[name="mobile"]').val(),
                email:registerBox.find('[name="email"]').val()
            },
            dataType:'json',
            success:function (result) {
                alert(result.message);
                // 注册成功 去登录
                if(result.code == 4){
                    setTimeout(function () {
                        loginBox.show();
                        registerBox.hide();
                        $('.tab').find('a:eq('+ 0 +')').addClass('active');
                        registerBox.find('input').each(function () {
                            $(this).val('');
                        });
                    },4000)
                }
            }
        })
    });
    // 提交登录
    loginBox.find('.login-btn').on('click',function () {
        $.ajax({
            type:'POST',
            url:'api/user/login',
            data:{
                username:loginBox.find('[name="username"]').val(),
                password:loginBox.find('[name="password"]').val()
            },
            dataType:'json',
            success:function (result) {
                alert(result.message);
                // 登录成功
                if(result.code == 4){
                    loginBox.find('input').each(function () {
                        $(this).val('');
                    });
                }
            }
        })
    })
})
