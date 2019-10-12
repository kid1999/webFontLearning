<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="submited">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required><br>
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.studys">
                <label>Java</label>
                <input type="checkbox" value="Java" v-model="blog.studys">
                <label>Hadoop</label>
                <input type="checkbox" value="Hadoop" v-model="blog.studys">
            </div>
            <label>作者:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent="post">添加博客</button>
        </form>
        <div v-if="!submited">
            <h3>你已经提交过了!</h3>
        </div>
        <hr>
        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题: {{blog.title}}</p>
            <p>博客内容: </p>
            <p>{{blog.content}}</p>
            <p>博客分类:</p>
            <ul>
                <li v-for="flag in blog.studys">{{flag}}</li>
            </ul>
            <p>作者: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "add-blog",
    data(){
        return{
            blog:{
                title:"",
                content:"",
                studys:[],
                author:"",
            },
            authors:['kid','peter','tom'],
            submited:true,
        }
    },
    //此处使用VueResource ajax
    methods:{
        // post by vue-resouce
        // post:function () {
        //     this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        //         title:this.blog.title,
        //         body:this.blog.content,
        //         userId:1,
        //     }).then(function (data) {
        //         console.log(data);
        //         this.submited = false;
        //     });
        // },
        // post by axios
        post:function () {
            axios.post("/posts",{
                title:this.blog.title,
                body:this.blog.content,
                userId:1,
            }).then((data) =>{
                console.log(data);
                this.submited = false;
            });
        }
    }
}
</script>

<style scoped>

</style>