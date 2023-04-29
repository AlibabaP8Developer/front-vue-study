<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";

export default {
  name: 'App',
  components: {
    MyFooter,
    MyList,
    MyHeader
  },
  data() {
    return {
      todos: [
        {id: '1001', title: '朱元璋', done: false},
        {id: '1002', title: '完颜亮', done: false},
        {id: '1004', title: '阿敏', done: false},
        {id: '1005', title: '莽古尔泰', done: true},
        {id: '1006', title: '喇嘛达尔扎', done: true},
        {id: '1007', title: '葛尔丹策零', done: true},
        {id: '1003', title: '朱重八', done: false}
      ]
    }
  },
  methods: {
    // 添加一个todo
    addTodo(x) {
      console.log('App组件，接到的数据：', x)
      this.todos.unshift(x)
    },
    // 取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    // 全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #f5f1f1;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
