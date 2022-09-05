## Vue核心

[TOC]

### 0.视频列表

- [x] 1
- [x] 2
- [x] 3
- [x] 4
- [x] 5
- [x] 6
- [x] 7
- [x] 8
- [x] 9
- [x] 10
- [x] 11
- [x] 12
- [x] 13
- [x] 14
- [x] 15
- [x] 16
- [x] 17
- [x] 18
- [x] 19
- [x] 20
- [x] 21
- [x] 22
- [x] 23
- [x] 24
- [x] 25
- [x] 26
- [x] 27
- [x] 28
- [x] 29
- [x] 30
- [x] 31
- [x] 32
- [x] 33
- [x] 34
- [x] 35
- [x] 36
- [x] 37
- [x] 38
- [x] 39
- [x] 40
- [x] 41
- [x] 42
- [x] 43
- [x] 44
- [x] 45
- [x] 46
- [x] 47
- [x] 48
- [x] 49
- [x] 50
- [x] 51
- [x] 52
- [x] 53
- [x] 54
- [ ] 55
- [ ] 56
- [ ] 57
- [ ] 58
- [ ] 59
- [ ] 60

### 1.Hello小案例

​		 1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；

​        2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；

​        3.root容器里的代码被称为【Vue模板】；

​        4.Vue实例和容器是一一对应的；

​        5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；

​        6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；

​        7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

一个容器只能被一个Vue实例接管，容器与实例一对一关系。

> 注意区分：js表达式 和 js代码(语句)
>
> ​            1.表达式（特殊的JS代码）：一个表达式会产生一个值，可以放在任何一个需要值的地方：
>
> ​                  (1). a
>
> ​                  (2). a+b
>
> ​                  (3). demo(1)
>
> ​                  (4). x === y ? 'a' : 'b'
>
> 
>
> ​            2.js代码(语句)
>
> ​                  (1). if(){}
>
> ​                  (2). for(){}

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>初识Vue</title>
</head>
<body>
    <!-- 准备好的容器 -->
    <div id="root">
        <h1>{{name}}</h1>
    </div>
    <script>
        Vue.config.productionTip=false;
        //在此也可以不用const vm = new Vue();创建
        new Vue({
            // el为element,用于指定当前Vue实例为哪个容器服务，值通常为CSS选择器字符串
            el:'#root',
            data:{//data用于存储数据，数据供el所指定的容器使用，在此值暂时写成一个对象
                name:'皮皮波'
            }
        });
    </script>
</body>
</html>
```

### 2.模板语法

#### 2.1插值语法

功能：**用于解析标签体内容**。

写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

#### 2.2指令语法

功能：**用于解析标签**（包括：标签属性、标签体内容、绑定事件.....）。

在此v-bind用于解析**标签属性**。

> 举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性。
>
> 备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。

在此创建data中的数组，及指令语法中的v-bind。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>初识Vue</title>
</head>
<body>
    <!-- 准备好的容器 -->
    <div id="root">
        <h1>{{name}}</h1>
        <h2>name:{{school.name}},address:{{school.address}}</h2>
        <a v-bind:href="house">测试插值属性</a>
        <a :href="house">测试插值属性</a>
    </div>
    <script>
        Vue.config.productionTip=false;
        //在此也可以不用const vm = new Vue();创建
        new Vue({
            // el为element,用于指定当前Vue实例为哪个容器服务，值通常为CSS选择器字符串
            el:'#root',
            data:{//data用于存储数据，数据供el所指定的容器使用，在此值暂时写成一个对象
                name:'外层的name属性',
                school:{
                    name:'于永波',
                    address:'河南省周口市'
                },
                house:'http://www.pipibo.top'
            }
        });
    </script>
</body>
</html>
```

### 3.数据绑定

Vue中有2种数据绑定的方式：

​          1.单向绑定(v-bind)：数据只能从data流向页面。

​          2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

​            备注：

​                **1.双向绑定一般都应用在表单类元素上（如：input、select等）**

​                2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="demo">
        <!-- 普通写法 -->
        <label for="">数据的单向绑定</label><input type="text" v-bind:value="name"> <br>
        <label for="">数据的双向绑定</label><input type="text" v-model:value="name"> <br>

        <!-- 简写 -->
        <label for="">数据的单向绑定</label><input type="text" :value="name"> <br>
        <label for="">数据的双向绑定</label><input type="text" v-model="name"> <br>
    </div>

        <!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
		<!-- <h2 v-model:x="name">你好啊</h2> -->
    <script>
        new Vue({
            el:'#demo',
            data:{ 
                name:'皮皮波'
            }
        });
    </script>

</body>
</html>
```

### 4. el与data的两种写法

data与el的2种写法

- el有2种写法

​                  (1).new Vue时候配置el属性。

​                  (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

- data有2种写法

​                  (1).对象式data:{}

​                  **(2).函数式data(){return{}}**后面只用这种

​                  如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

- 一个重要的原则：

​                  由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>我的名字是:{{name}}</p>
    </div>

    <script>
        const vm = new Vue({
            // el的第一种写法
            el:'#root',
            // data的第一种写法：对象式
            // data:{ 
            //     name:'于永波'
            // }
            // data的第二种写法：函数式
            data(){     //直接写小括号，此时函数内的this为Vue
                return{
                    name:'于永波'
                }
            }
            // data:function(){    //写function，此时函数内this为Vue
            //     return{
            //         name:'于永波'
            //     }
            // }
            // data:()=>{   //写成箭头函数，此时函数内的this为window
            //     return{ 
            //         name:'于永波'
            //     }
            // }
        });
        // // el的第二种写法
        // vm.$mount('#root');
        
    </script>
</body>
</html>
```

### 5.MVVM模型

MVVM模型

- M：模型(Model) ：data中的数据

-  V：视图(View) ：模板代码

- VM：视图模型(ViewModel)：Vue实例

观察发现：

- data中所有的属性，最后都出现在了vm身上。
- vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

### 6.数据代理

#### 6.1 Object.defineProperty

JS中的语句，在Vue中也会使用到。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>回顾Object.defineproperty方法</title>
	</head>
	<body>
		<script type="text/javascript" >
			let number = 18
			let person = {
				name:'张三',
				sex:'男',
			}

			Object.defineProperty(person,'age',{
				// value:18,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
					console.log('有人读取age属性了')
					return number
				},
				//个人理解：相当于通过defineProperty和number变量给person封装了个变量
				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('有人修改了age属性，且值是',value)
					number = value
				}

			})

			// console.log(Object.keys(person))

			console.log(person)
		</script>
	</body>
</html>
```

#### 6.2 对数据代理的理解

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Object.defineProperty回顾</title>
</head>
<body>
    <script>
        let obj1 = {x:100}
        let obj2 = {y:200}
        Object.defineProperty(obj2,'x',{
            get(){
                return obj1.x
            },
            set(value){
                obj1.x=value
            }
        })
    </script>
</body>
</html>
```

#### 6.3 Vue中的数据代理

1.Vue中的数据代理：

- 通过vm对象来代理data对象中属性的操作（读/写）

2.Vue中数据代理的好处：

- 更加方便的操作data中的数据

3.基本原理：

- 通过Object.defineProperty()把data对象中所有属性添加到vm上。

- 为每一个添加到vm上的属性，都指定一个getter/setter。

- 在getter/setter内部去操作（读/写）data中对应的属性。

ps:

- 只有放在data里的数据才会做数据劫持、数据代理

### 7.事件处理

事件的基本使用：

- 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；

- 事件的回调需要配置在methods对象中，最终会在vm上；

- methods中配置的函数，不要用箭头函数！否则this就不是vm了；

- methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；

- @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
- 使用@click="demo"时，methods中小括号内可以写一个变量(event)来获得该事件的event

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>这次测试的主题为:{{subject}}</p> <br>
        <!-- v-on:绑定的函数不传参数时可以只写函数名 -->
        <button v-on:click="tipmessage">提示</button>
        <!-- v-on:绑定的函数也可以传参数，当参数第一个写$event时表示传入该事件的event，后面的参数可以自己定义 -->
        <button v-on:click="tipmessage2($event,666)">提示</button>

    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    subject:'Vue测试'
                }
            },
            methods: {
                tipmessage(event){
                    //此时的this为vm，但是如果使用tipmessage:(e)=>{}的方式构造函数的话，this为window
                    // event的target即这个点击事件的dom元素，innerText为该dom元素的值
                    console.log(event.target.innerText);
                    console.log("function1's event is:",event);
                    alert("this is a tip");
                },
                tipmessage2(event,number){
                    console.log("function2's event is:",event);
                    alert("this is a ",number);
                }
            }
        });
    </script>
