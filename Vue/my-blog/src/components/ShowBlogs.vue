<template>
    <div id="ShowBlogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div v-for="blog in filterBlogs">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h2 v-rainbow>{{blog.title | to-upper}}</h2>
            </router-link>
            <article>{{blog.body | to-short}}</article>
            <hr>`
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
        data(){
            return{
                blogs:[],
                search:"",
            }
        },
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function (data) {
                this.blogs = data.body.slice(0,10);
                console.log(this.blogs);
            });
        },

        // 局部 设置

        // 自定义 过滤器
        filters:{
            // "to-short":function (value) {
            //     return value.slice(0,100) + "...";
            // },
            toShort(value) {
                return value.slice(0,100) + "...";
            }
        },
        // 涉及变量 变换 计算的 优先使用computed 返回值  其次用 filter
        computed:{
            filterBlogs:function () {
                return this.blogs.filter((blog) =>{
                    return blog.title.match(this.search);
                });
            }
        },
        // 自定义 指令 (钩子函数)
        directives:{
            'rainbow':{
                bind(element,binging,vnode){
                    element.style.color = '#' + Math.random().toString(16).slice(2,8);
                }
            }
        }
    }
</script>

<style scoped>

</style>