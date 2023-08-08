<template>
    <li>
        <h2>{{ friends.name }}</h2>
        <button @click="toggleDetails">show details</button>
        <ul v-if="deatailsAreVisible">
            <li> <strong>Phone:</strong> {{ friends.phone}}</li>
            <li><strong>Email:</strong> {{ friends.email}}</li>
        </ul>
    </li>
</template>
<script>
export default {
    data(){
        return{
        deatailsAreVisible: true,
        friends: {id: 'manuel',
                        name: 'manuel icecream',
                        phone: '480-625-6584',
                        email: 'hayd@gmail.com'}
        }
        },
    methods:{
        toggleDetails(){
            this.deatailsAreVisible = !this.deatailsAreVisible
        }
    }
    };
</script>