<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'于永波',
            age:22
        }
    }
}
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>