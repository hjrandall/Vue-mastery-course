const app = Vue.createApp({
    data(){
        return {
            inputClass:'',
            paragraphVisy: true,
            dynamicCss: {inputClass: true, visible: this.paragraphVisy, hidden: this.paragraphVisy}
        }
    },
    methods:{
        visi(){
            this.paragraphVisy = !this.paragraphVisy;
        }
    },
    computed:{

    }
});
app.mount("#assignment")