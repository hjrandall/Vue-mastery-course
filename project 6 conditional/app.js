const app = Vue.createApp({
  data() {
    enteredGoalValue:''
    return { 
      goals: [],
      enteredGoalValue:''
   };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    removeGoal(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
