<template>
  <div>
    <!-- 二级路由出口 -->
    <LoyoutFixed></LoyoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 添加key，破坏复用机制，强制销毁重建 -->
<!--    <RouterView :key="$route.fullPath" />-->
    <RouterView />
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import LoyoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";

// 触发获取导航列表的action
import {useCategoryStore} from "@/stores/category";
import {onMounted} from "vue";

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>
