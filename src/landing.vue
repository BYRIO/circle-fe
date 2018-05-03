<template>
<div class="c-landing">
    <div class="welcome">
        <div class="ctn_wide">123</div>
    </div>
    <div class="banner">
        <div class="bimg" style="background-image: url('/static/banner.jpg')">
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
banner_height = 100vh
.banner
    .bimg::before
        height banner_height
.welcome
    height 0
    overflow visible
.hot
    height 200px
    overflow hidden
    margin-top -200px
    .psection
        padding-left 0
</style>