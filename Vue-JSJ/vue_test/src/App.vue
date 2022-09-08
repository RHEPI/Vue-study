<template>
<div class="todo-container">
    <div class="todo-wrap">
        <!-- 头部添加任务部分，使用:才能传递表达式，固才可把addTodo函数传入MyHeader中 -->
        <MyHeader :addTodo="addTodo"></MyHeader>
        <!-- TodoList的身体部分,将todos数组传入MyList组件中 -->
        <MyList :todos="todos"></MyList>
        <!-- TodoList的底部，勾选和按钮 -->
        <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
    import MyList from './components/MyList.vue'
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    export default {
        name:'App',
        components:{
            MyList,
            MyFooter,
            MyHeader
        },
        // 将数据给父组件
        data(){
            return{
                todos:[
                    {id:'001',title:'滑板',done:true},
                    {id:'002',title:'健身',done:false},
                    {id:'003',title:'摩托',done:true}
                ]
            }
        },
        methods:{
            addTodo(todoObj){
                // 在todos数组的首部添加一个新的对象
                this.todos.unshift(todoObj);
            }
        }
    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>