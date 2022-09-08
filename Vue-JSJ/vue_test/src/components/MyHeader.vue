<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="additem"/>
    </div>
</template>

<script>
    // 引入生成id用的nanoid函数,由于nanoid使用的是分别暴露，因此需要使用{}括起来
    import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        data(){
            return{
                title:''
            }
        }, 
        methods:{
            // e为事件,e.target可以获取事件的DOM元素即input元素e.target.value可以获取值，但是这是DOM操作。
            additem(e){
                // 判断输入框是否为空，若空不添加
                if(!this.title.trim()) return alert('请勿输入空值或纯空格');
                // id为nanoid自动生成不同的id，done默认为false，待办事项默认未完成
                const todoObj = {id:nanoid(),title:this.title,done:false};
                // 清空input框的内容
                this.title=''
                // 将todoObj传入由App组件传入的addTodo函数中
                this.addTodo(todoObj);
            }
        },
        props:['addTodo']
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>