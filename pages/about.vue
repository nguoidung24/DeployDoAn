<template>
    <div v-motion :initial="{
        opacity: 0,
        y: 100,
    }" :enter="{
        opacity: 1,
        y: 0,
    }" :leave="{
        y: -100,
        opacity: 0,
    }">
    test
    </div>

</template>
<script>

export default {
    layout: "no-layout",

}
</script>
