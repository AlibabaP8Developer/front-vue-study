<template>
  <div id="app">
    <MyHeader></MyHeader>
    <List></List>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import List from "@/components/MyList";
import MyFooter from "@/components/MyFooter";


export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader,
    List
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>

</style>
