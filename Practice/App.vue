<template>
  <div>
    <!-- 使用两个组件，在Vue中也需要使用div包裹着 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    // 1.引入School、Student组件
    import School from './School'
    import Student from './Student'
    export default {
        name:'App',
        // 2.注册两个组件
        components: {
            School,
            Student
        }
    }
</script>

<style>

</style>