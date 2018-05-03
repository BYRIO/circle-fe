<template>
<div class="c-landing">
    <div class="banner">
        <div class="bimg" style="background-image: url('/static/banner.jpg')">
        </div>
    </div>
    <div class="welcome">
        <div class="ctn_wide">
            <div class="slogan">
            </div>
            <div class="login">
                <div class="form">
                    <input placeholder="用户名" class="user opacity" type="text" />
                    <input placeholder="邮箱" class="email opacity" type="text" />
                    <input placeholder="密码" class="pass opacity" type="password" />
                </div>
                <div class="btns">
                    <a class="btn opacity noimpact btn_login" href="#">登陆</a>
                    <a class="btn opacity btn_register" href="#">立即注册</a>
                </div>
            </div>
        </div>
    </div>
    <div class="hot">
        <div class="psection psection-opacity circle ctn_wide">
            <h3 class="h">圈子</h3>
            <ul class="clist">
                <li><a href="#" class="c">
                    <h5>我的圈子<small class="count">68</small></h5>
                    <ul class="avatar_group">
                        <li class="more"> ... </li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                    </ul>
                </a></li>
                <li><a href="#" class="c">
                    <h5>我的圈子<small class="count">68</small></h5>
                    <ul class="avatar_group">
                        <li class="more"> ... </li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                    </ul>
                </a></li>
                <li><a href="#" class="c">
                    <h5>我的圈子<small class="count">68</small></h5>
                    <ul class="avatar_group">
                        <li class="more"> ... </li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                    </ul>
                </a></li>
                <li><a href="#" class="c">
                    <h5>主页</h5>
                    <ul class="avatar_group">
                        <li class="more"> ... </li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                    </ul>
                </a></li>
                <li><a href="#" class="c">
                    <h5>主页</h5>
                    <ul class="avatar_group">
                        <li class="more"> ... </li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                        <li><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
                    </ul>
                </a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            vue_hello: "hello"
        }
    }
}
</script>

<style scoped lang="stylus">
@import "./global.styl"
hot_height = 200px
.banner
    position fixed
    z-index -1
    .bimg::before
        width 100vw
        height 100vh
.welcome
    height "calc(100vh-%s)"%(topnav_height + hot_height)
    overflow visible
    .login
        width 300px
        float right
        text-align right
        color #FFF
        margin-top 20vh
        input
            width 100%
            display block
            padding 16px 0 8px 0
            font-size 14px
        .btns
            margin-top 20px
            .btn_login
                float left
            .btn_register
                width 190px
                text-align center
.hot
    overflow hidden
    .psection
        padding-left 0
</style>