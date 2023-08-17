<template>
    <div>
        <h1>{{ username }}</h1>
        <h2>{{ age }}</h2>
    </div>

</template>

<script>
export default{
    props:{
        username:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        }
    },
    data(){
        return {

        }
    }
}
</script>