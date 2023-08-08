<template>
    <section>

        <h1>my friends</h1>
        <friend-contact></friend-contact>
    </section>

</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default{
  components: { FriendContact },
    data(){
        return {
            friends: [{id: 'manuel',
                        name: 'manuel icecream',
                        phone: '480-625-6584',
                        email: 'hayd@gmail.com'},
                        {id: 'jenny',
                        name: 'jenny icecream',
                        phone: '480-625-6584',
                        email: 'jenny@gmail.com'}]
        }
    }
}
</script>