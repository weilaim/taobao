<template>
    <taobao-layout>
        <template #header>
           <h2>This is Longin page</h2>
           {{ user }}
        </template>
    </taobao-layout>
</template>

<script>
    import TaobaoLayout from './../../Layouts/TaobaoLayout'
    import JetSectionBorder from './../../Jetstream/SectionBorder'

    export default {
      
        props:[
            'user'
        ],
        components: {
           TaobaoLayout,
        },
        mounted() {
            console.log(this.user)
        },
    }
</script>

<style lang="scss" scoped>

</style>