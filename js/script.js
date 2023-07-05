const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [

            {
                newTodo: '',
                done: false
            },

            

        ]
      }
    },
    method:{
        addTodo() {
            if (this.newTodo.trim() != '') {
                this.todos.push(this.newTodo);
                this.newTodo = '' ;
            }
        }
    }
  }).mount('#app')