</body>
</html>
```

#### 2.10事件修饰符

前三个修饰符较为常用。

可以连续写修饰符，如：@click.prevent.stop="showInfo"

1. prevent：阻止默认事件（常用）；
2. stop：阻止事件冒泡（常用）；
3. once：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；（JS默认先捕获，后冒泡，且在冒泡时执行事件）
5. self：只有event.target是当前操作的元素时才触发事件；（在冒泡情况下，event.target有可能是内部Dom）
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；（不加的话先执行事件，事件执行后触发默认行为）用于移动端

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<!-- 
				Vue中的事件修饰符：
						1.prevent：阻止默认事件（常用）；
						2.stop：阻止事件冒泡（常用）；
						3.once：事件只触发一次（常用）；
						4.capture：使用事件的捕获模式；
						5.self：只有event.target是当前操作的元素时才触发事件；
						6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 
				当设定了多个div的嵌套时；即建立了父子关系，当父div与子div共同加入了onclick事件时，
                当触发了子div的onclick事件后，子div进行相应的js操作。但是父div的onclick事件同样会被触发。
                这就造成了事件的多层并发，导致了页面混乱。这就是冒泡事件。
			 -->

			<!-- 阻止事件冒泡（常用） -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
				<!-- 修饰符可以连续写 -->
				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
			</div>

			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					alert('同学你好！')
					// console.log(e.target)
					// e.stopPropagation() //JS原生阻止冒泡事件发生的方法
                    // e为点击时的事件
                    // e.preventDefault(); //JS原生代码，组织默认事件的发生
                    // 也可以通过Vue的事件修饰符进行操作，如在@click或v-on:click后面加.prevent即事件修饰符来实现
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```

#### 2.11键盘事件

​        1.Vue中常用的按键别名：

> 回车 => enter
>
>  删除 => delete (捕获“删除”和“退格”键)
>
> 退出 => esc
>
> 空格 => space
>
> 换行 => tab (特殊，必须配合keydown去使用)tab与keyup配合无效。
>
> 上 => up
>
> 下 => down
>
> 左 => left
>
> 右 => right



​        2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名），如键盘按键的CapsLock需用caps-lock表示，即keyup.caps-lock="事件"

​        3.系统修饰键（用法特殊）：ctrl、alt、shift、meta

> 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。且@keyup.ctrl.y="" 即可设置成ctrl+y按键才可触发事件
>
> 配合keydown使用：正常触发事件。



​        4.也可以使用keyCode去指定具体的按键（不推荐）



​        5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				1.Vue中常用的按键别名：
							回车 => enter
							删除 => delete (捕获“删除”和“退格”键)
							退出 => esc
							空格 => space
							换行 => tab (特殊，必须配合keydown去使用)tab与keyup配合无效。
							上 => up
							下 => down
							左 => left
							右 => right

				2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

				3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
							(1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
							(2).配合keydown使用：正常触发事件。

				4.也可以使用keyCode去指定具体的按键（不推荐）

				5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)		//可以输出事件的键盘按键及对应的按键码
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```

### 8计算属性

data中的数据发生变化时Html中的Vue模板需要重新解析，若在模板中调用方法，方法也会刷新，因此页面中的数据也会变化。

根据姓名案例的三种实现方法来学习计算属性：1插值语法实现、2methods方法实现、3计算属性实现。

- 插值语法实现：

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_插值语法实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{firstName}}-{{lastName}}</span>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			}
		})
	</script>
</html>
```

- methods方法实现

插值中可以写入函数进行调用

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <input type="text" v-model="firstname">
        <input type="text" v-model="secondname">
        <p>全名：{{fullname()}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'皮皮波',
                    firstname:'于',
                    secondname:'永波'
                }
            },
            methods: {
                fullname(){
                    return this.firstname+'-'+this.secondname
                }
            }
        });
    </script>
</body>
</html>
```

#### 8.1计算属性实现

被Vue管理的函数不要写成箭头函数。

 计算属性：

- 定义：要用的属性不存在，要通过已有属性计算得来。

- 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

- get函数什么时候执行？

> (1).初次读取时会执行一次。
>
> **(2).当依赖的数据发生改变时会被再次调用。**

- set什么时候调用? 当fullName被修改时。
- 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。

- 备注：

> (1).计算属性最终会出现在vm上，直接读取使用即可。
>
> (2).如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    
    <div id="root">
        <input type="text" v-model="firstname">
        <input type="text" v-model="lastname">
        <p>{{fullName}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    firstname:'于',
                    lastname:'永波'
                }
            },
            computed: {
                fullName:{
                    // get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                    // get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
                    get(){
                        // console.log(this) //此处的this是vm
                        //计算属性中获取属性值
                        return this.firstname+'-'+this.lastname
                    },
                    // set什么时候调用? 当fullName被修改时。
                    set(value){
                        // JS语法：按照-来分隔，并存入数组arr中
                        const arr = value.split('-');
                        this.firstname=arr[0];
                        this.lastname=arr[1];
                    }
                }
            }
        });
    </script>
</body>
</html>
```

#### 8.2计算属性简写方式

计算属性更多时候是不修改的。因此简写即不考虑set的情况下，只允许通过get获取计算属性的值。

写法：即fullName:function(){}  更精简后更常写为**fullName(){}**看似函数，实则为计算属性，且括号内写get中的函数内容

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    
    <div id="root">
        <input type="text" v-model="firstname">
        <input type="text" v-model="lastname">
        <p>{{fullName}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    firstname:'于',
                    lastname:'永波'
                }
            },
            computed: {
                // 简写：不考虑set的情况下，只允许通过get获取计算属性的值
                // 即fullName:function(){}  更精简后为fullName(){}看似函数，实则为计算属性，且括号内写get中的函数内容
                fullName(){
                    return this.firstname+'-'+this.lastname;
                }
            }
        });
    </script>
</body>
</html>
```

### 9监视属性

监视属性前的小练习

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>today is {{info}}</p>
        <button @click="changeWeather">切换</button>
        <!-- 在事件的绑定""中可以写一些简单的语句，上面的button有下面的写法如@xxx="yyy" yyy可以写一些简单的语句 -->
        <!-- 在此不需要写this，因为模板内就直接在vm这个Vue对象中，但是无法用window中的方法，除非很恶心的吧window写在data中,并window.alert()调用。但是没必要。 -->
        <button @click="isHot=!isHot">切换</button>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    isHot:true
                }
            },
            computed: {
                // 计算属性的简写形式
                info(){
                    return this.isHot ? '炎热' : '凉爽';
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot;
                    return this.isHot;
                }
            }
        });
    </script>
</body>
</html>
```

#### 9.1监视属性

监视属性watch：

- 当被监视的属性变化时, 回调函数(handler)自动调用, 进行相关操作

- 监视的属性必须存在，才能进行监视！！

- 监视的两种写法：

> (1).new Vue时传入watch配置，**属性:{}**在{}内写handler等语句。
>
> (2).通过vm.$watch监视，第一个参数为监视的属性，第二个参数内为{}内写监视的函数handler等

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>today is {{info}}</p>
        <button @click="changeWeather">切换</button>
    </div>

    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    isHot:true
                }
            },
            computed: {
                // 计算属性的简写形式
                info(){
                    return this.isHot ? '炎热' : '凉爽';
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot;
                    return this.isHot;
                }
            },
            // 第一种监视方法 也可以监视计算属性
            watch: {
                info:{
                    // immediate设置是否立即执行
                    immediate:true,
                    // handler即回调函数
                    handler(newValue,oldValue){
                        console.log('infot改变了'+newValue+'  '+oldValue);
                    }
                }
            }
        });

        // 第二种监视方法，第一个参数为监视的属性，第二个参数内为{}内写监视的函数handler等
        vm.$watch('isHot',{
            immediate:true,
            handler(newValue,oldValue){
                console.log('isHot改变了'+newValue+'  '+oldValue);
            }
        });
    </script>
