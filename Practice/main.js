import App from './App'

new Vue({
    el:'#root',
    template:`
        <App></App>
    `,
    // 将汇总的App组件在此注册,此处的main.js又被称作入口函数，在此新建了Vue实例并绑定到了index.html中的div标签中
    components: {
        App
    }
})