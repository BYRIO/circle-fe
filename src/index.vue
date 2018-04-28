<template>
<div class="page">
<div class="topnav">
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
    <div class="mainhead">

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
        background #00000066

</style>