</body>
</html>
```

#### 9.2深度监视

- 深度监视：

> (1).Vue中的watch默认不监测对象内部值的改变（一层）。
>
> (2).在watch中的相应属性中配置deep:true可以监测对象内部值改变（多层）。

- 备注：

> (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
>
> (2).使用watch时根据数据的具体结构，决定是否采用深度监视。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>today is {{info}}</p>
        <button @click="changeWeather">切换</button>
        <p>value a is {{number.a}}</p>
        <button @click="number.a++">令a+1</button>
        <p>value b is {{number.b}}</p>
        <button @click="number.b++">令b+1</button>
    </div>

    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    isHot:true,
                    number:{
                        a:1,
                        b:2,
                        c:3
                    }
                }
            },
            computed: {
                // 计算属性的简写形式
                info(){
                    return this.isHot ? '炎热' : '凉爽';
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot;
                    return this.isHot;
                }
            },
            // 第一种监视方法 也可以监视计算属性
            watch: {
                // 此处info为简写方式，原写法为"info"
                info:{
                    // immediate设置是否立即执行
                    // immediate:true,
                    // handler即回调函数
                    handler(newValue,oldValue){
                        console.log('infot改变了'+newValue+'  '+oldValue);
                    }
                },
                //检测number属性的内部值a
                // 'number.a':{
                //     handler(newValue,oldValue){
                //         console.log('number中的数据发生了改变',newValue+'  '+oldValue);
                //     }
                // },
                //检测number属性的任意内部值
                'number':{
                    deep:true,
                    handler(){
                        console.log("number内部的数据改变了");
                    }
                }
            }
        });

    </script>
</body>
</html>
```

#### 9.3监视的简写形式

- watch:{}中的简写形式：

```vue
info(newValue,oldValue){
	console.log('weather is changed'+newValue+'  '+oldValue);
}
```

- vm对象外的简写形式：

```vue
vm.$watch('info',function(newValue,oldValue){
	console.log('weather is changed'+newValue+'  '+oldValue);
});
```

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <p>today is {{info}}</p>
        <button @click="changeWeather">切换</button>
    </div>

    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    isHot:true
                }
            },
            computed: {
                // 计算属性的简写形式
                info(){
                    return this.isHot ? '炎热' : '凉爽';
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot;
                    return this.isHot;
                }
            },
            // 第一种简写的监视
            watch: {
                // 此时info直接简写成函数形式，此时的函数即handle，注意不可写成箭头形式，否则this会发生改变
                // info(newValue,oldValue){
                //     console.log('weather is changed'+newValue+'  '+oldValue);
                // }
            }
        });

        // 第二种简写的监视，二者均只能写handler函数。
        vm.$watch('info',function(newValue,oldValue){
            console.log('weather is changed'+newValue+'  '+oldValue);
        });

    </script>
</body>
</html>
```

### 10对比watch和computed

computed和watch之间的区别：

- computed能完成的功能，watch都可以完成。
- watch能完成的功能，computed不一定能完成，**例如：watch可以进行异步操作。**

#### 10.1关于函数写法的两个重要的小原则：

- **所被Vue管理的函数，最好写成普通函数（即不是箭头函数），这样this的指向才是vm 或 组件实例对象。**

- **所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。**

##### 1.通过watch实现上述的姓名案例

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_watch实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				fullName:'张-三'
			},
			watch:{
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				},
				lastName(val){
					this.fullName = this.firstName + '-' + val
				}
			}
		})
	</script>
</html>
```

##### 2.通过computed实现姓名案例

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_计算属性实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
			},
			computed:{
				//简写
				fullName(){
					console.log('get被调用了')
					return this.firstName + '-' + this.lastName
				}
			}
		})
	</script>
</html>
```

通常来说二者都能实现一些需要的功能，但是当需要实现一些额外功能时watch可以实现computed无法实现的内容。且computed属性无法开启异步任务维护数据，但是watch可以。

### 11绑定class样式

class样式

写法:class="xxx" xxx可以是字符串、对象、数组。

- 字符串写法适用于：类名不确定，要动态获取。

- 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。

- 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。

```vue
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <style>
        .basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			
			.happy{
				border: 4px solid red;;
				background-color: rgba(255, 255, 0, 0.644);
				background: linear-gradient(30deg,yellow,pink,orange,yellow);
			}
			.sad{
				border: 4px dashed rgb(2, 197, 2);
				background-color: gray;
			}
			.normal{
				background-color: skyblue;
			}

			.atguigu1{
				background-color: yellowgreen;
			}
			.atguigu2{
				font-size: 30px;
				text-shadow:2px 2px 10px red;
			}
			.atguigu3{
				border-radius: 20px;
			}
    </style>
    <title>Document</title>
</head>
<body>
    
    <div id="root">
        <!-- 正常样式正常写，变化的样式通过v-bind即:来绑定元素，二者在前端会汇总起来 -->
        
        <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
        <!-- <div class="basic" :class="mood" @click="changemood">
            <p>this mood is:{{type}}</p>
        </div> -->

        <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
        <div class="basic" :class="arr">
            测试字体
        </div>

        <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
        <!-- <div class="basic" :class="styObj">
            测试字体
        </div> -->
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 字符串写法
                    // mood:'happy',
                    // type:'basic'

                    // 数组写法
                    arr:['atguigu1','atguigu2','atguigu3'],

                    // 对象写法
                    // styObj:{
                    //     atguigu1:true,
                    //     atguigu2:true
                    // }
                }
            },
            methods: {
                // changemood(){
                //     //字符串写法
                //     let arr = ['happy','sad','normal'];
                //     this.mood=arr[Math.floor(Math.random()*3)];
                //     this.type=this.mood;
                // }
            }
        });
    </script>
</body>
</html>
```

### 12绑定style样式

**:style="{fontSize: xxx}"其中xxx是动态值。**

且xxx需与css中的属性相对应，如background-color写作backgroundColor,即把css中的-去掉，把-连接的后面的单词首字母设置为大写。单个字母的属性不需要修改，多字母-连接的需要修改。

**:style="[a,b]"其中a、b是样式对象。**

```vue
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <style>
        .basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			
			.happy{
				border: 4px solid red;;
				background-color: rgba(255, 255, 0, 0.644);
				background: linear-gradient(30deg,yellow,pink,orange,yellow);
			}
			.sad{
				border: 4px dashed rgb(2, 197, 2);
				background-color: gray;
			}
			.normal{
				background-color: skyblue;
			}

			.atguigu1{
				background-color: yellowgreen;
			}
			.atguigu2{
				font-size: 30px;
				text-shadow:2px 2px 10px red;
			}
			.atguigu3{
				border-radius: 20px;
			}
    </style>
    <title>Document</title>
</head>
<body>
    
    <div id="root">
        <!-- 正常样式正常写，变化的样式通过v-bind即:来绑定元素，二者在前端会汇总起来 -->
        
        <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
        <!-- <div class="basic" :class="mood" @click="changemood">
            <p>this mood is:{{type}}</p>
        </div> -->

        <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
        <div class="basic" :class="arr">
            测试字体
        </div>

        <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
        <!-- <div class="basic" :class="styObj">
            测试字体
        </div> -->

        <!-- 绑定style样式--对象写法 -->
        <div class="basic" :style="styleObj">
            测试字体
        </div>
        <!-- 绑定style样式--数组写法 -->    
        <div class="basic" :style="styleArr">
            测试字体
        </div>

    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 字符串写法
                    // mood:'happy',
                    // type:'basic'

                    // 数组写法
                    arr:['atguigu1','atguigu2','atguigu3'],

                    // 对象写法
                    // styObj:{
                    //     atguigu1:true,
                    //     atguigu2:true
                    // },

                    //style的对象写法,style对象中的key需于css中对应
                    styleObj:{
                        // font-size在此写作fontSize才能识别
                        fontSize:'40px',
                        // background-color写作backgroundColor,即把css中的-去掉，把-连接的后面的单词首字母设置为大写
                        backgroundColor:'red'
                    },
                    //style的数组写法,定义一个数组，数组里是多个对象
                    styleArr:[
                        {
                            // background-color写作backgroundColor,即把css中的-去掉，把-连接的后面的单词首字母设置为大写
                            backgroundColor:'red'
                        },
                        {
                            // font-size在此写作fontSize才能识别
                            fontSize:'40px',
                        }
                    ]
                }
            },
            methods: {
                // changemood(){
                //     //字符串写法
                //     let arr = ['happy','sad','normal'];
                //     this.mood=arr[Math.floor(Math.random()*3)];
                //     this.type=this.mood;
                // }
            }
        });
    </script>
</body>
</html>
```

### 13条件渲染

#### 1.v-if

写法：

- v-if="表达式" 

- v-else-if="表达式"

- .v-else="表达式"

> 适用于：切换频率较低的场景。
>
> 特点：不展示的DOM元素直接被移除。
>
> 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。
>
> 注意：v-if等需要判断的语句中间不能夹杂别的DOM元素，否则会打断if-else等判断。

#### 2.v-show

写法：

- v-show="表达式"

> 适用于：切换频率较高的场景。
>
> 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

固：**使用v-if的时DOM可能会被直接移除，导致元素可能无法获取到，而使用v-show一定可以获取到。**

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
			<!-- 使用v-show做条件渲染 -->
			<!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- 使用v-if做条件渲染 -->
			<!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- v-else和v-else-if -->
			<!-- <div v-if="n === 1">Angular</div>
			<div v-else-if="n === 2">React</div>
			<div v-else-if="n === 3">Vue</div>
			<div v-else>哈哈</div> -->

			<!-- v-if与template的配合使用 -->
			<template v-if="n === 1">
				<h2>你好</h2>
				<h2>尚硅谷</h2>
				<h2>北京</h2>
			</template>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:0
			}
		})
	</script>
</html>
```

### 14列表渲染

v-for指令:

- 用于展示列表数据

- 语法：v-for="(item, index) in xxx" :key="yyy"

- 可遍历：**数组、对象**、字符串（用的很少）、指定次数（用的很少），测试一下就可以知道v-for的第一个小括号里的值都表示什么意思。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- 遍历数组，在此为对象数组，取出的第一个p为对象，第二个index为索引 -->
        <ul>
            <li v-for="(p,index) in persons" :key="index">{{p.id}}---{{p.name}}----{{p.age}}-----index:{{index}}</li>
        </ul>

        <!-- 遍历对象，在此第一个value为对象中的属性值，第二个property为属性名称 -->
        <ul>
            <li v-for="value,property in car">属性:{{property}}----值:{{value}}</li>
        </ul>
		
			<!-- 遍历字符串 -->
			<h2>测试遍历字符串（用得少）</h2>
			<ul>
				<li v-for="(char,index) of str" :key="index">
					{{char}}-{{index}}
				</li>
			</ul>
			
			<!-- 遍历指定次数 -->
			<h2>测试遍历指定次数（用得少）</h2>
			<ul>
				<li v-for="(number,index) of 5" :key="index">
					{{index}}-{{number}}
				</li>
			</ul>
        
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 定义一个对象数组
                    persons:[
                        {id:001,name:'皮皮波',age:15},
                        {id:002,name:'波波皮',age:16},
                        {id:003,name:'波皮波',age:22}
                    ],
                    car:{
                        name:'春风250SR',
                        price:"16800",
                        cc:'250cc'
                    }
                }
            }
        });
    </script>
</body>
</html>
```

### 15Key的作用与原理

- 虚拟DOM中key的作用：

> 变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
>
> 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

- 对比规则：

> (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
> 	①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
> 	②.若虚拟DOM中内容变了, 则将虚拟DOM中发生变化的内容改变，没有发生变化的内容不变，并生成新的真实DOM，随后替换掉页面中之前的真实DOM。
>
> (2).旧虚拟DOM中未找到与新虚拟DOM相同的key
> 创建新的真实DOM，随后渲染到到页面。

- 用index作为key可能会引发的问题：

> 破坏顺序操作:
> 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
>
> 如果结构中还包含输入类的DOM：
>     会产生错误DOM更新 ==> 界面有问题。

- 开发中如何选择key?:

> 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
> 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
> 使用index作为key是没有问题的。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- 遍历数组，在此为对象数组，取出的第一个p为对象，第二个index为索引 -->
        <!-- 在此测试v-for时key的作用 -->
        <ul>
            <li v-for="(p,index) in persons" :key="p.id">
                {{p.id}}---{{p.name}}----{{p.age}}-----index:{{index}}  <input type="text">
            </li>
            <button @click="addperson">点击添加</button>
        </ul>

    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 定义一个对象数组
                    persons:[
                        {id:001,name:'皮皮波',age:15},
                        {id:002,name:'波波皮',age:16},
                        {id:003,name:'波皮波',age:22}
                    ]
                }
            },
            methods: {
                addperson(){
                    const person = {id:004,name:'新波波',age:25};
                    // JS语法：从数组的顶部添加一个对象。从底部添加的语法为push。
                    this.persons.unshift(person);
                }
            }
        });
    </script>
</body>
</html>
```

### 16列表过滤

通过一个例子，v-for输出一个列表，在上面使用一个input标签，输入字来模糊查询列表中的元素并显示。

注意过滤器的写法，

```js
// 过滤器，在filter()中使用箭头函数，箭头函数中的p代表数组中的对象元素
// return中所写为过滤的条件，返回的为Persons数组中的符合条件的对象组成的数组。
this.person = this.Persons.filter((p)=>{
// indexOf查找p对象中符合name属性条件值的对象，并返回其在数组中的下标，寻找不到便返回-1
return  p.name.indexOf(value) !== -1
}
```

- 通过watch实现

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>人员名单</h2>
        <input type="text" v-model="keyword">
        <ul>
            <li v-for="p in person">{{p.name}}---{{p.age}}---{{p.sex}}</li>
        </ul>
    </div>
    
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 定义一个Persons数组
                    Persons:[
                        {id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
                    ],
                    person:[],
                    keyword:''
                }
            },
            watch: {
                // keyword的watch实现方法
                keyword:{
                    immediate:true,
                    // 在
                    handler(value){
                        	// 过滤器，在filter()中使用箭头函数，箭头函数中的p代表数组中的对象元素，
                        	// return中所写为过滤的条件，返回的为Persons数组中的符合条件的对象组成的数组。
                        	this.person = this.Persons.filter((p)=>{
                            // indexOf查找p对象中符合name属性条件值的对象，并返回其在数组中的下标，寻找不到便返回-1
                            return  p.name.indexOf(value) !== -1
                        })
                    }
                }
            }
        });
    </script>
</body>
</html>
```

- 通过计算属性实现

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>人员名单</h2>
        <input type="text" v-model="keyword">
        <ul>
            <li v-for="p in person">{{p.name}}---{{p.age}}---{{p.sex}}</li>
        </ul>
    </div>
    
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // 定义一个Persons数组
                    Persons:[
                        {id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
                    ],
                    keyword:''
                }
            },
            computed: {
                person(){
                    //此方法可以得到一个符合条件的新数组，由于计算属性简写情况下直接是get函数，所以还需要在外层写一个return
                    	return this.Persons.filter((p)=>{
                        // 刚开始时keyword为空，此时所有项均符合，使用indexOf的话返回的是0
                        return p.name.indexOf(this.keyword) !== -1
                    })
                }
            }
        });
    </script>
</body>
</html>
```

### 17列表排序

使用到的知识点：

数组的sort方法中需传入两个参数，例p1,p2，如需数组升序则前-后即p1-p2。如需数组降序则后-前即p2-p1。在此的sort方法需要用箭头函数。sort方法会改变原数组。

**常常需要思考的问题：方法能收到什么参数、需不需要返回值、改不改变原值？**

- filter的使用方法
- sort的使用方法,都是**数组.方法(()=>{})**

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>姓名列表</h2>
        <input type="text" placeholder="请输入姓名进行查找" v-model="keyWord">
        <button @click="listType=1">升序排列</button>
        <button @click="listType=2">降序排列</button>
        <button @click="listType=0">原样排列</button>   <br>
        <ul>
            <li v-for="p in Person">姓名：{{p.name}}----年龄：{{p.age}}----性别：{{p.sex}}</li>
        </ul>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    keyWord:'',
                    listType:0,
                    Persons:[
                        {id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
                    ]
                }
            },
            computed: {
                Person(){
                    //筛选出符合keyWord的数组中的对象
                    const arr = this.Persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    });
                    // 如果listType不为0则表示需要升降序
                    if(this.listType){
                        // 由于数组内为对象，因此p1和p2均为对象，排序方法为：前-后为升序，后-前为降序
                        // 数组的sort方法需要传两个参数进去，前-后为升，后-前为降
                        arr.sort((p1,p2)=>{
                            //在此得出的值返回给sort做参数，arr数组排序后修改自身
                            return this.listType === 1 ? p1.age-p2.age : p2.age-p1.age;
                        })
                    }
                    //直接返回原数组符合条件的数据
                    return arr;
                }
            }
        });
    </script>
