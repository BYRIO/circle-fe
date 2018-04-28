<template>
<div class="page">
<div class="topnav ctn">
    <ul class="left">
        <li class="logo"><a href="/">BYRCIRCLE</a></li>
        <li><a href="/">IDEA</a></li>
        <li><a href="/">CONF</a></li>
        <li><a href="/">CAFE</a></li>
        <li><a href="/">BYRIOSC</a></li>
    </ul>
    <ul class="right">
        <li class="head"><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
        <li><a href="#">dimpurr</a></li>
        <li><a href="#">Q</a></li>
    </ul>
</div>
<div class="banner">
    <div class="bimg" style="background-image: url('/static/banner.jpg')">

    </div>
    <div class="mainhead ctn">
        <img class="head head_circle" src="/static/head.jpg">
        <h3>Dimpurr Cheny</h3>
        <h4>BUPT</h4>
        <h4>2017 SSE</h4>
        <p>ACMN / WEB / UI - 凛と伸びた花は今も きっと傍で咲き続けてる.</p>
    </div>
</div>
<div class="psection intro ctn">
    <h3 class="h">介绍</h3>
    <div class="content">
        <p>一点也不可爱的男孩子 / 萝莉控 / 机器学习 / 前端开发 / 交互设计 / 本子画师 / Gal脚本 / 帝都大学生 / 希望和有趣的人做有趣的事。</p>
        <p>主攻交互设计和前端开发。略懂用户体验和视觉设计，觉得字体艺术非常厉害。写页面向来无视浏览器兼容性，有失败的算法竞赛挑战经验。</p>
        <p>喜欢绘画可惜是个手残，想学编曲但是五音不全，不知何时能成为一位能自己画 PV 的 Vocaloid Producer 。偶尔写点故事。</p>
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
topnav_height = 48px
banner_height = 400px
.ctn
    max-width 700px
    margin 0 auto
    box-sizing border-box
.topnav
    box-sizing border-box
    height topnav_height
    ul
        list-style none
        margin 0
        padding 0
        li
            display inline
            vertical-align middle
            line-height 48px
            a
                color #FFFFFFDD
                text-decoration none
                font-weight bold
                margin 0 12px;
    .left, .right
        display inline-block
    .left
        .logo
            font-size 24px
    .right
        float right
        a
            font-weight lighter
        .head
            margin-right -18px
            img
                width 32px
                vertical-align middle
                // margin-bottom -(32/4)px
.head_circle 
    border-radius 100%
.banner
    margin-top -(topnav_height)
    .bimg
        // min-height banner_height
        background-size cover
    .bimg::before
        content ""
        display block
        width 100%
        height banner_height
        background #00000088
    .mainhead
        color #FFF
        height 100px
        margin-top -100px
        .head
            width 72px
            float left
            margin-right 10px
        h3, h4
            display inline-block
            margin 0
        h3
            font-size 22px
            margin-top 6px
            font-weight normal
            color #FFFFFFEE
        h4
            font-size 18px
            color #FFFFFF99
            font-weight lighter
        h4::before
            content "· "
        p
            margin 0
            margin-top 4px
            color #FFFFFFCC
            font-weight lighter
            font-size 14px
.psection
    padding-left 82px
    .h
        color #9a9a9a
        &::before
            content "C"
            display inline-block
            width 20px
            margin-left -25px
            margin-right 5px
    .content
        color #303030
        line-height 1.75em
        p
            margin 0.8em 0
</style>
