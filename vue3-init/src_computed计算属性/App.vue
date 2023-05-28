<template>
  <Demo/>
</template>

<script>
import Demo from '@/components/Demo'

export default {
  name: 'App',
  components: { Demo },
  // 此处只是测试setup
  setup () {

    return {

    }

  },

  data () {
    return {
      sex: '男'
    }
  }
}
</script>

<style>

</style>