</body>
</html>
```

### 18Vue数据检测

#### 18.1Vue检测数据的原理(对象)

在此实例模拟_data添加get和set的过程。

> 从data中的数据到vue实例中的**_data**中的数据有两步，1)先加工data数据添加get、set等，2)将其数据赋值给**-data**中。其中当数据变化后对比虚拟DOM并刷新页面的操作就存在于set中，即Vue监控数据的原理实现在set中。

Vue检测对象数据的改变实例：

```js
    <script>
        let data = {
				name:'尚硅谷',
				address:'北京',
		}
        
        // 根据data新建一个具有get和set的对象。
        const obs = new Observer(data);

        let vm = {};
        vm._data = obs;

        //新建一个初始化函数
        function Observer(obj){
            // keys数组读取到obj对象的所有属性值
            const keys = Object.keys(obj);
            // 遍历keys中的每个属性k
            keys.forEach((k)=>{
                // 在此的this为obj对象，为obj对象添加属性
                Object.defineProperty(this,k,{
                    get(){
                        // k在此是一个字符串值，返回obj中k属性的属性值
                        // 传入的对象身上的k所对应的属性值被修改。obj[k]就是将属性k的属性值拿过来，此时的k是属性名，相当于一个字符串。
                        return obj[k]
                    },
                    // set可以获得一个最新的值作为参数
                    set(val){
                        obj[k] = val;
                    }
                })
            })
        }
    </script>
```

#### 18.2Vue.set()方法

> - methods里面的方法，正常写（不写箭头函数）的话，this就是vm。
>
> - 局限：Vue.set()只能给data中的某个对象添加属性，而不能给data添加属性。即Vue.set的对象不能是Vue实例或Vue实例的根数据对象。如下代码中只能给this.school对象添加名为leader的属性，却不能直接给this（vm）添加一个leader。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h1>学校信息</h1>
        <h2>学校名称：{{school.name}}</h2>
        <h2>学校地址：{{school.address}}</h2>
        <h2 v-if="school.leader">学校校长：{{school.leader}}</h2>
        <button @click="addleader">添加校长</button>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    school:{
                        name:'河南工业大学',
                        address:'河南郑州'
                    }
                }
            },
            methods: {
                addleader(){
                    // Vue.set(this.school,'leader','于永波')
                    this.$set(this.school,'leader','于永波')
                }
            }
        })
    </script>
</body>
</html>
```

#### 18.3Vue检测数据的原理(数组)

JS对数组的操作：push、pop、shift、unshift、splice、sort、reverse。调用时会引起自身的改变，进而才会使得Vue检测到数据的变化并更新页面。而不能直接寻找到数组的下标然后修改相应值（did'nt work）。

但是需要注意的是在Vue中针对数组使用以上七个操作所操作数组的方法，并不是JS原生的。即Vue对侦听数组变更的方法进行了包裹，Vue中的以上七个操作流程为先调用原生JS中的对应操作，后重新解析模板、生成虚拟DOM...刷新页面。

固Vue修改数组的方法：

**1.通过push、pop、shift、unshift、splice、sort、reverse七个方法进行操作。**

> - `push()`在数组末尾添加一个或多个元素，并返回新数组长度
> - `pop()`从数组末尾删除1个元素(删且只删除1个), 并返回 被删除的元素
> - `shift()`在数组开始添加一个或多个元素，并返回新数组长度
> - `unshift()`在数组开始删除一个元素(删且只删除1个),并返回 被删除的元素
> - `splice()`数组进行操作，包括删除，添加，替换。
> - `sort()`
> - `reverse()`

**2.通过Vue.set()或vm.$set()进行操作。**

> **Vue.set( target, propertyName/index, value )**
>
> - `{Object | Array} target`目标对象，即需要添加进数据的目标
> - `{string | number} propertyName/index`添加进去的属性值(对象情况)/索引值(数组情况)
> - `{any} value`对应的值

例子：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>数组的插入删除等</h2>
        <ul>
            <li v-for="p in peoples">{{p}}</li>
        </ul>
        <button @click="addp">添加数据</button>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    peoples:[
                        '波波',
                        '于永波',
                        '皮皮波'
                    ]
                }
            },
            methods: {
                addp(){
                    // 方法一：通过数组的push方法添加
                    // this.peoples.push("韩崽崽同志")
                    // 方法二：通过Vue实例自身的$set方法，第二个参数为添加到数组中的下标
                    // this.$set(this.peoples,3,"韩崽崽")
                    // 通过Vue.set方法实现
                    Vue.set(this.peoples,3,"韩崽崽")
                }
            }
        })
    </script>
</body>
</html>
```

#### 18.4Vue监测数据总结

所有不是由Vue所控制的回调，尽可能的写成箭头函数，原因是箭头函数没有this会向上找，找到vm。

Vue监视数据的原理：

1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据？

> 通过setter实现监视，且要在new Vue时就传入要监测的数据。
>
> (1).对象中后追加的属性，Vue默认不做响应式处理
>
> (2).如需给后添加的属性做响应式，请使用如下API：
>
> ​      Vue.set(target，propertyName/index，value) 或 
>
> ​      vm.$set(target，propertyName/index，value)

3. 如何监测数组中的数据？

> 通过包裹数组更新元素的方法实现，本质就是做了两件事：
>
>   (1).调用原生对应的方法对数组进行更新。
>
>   (2).重新解析模板，进而更新页面。

​	4.   在Vue修改数组中的某个元素一定要用如下方法：

> Ⅰ使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
>
> ⅡVue.set() 或 vm.$set()

特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

总结监测数据的例子(运用了18前面例子中的方法)：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h1>学生信息</h1>
        <button @click="student.age++">年龄+1</button>
        <button @click="addSex">添加性别属性</button>
        <button @click="modifySex">修改性别</button>
        <button @click="addTopFriend">列表首位添加一个朋友</button>
        <button @click="modifyFirstFriend">修改第一个朋友的名字为张三</button>
        <button @click="addHobby">添加一个爱好</button>
        <button @click="modifyHobby">修改第一个爱好为开车</button>
        <button @click="removeSmokeHobby">移除爱好中的抽烟</button>

        <h3>姓名：{{student.name}}</h3>
        <h3>年龄：{{student.age}}</h3>
        <!-- 模拟临时出事时添加的属性 -->
        <h3 v-if="student.sex">性别：{{student.sex}}</h3>
        <h3>爱好：</h3>
        <!-- 兴趣列表 -->
        <ul>
            <li v-for="(h,index) in student.hobby" :key="index">{{h}}--{{index+1}}</li>
        </ul>
        <!-- 朋友列表 -->
        <h3>朋友列表</h3>
        <ul>
            <li v-for="(f,index) in student.friends" :key="index">{{f.name}}---{{f.age}}</li>
        </ul>
    </div>
    
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    student:{
					name:'tom',
					age:18,
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
                }
            },
            methods: {
                addSex(){
                    Vue.set(this.student,'sex','男');
                    // this.$set(this.student,'sex','男')
                },
                modifySex(){
                    // 如果直接给不存在的属性赋值，页面是不会更新的，但是在此的sex已经通过addSex函数添加上了，固可以更新到页面上
                    this.student.sex='其他'
                },
                addTopFriend(){
                    // 修改对象值的方法
                    this.student.friends.unshift({name:'pipibo',age:300})
                },
                modifyFirstFriend(){
                    this.student.friends[0].name='张三'
                },
                addHobby(){
                    this.student.hobby.push('学习')
                },
                modifyHobby(){
                    // 修改数组值的方法
                    // this.student.hobby.splice(0,1,'开车')
                    Vue.set(this.student.hobby,0,'开车')
                    // this.$set(this.student.hobby,0,'开车')
                },
                removeSmokeHobby(){
                    // h表示过滤时遍历数组中的元素
                    this.student.hobby = this.student.hobby.filter((h)=>{
                        // 两种移除的思路，第一种精准查询，第二种模糊查询
                        // return h!='抽烟'
                        return h.indexOf('抽烟') === -1
                    })
                }
            }
        })
    </script>
    
</body>
</html>
```

