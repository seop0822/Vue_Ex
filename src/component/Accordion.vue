<template>
    <div>
        <p>{{view_property.title + ' INSIDE'}}</p>
        <p @click="toggle=!toggle">Details</p>
        <p v-if="toggle">{{view_property.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props: ['view_property'],

        data: function () {
            return {
                toggle:false,
            }
        }
    }
</script>

<style scoped>

</style>