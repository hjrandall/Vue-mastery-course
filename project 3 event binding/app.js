const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    add(){
      this.counter += 1;
    },
    remove(){
      this.counter -= 1;
    },
    setName(event,num){
      this.name = event.target.value 
    },
    submitForm(){
      alert("hi mom")
    }
  }
});

app.mount('#events');