### 19收集表单数据

收集表单数据：

- 若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。

- 若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。

- 若：<input type="checkbox"/>

> 1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
>
> 2.配置input的value属性:
>
> ​	(1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
>
> ​	(2)v-model的初始值是数组，那么收集的的就是value组成的数组

备注：v-model的三个修饰符：

- lazy：失去焦点再收集数据

- number：输入字符串转为有效的数字

- trim：输入首尾空格过滤

> checkbox标签若不配置value值，Vue默认读取的数据是布尔类型的变量值checked。多组勾选框需写input的checkbox、指定value、且把v-model对应值创建为数组。



<div id="root">
        <!-- 阻止默认事件的发生，当点击form中的按钮时，会默认触发提交事件 -->
        <form @submit.prevent="demo">
            <!-- .lazy设置延迟反馈到Vue -->
            <!-- .trim设置取掉账号前面和后面输入的空格 -->
            账号：  <input type="text" v-model.lazy.trim="userInfo.account">   <br><br>
            密码：  <input type="password" v-model.lazy="userInfo.password">  <br><br>
            <!-- type=number限制非数字以外的字符输入，v-model的number将收到的数据转为数据类型 -->
            年龄：  <input type="number" v-model.number.lazy="userInfo.age">   <br><br>
            性别：
            男      <input type="radio" name="sex" v-model="userInfo.sex" value="male">
            女      <input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br><br>
            爱好：
            <!-- checkbox的第一种用法：获取选中标签的值，此时需要v-model绑定的是数组，且checkbox已设置value -->
            学习    <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="study">
            打游戏  <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="game">
            吃饭    <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="eat"> <br><br>
            所属校区：
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select>   <br><br>
            其他信息：
            <textarea v-model.lazy="userInfo.otherInfo"></textarea>   <br><br>
            <input type="checkbox" v-model="userInfo.accept">阅读并接受<a href="http://www.yianbobo.live">用户协议</a>    <br><br>
            <button>提交</button>
        </form>
    </div>

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- 阻止默认事件的发生，当点击form中的按钮时，会默认触发提交事件 -->
        <form @submit.prevent="demo">
            <!-- .lazy设置延迟反馈到Vue -->
            <!-- .trim设置取掉账号前面和后面输入的空格 -->
            账号：  <input type="text" v-model.lazy.trim="userInfo.account">   <br><br>
            密码：  <input type="password" v-model.lazy="userInfo.password">  <br><br>
            <!-- type=number限制非数字以外的字符输入，v-model的number将收到的数据转为数据类型 -->
            年龄：  <input type="number" v-model.number.lazy="userInfo.age">   <br><br>
            性别：
            男      <input type="radio" name="sex" v-model="userInfo.sex" value="male">
            女      <input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br><br>
            爱好：
            <!-- checkbox的第一种用法：获取选中标签的值，此时需要v-model绑定的是数组，且checkbox已设置value -->
            学习    <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="study">
            打游戏  <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="game">
            吃饭    <input type="checkbox" name="hobby" v-model="userInfo.hobby" value="eat"> <br><br>
            所属校区：
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select>   <br><br>
            其他信息：
            <textarea v-model.lazy="userInfo.otherInfo"></textarea>   <br><br>
            <input type="checkbox" v-model="userInfo.accept">阅读并接受<a href="http://www.yianbobo.live">用户协议</a>    <br><br>
            <button>提交</button>
        </form>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    userInfo:{
                        account:'',
                        password:'',
                        age:0,
                        sex:'',
                        hobby:[],
                        city:'',
                        otherInfo:'',
                        accept:'false'
                    }
                }
            },
            methods: {
                demo(){
                    // 将数据转换成JSON格式并打印到终端
                    console.log(JSON.stringify(this.userInfo))
                }
            }
        })
    </script>
</body>
</html>
```

### 20过滤器

- 定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。

- 语法：

> 1.注册过滤器：Vue.filter(name,callback)即全局过滤器 或 new Vue{filters:{}} 即在Vue实例内部注册
>
>  2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"

- 备注：

> 1.过滤器也可以接收额外参数、多个过滤器也可以串联
>
> 2.并没有改变原本的数据, 是产生新的对应的数据

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
    <script src="./Js/dayjs.min.js"></script>
</head>
<body>
    <div id="root">
        <h2>时间戳：{{time}}</h2>
        <h2>计算方法实现：{{fmtTime}}</h2>
        <h2>函数实现：{{computeTime()}}</h2>
        <h2>局部过滤器实现：{{time | timeFormater}}</h2>
        <!-- 过滤器传参时，首先将|前面的参数传入，后传在过滤器后面写的参数 -->
        <h2>局部过滤器传参实现：{{time | timeFormater('YYYY年MM月DD日')}}</h2>
        <h2>局部过滤器+传参+切片字符串：{{time | timeFormater('YYYY年MM月DD日') | thisSlice}}</h2>
    </div>

    <div id="root2">
        <h2>全局过滤器：{{msg | mySlice}}</h2>
    </div>

    <script>
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    // Date.now()获取时间戳
                    time:1662283799723
                }
            },
            computed: {
                fmtTime(){
                    return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            methods: {
                computeTime(){
                    return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            filters: {
                // 在此str赋值的意义为：若不传参，则str默认值为下面的设置值，若传参则按照参数实现
                timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
                    return dayjs(value).format(str);
                },
                thisSlice(value){
                    // slice为分隔字符串,从0下标开始截取4位字符串，得到可以处理过的字符串
                    return value.slice(0,4)
                }
            }
        });

        const vm1 = new Vue({
            el:'#root2',
            data(){
                return{
                    msg:'hello,atguigu!'
                }
            }
        })
    </script>
</body>
</html>
```

### 21内置指令

#### 21.1前面指令的回顾

- v-bind  : 单向绑定解析表达式, 可简写为 :xxx

- v-model : 双向数据绑定

- v-for  : 遍历数组/对象/字符串

- v-on   : 绑定事件监听, 可简写为@

- v-if     : 条件渲染（动态控制节点是否存存在）

- v-else  : 条件渲染（动态控制节点是否存存在）

- v-show  : 条件渲染 (动态控制节点是否展示)

#### 21.2 v-text指令

**作用**：向其所在的节点中渲染文本内容。

**与插值语法的区别**：v-text会替换掉节点中的内容，插值语法{{xx}}则不会。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>测试插值语法,{{name}}</h2>
        <h2 v-text="name">测试插值语法,</h2>
    </div>
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'于永波'
                }
            }
        })
    </script>
</body>
</html>
```

#### 21.3 v-html指令

相比v-text而言v-html支持结构的解析，如插入的值若为一个标签，v-text会原封不动显示到页面，但是v-html会解析结构，并显示到页面。

1.**作用**：向指定节点中渲染包含html结构的内容。

2.**与插值语法的区别**：

> (1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
>
> (2).v-html可以识别html结构。

3.**严重注意**：v-html有安全性问题！！！！

> (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
>
>  (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>测试插值语法,{{name}}</h2>
        <!-- v-text与v-html均会把标签内原内容替换掉 -->
        <h2 v-text="name">测试插值语法,</h2>
        <h2 v-html="testhtml"></h2>
    </div>
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'于永波',
                    testhtml:'<a href="http://www.baidu.com">点击看小哥哥洗澡</a>'
                }
            }
        })
    </script>
</body>
</html>
```

#### 21.4 v-cloak指令（没有值）

- 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。

- 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

> 如下代码，加入vue.js引入的时候存在网络延迟，加入v-cloak后可以设置存在v-cloak属性的标签隐藏，在vue.js加载出来后会将v-cloak属性删除，便可正常显示。v-cloak没有值。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
    <style>
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
    <div id="root">
        <p v-cloak>{{name}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'皮皮波'
                }
            }
        });
    </script>
