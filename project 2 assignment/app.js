const app = Vue.createApp({
    data () {
        return {
            yourAge:23,
            yourName: "hayden",
            pic: "fennec.jpg"
        }
    },
    methods: {
        plussFive(){
            return this.yourAge + 5;
        },
        randoNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment");