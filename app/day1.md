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
