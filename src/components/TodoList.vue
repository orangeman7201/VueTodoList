<template>
  <div style="padding-left: 500px">
    <input type="radio" id="all" value="all" v-model="radioState">全て
    <input type="radio" id="working" value="working" v-model="radioState">作業中
    <input type="radio" id="finish" value="finish" v-model="radioState">完了

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th align="center">タスク</th>
        <th>状態</th>
      </tr>
      </thead>
      <thead v-if="radioState === 'all'">
      <tr v-for="(todo, index) in inputTodos" :key="todo.task">
        <td>{{index}}</td>
        <td>{{todo.task}}</td>
        <td>
          <button v-if="inputTodos[index].state === 'working'" @click="changeState(index)">作業中</button>
          <button v-else @click="changeState(index)">完了</button>
        </td>
        <td><button @click="deleteItem(index)">削除</button></td>
      </tr>
      </thead>
      <thead v-if="radioState === 'working'">
      <tr v-for="(todo, index) in inputTodos" :key="todo.task">
        <td v-if="todo.state === 'working'">{{index}}</td>
        <td v-if="todo.state === 'working'">{{todo.task}}</td>
        <td v-if="todo.state === 'working'">
          <button v-if="inputTodos[index].state === 'working'" @click="changeState(index)">作業中</button>
          <button v-else @click="changeState(index)">完了</button>
        </td>
        <td v-if="todo.state === 'working'"><button @click="deleteItem(index)">削除</button></td>
      </tr>
      </thead>
      <thead v-if="radioState === 'finish'">
      <tr v-for="(todo, index) in inputTodos" :key="todo.task">
        <td v-if="todo.state === 'finish'">{{index}}</td>
        <td v-if="todo.state === 'finish'">{{todo.task}}</td>
        <td v-if="todo.state === 'finish'">
          <button v-if="inputTodos[index].state === 'working'" @click="changeState(index)">作業中</button>
          <button v-else @click="changeState(index)">完了</button>
        </td>
        <td  v-if="todo.state === 'finish'"><button @click="deleteItem(index)">削除</button></td>
      </tr>
      </thead>
    </table>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
      <input type="submit" value="追加">
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        newTodo: '',
        radioState: 'all',
        start: 'ture'
      }
    },
    computed: {
      inputTodos() {
      return this.$store.getters.inputTodos;
      },
    },
    methods: {
      addTodo: function() {
        let Item = {task: this.newTodo, state: "working"}
        this.inputTodos.push(Item);
        this.newTodo = '';
      },
      deleteItem: function(index) {
        this.inputTodos.splice(index,1)
      },
      changeState: function(index) {
        if (this.inputTodos[index].state === 'working') {
          this.inputTodos[index].state = 'finish'
        } else if (this.inputTodos[index].state === 'finish') {
          this.inputTodos[index].state = 'working'
        }
      }
    }
  }
</script>
