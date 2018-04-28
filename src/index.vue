<template>
<div>
    <h3>Components</h3>
    <p>{{ vue_hello }} MUGI</p>

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

<style scoped>
p {
    color: #777;
}
</style>
