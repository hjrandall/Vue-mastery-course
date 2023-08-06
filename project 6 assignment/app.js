const app = Vue.createApp({
    data(){
        return{
        data: [],
        iText: "",
        hideList: false
    }},
    methods:{
        addTask(){
            this.data.push(this.iText)
            this.iText=''
        },
        toggle(){
            this.hideList = !this.hideList
        }
    },
});
app.mount('#assignment')