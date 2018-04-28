<template>
<div class="page">
<div class="topnav ctn">
    <ul class="left">
        <li><a href="/">LOGO</a></li>
        <li><a href="/">IDEA</a></li>
        <li><a href="/">CONF</a></li>
        <li><a href="/">CAFE</a></li>
        <li><a href="/">BYRIOSC</a></li>
    </ul>
    <ul class="right">
        <li class="head"><a href="#"><img class="head_circle" src="/static/head.jpg"></a></li>
        <li><a href="#">dimpurr</a></li>
        <li><a href="#">SEARCH</a></li>
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
        <p>ACMN / WEB / UI - 千里之行始于足下.</p>
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
    .right
        float right
        .head
            img
                width 32px
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
            width 64px
            float left
            margin-right 10px
        h3, h4
            display inline
            font-weight normal
        h3
            font-size 22px
        h4
            font-size 18px
            color #FFFFFF99
        h4::before
            content "· "
        p
            margin 0
            color #FFFFFFCC
</style>
