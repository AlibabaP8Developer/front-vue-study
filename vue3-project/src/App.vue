<template>
  <div>
    {{message}}
    <button @click="logMsg">logMsg</button>
    <Demo/>
  </div>
</template>

<script>
import Demo from '@/components/Demo'

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    console.log('setup')

    let message = '你好，完颜宗翰'
    const logMsg = () =>{
      console.log(message)
    }

    return {
      message,
      logMsg
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script>

<style>

</style>
