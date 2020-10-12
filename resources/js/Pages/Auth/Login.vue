<template>
    <app-layout>
        <template #header>
            @guest
            1
            @else
            2
            @endguest
             ----{{ test }}
            <h1>admin</h1>
        </template>
    </app-layout>
</template>

<script>
    import AppLayout from './../../Layouts/AppLayout'
    import JetSectionBorder from './../../Jetstream/SectionBorder'

    export default {
      
        props:[
            'auth',
            'test'
        ],
        components: {
           AppLayout,
        },
    }
</script>

<style lang="scss" scoped>

</style>