import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {task: "選択", state: "working"},
      {task: "掃除", state: "finish"},
      {task: "洗い物", state: "working"}
    ]
  },
  getters: {
    inputTodos: state => {
      return state.todos
    }
  }
})