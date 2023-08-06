const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            yourHealth: 100,
            battleLog: [],
            surrender: false
        }
    },
    methods:{
        attack(){
            return
        },
        changeHealth(player){
            const ranNum =(Math.random() * (18-5)+5)
            if (player === "you"){
                this.yourHealth -= ranNum
            }
            else{
                this.monsterHealth -= ranNum
                this.changeHealth("you")
            }
        }

    },
    computed:{

    },
    watch:{

    }
});
app.mount("#game")