</body>
</html>
```

#### 21.5 v-once指令（没有值）

与事件修饰符的once不同，那个是在如@click.once这样加，表示事件只响应一次。

- v-once所在节点在初次动态渲染后，就视为静态内容了。

- 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
- v-once也没有值，只需要写一个v-once在标签内即可

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <p v-once>第一次渲染时的n值为：{{n}}</p>
        <p>当前的n值为：{{n}}</p>
        <button @click="n++">n+1</button>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return {
                    n:10
                }
            }
        })
    </script>
</body>
</html>
```

#### 21.6 v-pre指令

- 跳过其所在节点的编译过程。

- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

如下实例，vue解析时便会跳过<h2 v-pre>Vue其实很简单</h2>这一句，继续向下解析。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			v-pre指令：
					1.跳过其所在节点的编译过程。
					2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 >当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>
	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```

### 22自定义指令

#### 22.1函数式

在新建的Vue对象中，添加directives，并在此写入自定义指令的相关操作，形式如函数，在html中使用时加v-，即“v-名称”来使用。

函数式的自定义指令big函数何时会被调用？

> 1.指令与元素成功绑定时（一上来）。
>
> 2.指令所在的模板被重新解析时。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <h2>{{name}}</h2>
        <h2>当前的n值为：<span v-text="n"></span></h2>
        <h2>后来的n值为：<span v-big="n"></span></h2>
        <button @click="n++">点我n+1</button>
    </div>
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'pipibo',
                    n:1
                }
            },
            // 用于放置自定义指令在此写名，在html中写“v-名”
            directives: {
                // 自定义指令时，指令可以接收到两个参数，第一个参数为实体DOM，在此定义element便于标识
                // binding即与实体DOM绑定的相关数据值以及相关的信息等，命名binding便于标识，binding.value可以取出该实体DOM的值
                
                big(element,binding){
                    element.innerText=binding.value * 10 
                }
            }
        });
    </script>
</body>
</html>
```

#### 22.2对象式

对象式指令创建后需要自己配置三个函数：

>  (1).bind：指令与元素成功绑定时调用。
>
> (2).inserted：指令所在元素被插入页面时调用。
>
> (3).update：指令所在模板结构被重新解析时调用。

三者均存在有(element,binding)两个输入值可以用于操作，同函数式相同。

下面小例子为，通过自定义指令v-fbind，在页面刚刚加载时设置到input框上面的焦点。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <h2>{{name}}</h2>
        <h2>当前的n值为：<span v-text="n"></span></h2>
        <h2>后来的n值为：<span v-big="n"></span></h2>
        <button @click="n++">点我n+1</button>
        <!-- 定义一个input标签，将n用作自定义指令的输入变量 -->
        <input type="text" v-fbind:value="n">
    </div>
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'pipibo',
                    n:1
                }
            },
            // 用于放置自定义指令在此写名，在html中写“v-名”
            directives: {
                big(element,binding){
                    element.innerText=binding.value * 10 
                },
                // 函数时书写方法相当于实现了对象式书写中的bind、update两种情况，但是当需要标签插入页面后再执行一些语句式，变需要用到对象式创建方法
                // 对象式书写方法，可以详细的指定自定义指令在何种情况下做何种事情
                fbind:{
                    // 指令与元素成功绑定时（一上来）
                    bind(element,binding){
                        // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                        element.value = binding.value;
                    },
                    // 指令所在元素被插入页面时
                    inserted(element,binding){
                        // 当打开页面时焦点在这个input框上，该语句只能在元素被插入页面时执行。若在成功绑定时提前执行，则由于元素还未被插入页面导致效果失效。
                        element.focus();
                    },
                    // 指令所在的模板被重新解析时
                    update(element,binding){
                        // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                        element.value = binding.value;
                    }
                }
            }
        });
    </script>
</body>
</html>
```

#### 22.3 回顾通过JS操作DOM(undone)

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <button id="btn">点我创建一个输入框</button>

    <script>
        const btn = document.getElementById('btn')
        btn.onclick = ()=>{
            const input = document.createElement('input');
            input.className='demo';
            input.value=0;
            input.onclick= ()=>{alert('alert')};
            document.body.appendChild(input);
            input.focus();
        }
    </script>

</body>
</html>
```

#### 22.4总结

- 注意！！所有指令相关的this都是window而不是vue的实例！

- 自定义指令的值都通过html绑定时的=等于号后面的变量传入了。

**关于定义全局自定义指令**

> 定义全局自定义指令的方法：与定义全局过滤器同理，局部自定义指令为directives，全局为directive。
>
> 第一个参数为指令名称，第二个参数为实现的方法写在{}内部即可

##### 一、定义语法：

- 局部指令：

方法一：

```vue
new Vue({
	directives:{
		指令名:{
				在此写三个回调函数bind、inserted、update。
			}
	}
})
```

方法二：

```vue
new Vue({
	directives:{
		指令名(element,binding){
			一些语法
		}
	}
})
```

- 全局指令：

> Vue.directive(指令名,配置对象) 或  Vue.directive(指令名,回调函数)

##### 二、配置对象中常用的3个回调：

> (1).bind：指令与元素成功绑定时调用。
>
> (2).inserted：指令所在元素被插入页面时调用。
>
>  (3).update：指令所在模板结构被重新解析时调用。

##### 三、备注（重要！！！）：

> 1.指令定义时不加v-，但使用时要加v-；
>
> 2.指令名如果是多个单词，要使用kebab-case命名方式(即多个单词中间用-连接)，不要用camelCase命名。

两种自定义指令的综合小练习：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <h2>{{name}}</h2>
        <h2>当前的n值为：<span v-text="n"></span></h2>
        <h2>后来的n值为：<span v-big="n"></span></h2>
        <h2>后来的n值为：<span v-big-number="n"></span></h2>
        <button @click="n++">点我n+1</button>
        <!-- 定义一个input标签，将n用作自定义指令的输入变量 -->
        <input type="text" v-fbind:value="n">
    </div>
    <script>

        // 定义全局自定义指令的方法：与定义全局过滤器同理，局部自定义指令为directives，全局为directive。
        // 第一个参数为指令名称，第二个参数为实现的方法写在{}内部即可
        Vue.directive('fbind',{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){
                    // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                    element.value = binding.value;
                },
                // 指令所在元素被插入页面时
                inserted(element,binding){
                    // 当打开页面时焦点在这个input框上，该语句只能在元素被插入页面时执行。若在成功绑定时提前执行，则由于元素还未被插入页面导致效果失效。
                    element.focus();
                },
                // 指令所在的模板被重新解析时
                update(element,binding){
                    // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                    element.value = binding.value;
                }
        });
        // 函数时全局自定义指令也同理
        Vue.directive('big',function(element,binding){
            element.innerText=binding.value * 10 
        })


        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    name:'pipibo',
                    n:1
                }
            },
            // 用于放置自定义指令在此写名，在html中写“v-名”
            directives: {
                // 下面均为局部自定义指令
                // big(element,binding){
                //     element.innerText=binding.value * 10 
                // },
                // 函数时书写方法相当于实现了对象式书写中的bind、update两种情况，但是当需要标签插入页面后再执行一些语句式，变需要用到对象式创建方法
                // 对象式书写方法，可以详细的指定自定义指令在何种情况下做何种事情
                // fbind:{
                //     // 指令与元素成功绑定时（一上来）
                //     bind(element,binding){
                //         // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                //         element.value = binding.value;
                //     },
                //     // 指令所在元素被插入页面时
                //     inserted(element,binding){
                //         // 当打开页面时焦点在这个input框上，该语句只能在元素被插入页面时执行。若在成功绑定时提前执行，则由于元素还未被插入页面导致效果失效。
                //         element.focus();
                //     },
                //     // 指令所在的模板被重新解析时
                //     update(element,binding){
                //         // binding.value的值即data中定义的变量n，在此将n变量的值赋给元素的value属性。
                //         element.value = binding.value;
                //     }
                // },
                // 当多个字母时使用-连接，且在定义指令时使用引号引住
                'big-number'(element,binding){
                    element.innerText=binding.value * 10 
                }
            }
        });
    </script>
