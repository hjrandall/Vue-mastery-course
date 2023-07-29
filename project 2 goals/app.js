const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn vue!!!",
      courseGoalB: "hi mom",
      vueLink: 'https://vuejs.org/',
      html: "<h2>hi mom</h2>"
    };
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.random();
      if (randomNumber < .5) {
        return this.courseGoalA
      }
      else {
        return this.courseGoalB
      }
    },
  }
});
app.mount("#user-goal");
