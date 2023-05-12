// 路由
import VueRouter from "vue-router";
// 引入组件
import About from "@/components/About";
import Home from "@/components/Home";
import News from "@/components/News";
import Message from "@/components/Message";
import Detail from "@/components/Detail";

// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})