</body>
</html>
```

### 23生命周期

#### 23.1引出生命周期

生命周期：

> 1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
>
> 2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
>
> 3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
>
> 4.生命周期函数中的this指向是vm 或 组件实例对象。

mounted函数在Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用，mounted函数中的this为该vue实例。且生命周期中的this都是vm（vue的实例）。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- 使用v-bind指令绑定style属性后，style的值需要写成对象的形式,中间用逗号隔开 -->
        <!-- {opacity:opacity} 前面为属性名，后面为vm中的属性值，若二者名字相同，则可以简写为opacity -->
        <h2 :style="{opacity,background:bck}">欢迎来到周口</h2>
    </div>

    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    opacity:1,
                    bck:'skyblue'
                }
            },
            mounted () {
                // 在mounted生命周期函数中为h2的透明度设置一个计时器
                setInterval(() => {
                    this.opacity -= 0.01;
                    if(this.opacity <= 0){
                        this.opacity = 1;
                    }
                }, 16);
            }
        });
    </script>
</body>
</html>
```

#### 23.2分析生命周期

挂在流程图如下：

![](C:\Users\26307\Desktop\VueStudy\Img\生命周期.png)

- beforeCreate为数据监测和数据代理创建之前，而非vm创建之前，vm已经创建。

- created为数据监测和数据代理创建后。
- 在vue实例创建时便可以定义模板template，在Vue({template:})写模板，通过`来包住模板。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>当前的n值是：{{n}}</h2>
        <button @click="add">点我n+1</button>
        <button @click="bye">点我销毁vm</button>
    </div>
    <script>
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        const vm = new Vue({
            el:'#root',
            // vue的模板也可以写在这里，vue2中这里的模板会将上面div id="root"中的所有元素全部替换掉。此template中的标签需要有一个总标签嵌套住才可以。
            // template:`
            //     <div>
            //         <h2>当前的n值是：{{n}}</h2>
            //         <button @click="add">点我n+1</button>
            //         <button @click="bye">点我销毁vm</button>
            //     </div>
            // `,
            data(){
                return{
                    n:1
                }
            },
            methods: {
                add(){
                    console.log('add');
                    this.n++;
                },
                bye(){
                    console.log('bye');
                    this.$destroy();
                }
            },
            watch: {
                n(){
                    // 销毁之后只剩下原生的事件回调函数
                    console.log('n改变了');
                }
            },
            // 新建生命周期函数
            beforeCreate () {
                console.log('beforeCreate');
            },
            created () {
                console.log('created');
            },
            beforeMount () {
                console.log('beforeMount');
            },
            mounted () {
                console.log('mounted');
            },
            beforeUpdate () {
                console.log('beforeUpdate');
            },
            updated () {
                console.log('updated');
            },
            beforeDestroy () {
                console.log('beforeDestroy');
            },
            destroyed () {
                console.log('destroyed');
            }
        })
    </script>
</body>
</html>
```

#### 23.3生命周期总结

**常用的生命周期钩子：**

- mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

- beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

**关于销毁Vue实例**

- 销毁后借助Vue开发者工具看不到任何信息。

- 销毁后自定义事件会失效，但原生DOM事件依然有效。

- 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./Js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2 :style="{opacity}">欢迎学习Vue</h2>
        <button @click="opacity=1">透明度设置为1</button>
        <button @click="stop">点我停止变换</button>
    </div>
    <script>
        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    opacity:1
                }
            },
            methods: {
                stop(){
                    this.$destroy();
                }  
            },
            mounted () {
                // 当元素全部挂载在页面后，设置计时器循环显示
                // 在此使用this.名字直接创建一个元素接收该计时器,用于在beforeDestroy时删除该计时器。
                this.timer = setInterval(() => {
                    console.log('计时器运行中');
                    this.opacity -= 0.01;
                    if(this.opacity <= 0){
                        this.opacity = 1
                    }
                }, 20);
            },
            beforeDestroy () {
                // 删除在挂载时创建的计时器,由于destroy不能消除计时器，需要手动消除。
                // 计时器虽然还在，但是由于vm已经被摧毁，因此页面不会再发生变化
                clearInterval(this.timer)
                console.log('vm已被删除');
            }
        })
    </script>
</body>
</html>
```

## Vue组件化编程

什么是组件？组件化编程对比传统方式编程的优势？

**传统方式：**

- 依赖关系混乱，不好维护
- 代码复用率不高

**组件的定义：实现应用中局部功能代码和资源的集合。**

- 组件好维护、依赖关系不混乱
- 代码复用率高

**模块**

- 理解: 向外提供特定功能的 js 程序, 一般就是一个 js 文件 
- 为什么: js 文件很多很复杂 
- 作用: 复用 js, 简化 js 的编写, 提高 js 运行效率

**组件**

- 理解: 用来实现局部(特定)功能效果的代码集合(html/css/js/image…..)
- 为什么: 一个界面的功能很复杂

**模块化**

- 当应用中的 js 都以模块来编写的, 那这个应用就是一个模块化的应用。

 **组件化**

- 当应用中的功能都是多组件的方式来编写的, 那这个应用就是一个组件化的应用,。

### 1.非单文件组件

#### 1.1非单文件组件的使用

`使用函数式定义data的话，把data赋值给不同的变量时，不同变量的data互不干扰，不会共享同一片内存。`

**Vue中使用组件的三大步骤：**

> 1、定义组件(创建组件)
>
> 2、注册组件
>
> 3、使用组件(写组件标签)

**一、如何定义一个组件？**

使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；

区别如下：

> 1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
>
> 2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
>
> 备注：使用template可以配置组件结构(即html内容)。

**二、如何注册组件？**

> 1.局部注册：靠new Vue的时候传入components选项
>
> 2.全局注册：靠Vue.component('组件名',组件)

**三、编写组件标签：**

<school></school>

练习小例子：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- 3.局部注册组件的使用 -->
        <school></school>
        <hr>
        <!-- 3.局部注册组件的使用 -->
        <student></student>
        <hr>
        <!-- 3.全局注册组件的使用 -->
        <moto></moto>
    </div>
    <hr>
    <div id="root2">
        <!-- 3.全局注册组件的使用 -->
        <moto></moto>
    </div>

    <script>
        // 1.定义一个组件=用于全局注册
        const moto = Vue.extend({
            template:`
                <h2>{{info}}</h2>
            `,
            data(){
                return{
                    info:'咱就是说，这是全局注册的组件嗷'
                }
            }
        })

        // 2.注册一个全局组件，第一个值为组件名，第二个值为定义的组件的名字
        Vue.component('moto',moto);

        // 1.定义一个组件
        const school = Vue.extend({
            template:`
                <div>
                    <h2>学校名称：{{schoolName}}</h2>
                    <h2>学校地址：{{schoolAddress}}</h2>
                    <button @click="tip">点击提示</button>
                </div>
            `,
            data(){
                return{
                    schoolName:'河南工业大学',
                    schoolAddress:'河南省郑州市高新区'
                }
            },
            methods: {
                tip(){
                    alert(this.schoolName)
                }
            }
        })

        // 1.定义一个组件
        const student = Vue.extend({
            template:`
                <div>
                    <h2>学生名称：{{studentName}}</h2>
                    <h2>学生地址：{{studentAddress}}</h2>
                </div>
            `,
            data(){
                return{
                    studentName:'于永波',
                    studentAddress:'河南省周口市'
                }
            }
        })

        const vm = new Vue({
            el:'#root',
            data(){
                return{
                    txt:'欢迎来到Vue'
                }
            },
            // 2.局部注册一个组件
            components: {
                // 若组件名和注册时的名字相同的话，可以直接简写为一个，即把school:school简写成school
                school,
                student:student
            }
        })

        const vm2 = new Vue({
            el:'#root2'
        })
    </script>
</body>
</html>
```

#### 1.2组件的几个注意点(undone)

##### 1.关于组件名:

 **一个单词组成：**

> ​	第一种写法(首字母小写)：school
>
> ​	第二种写法(首字母大写)：School

**多个单词组成：**

> ​	第一种写法(kebab-case命名)：my-school
>
> ​	第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)

**备注：**

> ​	(1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
>
> ​	(2).可以使用name配置项指定组件在开发者工具中呈现的名字。

##### 2.关于组件标签:

> ​                第一种写法：<school></school>
>
> ​                第二种写法：<school/>
>
> ​                备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。

##### 3.一个简写方式：

> const school = Vue.extend(options) 可简写为：const school = options
