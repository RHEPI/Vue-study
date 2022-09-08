<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    // name值为外面组件import时所输入的名字，符合kebab-case命名规则，推荐写法为:
    // 一个单词组成的则大写首字母，多个字母组成的每个单词首字母大写。
    name:'School',
    data(){
        return{
            name:'河南工业大学',
            address:'河南省郑州市高新区'
        }
    }
}
</script>

<style>
    .demo{
        background-color: skyblue;
    }
</style>