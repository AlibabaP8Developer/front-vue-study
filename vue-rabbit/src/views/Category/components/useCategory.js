// 封装分类数据业务相关代码
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router/dist/vue-router";
import {getTopCategoryAPI} from "@/apis/category";

export function useCategory() {
    // 获取分类数据
    const categoryData = ref({})

    // 获取路由参数
    const route = useRoute()

    const getCategory = async (id = route.params.id) => {
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategory()
    })

    // 目标：路由参数变化的时候，可以把分类数据接口重新发送，解决路由缓存问题
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了', to)
        // 存在问题：使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}
