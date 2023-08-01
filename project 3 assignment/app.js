const app = Vue.createApp({
    data(){
        return {
            userText: "",
            secondText: ""
        }
    },
    methods: {
        showAlert(){
            alert("yo this is an alert")
        },
        updateUserText(event){
            this.userText = event.target.value
        },
        updateSecondText(event){
            this.secondText = event.target.value
        }
    }
});
app.mount("#assignment")