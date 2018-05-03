<template>
<div class="page">
<div class="topnav">
    <div v-bind:class="{ ctn: ($route.path != '/'), ctn_wide: ($route.path == '/') }"><div>
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
    </div></div>
</div>
<router-view></router-view>
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
topnav_height = 48px
banner_height = 400px
.topnav
    box-sizing border-box
    height topnav_height
    .ctn > div
        margin 0 -12px
    ul
        nolist-ul()
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
.banner
    margin-top -(topnav_height)
    .bimg
        // min-height banner_height
        background-size cover
        background-position center
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
</style>
