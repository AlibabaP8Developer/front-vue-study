> 项目启动后，浏览器自动打开
```json
--package.json
    "serve": "vue-cli-service serve --open",
```

> eslint校验功能关闭
在跟目录下，创建一个vue.config.js
如：声明变量但是没有使用eslint校验工具报错

> src文件夹简写方法，配置别名
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"]
        }
    },
    "exclude": ["node_modules", "dist"]
}

> 项目路由的分析
vue-router
前端路由：kv键值对
key：URL（地址栏中的路径）
value：相应的路由组件

路由组件：
Home首页路由组件
Search路由组件
login登录路由

非路由组件
Header
Footer：在首页、搜索页，登录页没有

less: cnpm install --save less less-loader@5

> 路由组件的搭建

vue-router
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components: 经常放置的非路由组件（共用全局组件）
-pages/views: 经常放置路由组件

配置路由
项目当中配置的路由一般放置在router文件夹中

$route: 一般是获取路由信息的【路径、query、params等】
$router: 一般进行编程式导航进行路由跳转【push|replace】

路由的跳转：
    声明式导航router-link，可以进行路由的跳转
    编程式导航push|replace，可以进行路由的跳转

编程式导航：声明式导航能做的，编程式都能做

Footer组件显示与隐藏
显示或隐藏组件：v-if、v-show
Footer组件：在Home、Search显示Footer组件
Footer组件：在登录、注册时是隐藏的

> 路由传参

路由跳转有几种方式？
比如：A->B
声明式导航：router-link（务必要有to属性），可以实现路由的跳转
编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。

路由传参
    params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
    query参数：不属于路径当中的一部分，类似于Ajax中的query  /home?k=v&kv=,不需要占位
