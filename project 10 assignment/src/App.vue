<template>
    <div>
        <user-data @update-username="update"></user-data>
        <active-users v-for="user in users" :key="user" :username="user.user" :age="user.age"></active-users>
    </div>
</template>

<script>
import ActiveUsers from './Components/ActiveUsers.vue'
import UserData from './Components/UserData.vue'
export default {
  components: { UserData, ActiveUsers },
    data(){
        return{
            users:[]
        }
    },
    methods:{
        update(user,age){
            this.users.push({'user':user,'age':age})
        }
    }
}
</script>