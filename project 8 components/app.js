const app = Vue.createApp({
    data(){
        return {
            friends: [
            {
            },
            {id: 'jenny',
            name: ' jenny lorenz',
            email: 'jenny@gmail.com'
            },
        ]
        }
    },
})
app.component('user-contact',{
    template: '',
    data(){
        return {
            id: '',
            name: '',
            email: ''
        }
    }
});
app.mount("#app");