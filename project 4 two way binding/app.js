const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname:''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ""
    }
  },
  computed: {
    fullNasdf(){
      return "john"
    }
  },
  watch: {
    name(value){
      this.fullname = value + " " + "randall"
    },
    counter(value){
      if(value >50){
        this.counter=0;
      }
    }
  }
});

app.mount('#events');
