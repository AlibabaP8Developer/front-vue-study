/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import XtxSwiper from '@/components/XtxSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
