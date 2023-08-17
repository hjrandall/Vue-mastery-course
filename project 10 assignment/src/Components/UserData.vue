<template>
    <form @submit.prevent="updateUser">
        <input type="text" v-model="user">
        <input type="number" v-model="age">
        <button>click me</button>
    </form>
    

</template>

<script>
export default{
    emits:['updateUser',],
    data(){
        return {
            user:'',
            age:0
        }
    },
    methods:{
        updateUser(){
            this.$emit('updateUsername',this.user,this.age)
            console.log('hi mom')
        }
    }
}
</script>