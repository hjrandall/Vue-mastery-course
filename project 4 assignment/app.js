const app = Vue.createApp({
    data(){
        return{
            total: 0
        }
    },
    methods:{
        add(num){
            this.total += num
        }
    },
    computed: {
        thirtySeven(){
            if (this.total < 37){ 
                return "Not there yet"
            }
            else if (this.total > 37){ 
                return "Too much!"
            }
            else{
                return this.total
            }
        }
    },
    watch: {
        thirtySeven(value){
            if (value = "Too much!"){ 
                const that = this;
                setTimeout(function(){
                    that.total=0
                },5000)
            }
        }
    }
});
app.mount('#assignment');