<template>
    <li>
        <label>
            <!-- input标签中，加上:来动态的决定属性的值,加了:后checked等号后面的值为表达式,表达式的值为true，
                input标签拥有checked，此时为勾选状态。若表达式值为false，input标签没有checked属性，此时不打勾 -->
        <input type="checkbox" :checked="todo.done"/>
        <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        props:['todo']
    }
</script>

<style scoped>
    li {
        /* 列表项目样式为不使用项目符号 */
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        /* li的最后一个孩子元素的底部 */
        /* 在此设置底部边框的样式,取消底部边框 */
        border-bottom: none;
    }
</style>