<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" :checked="isAll"/>
      </label>
      <span>
          <span>已完成 {{ doneTotal }}</span> / 全部 {{ total }}
        </span>
      <button class="btn btn-danger">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos'],
  computed: {
    doneTotal1() {
      let i = 0
      this.todos.forEach(todo => {
        if (todo.done) {
          i++
        }
      })
      return i
    },
    isAll() {
      return this.doneTotal === this.total && this.total > 0
    },
    total() {
      return this.todos.length
    },
    doneTotal() {
      /**
       * pre 上一次的值
       * current 当前的值
       */
      const x = this.todos.reduce((pre, current) => {
        console.log('!!!', pre, current)
        return pre + (current.done ? 1 : 0)
      }, 0)

      console.log('x: ', x)
      return x
    }
  }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>