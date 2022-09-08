<template>
    <ul class="todo-main">
        <!-- 向子组件MyItem传值时，需要使用:即v-bind才能将todoObj以对象形式传入，因为使用:时引号内才是表达式，否则会当成字符串传入 -->
        <!-- 在此必须绑定key，否则会报错 -->
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        components:{MyItem},
        props:['todos']    
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>