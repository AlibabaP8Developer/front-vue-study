<template>
  <div>
    <ul class="todo-main">
      <Item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></Item>
    </ul>
  </div>
</template>

<script>

import Item from "@/components/Item";
export default {
  name: "MyList",
  components: {Item},
  data() {
    return {
      todos: [
        {id: '1001', title: '朱元璋', done: true},
        {id: '1002', title: '完颜亮', done: true},
        {id: '1004', title: '阿敏', done: true},
        {id: '1005', title: '莽古尔泰', done: true},
        {id: '1006', title: '喇嘛达尔扎', done: true},
        {id: '1007', title: '葛尔丹策零', done: true},
        {id: '1003', title: '朱重八', done: false}
      ]
    }
  }
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