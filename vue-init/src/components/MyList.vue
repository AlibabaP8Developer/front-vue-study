<template>
  <div>
    <ul class="todo-main">
      <Item v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
            :checkTodo="checkTodo"></Item>
    </ul>
  </div>
</template>

<script>

import Item from "@/components/Item";
export default {
  name: "MyList",
  components: {Item},
  props: ['todos', 'checkTodo']  // vc
}
</script>

<style scoped lang="less">
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>