<template>
    <div id="SingleBlog">
        <h1>{{blog.title}}</h1>
        <p>{{blog.body}}</p>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{},
            }
        },
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
                .then(function (data) {
                    this.blog = data.body;
                })
        }
    }
</script>

<style scoped>

</style>