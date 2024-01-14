<script setup lang='ts'>
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log('res：:', res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar></CustomNavbar>
  <!--轮播图-->
  <XtxSwiper :list="bannerList"></XtxSwiper>
</template>

<style lang='scss'>

</style>
