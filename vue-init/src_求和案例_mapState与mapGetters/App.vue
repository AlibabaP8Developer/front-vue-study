<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from "@/components/Count";

export default {
  name: 'App',
  components: {
    Count
  },
  mounted() {
    console.log('app: ',this)
  }
}
</script>

<style lang="css">
</style>
