<template>
  <div id="app">
<!--    <AddBlog></AddBlog>-->
<!--    <ShowBlogs></ShowBlogs>-->
      <!--根据 路由渲染页面-->
      <blog-header></blog-header>
      <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";
import BlogHeader from "./components/BlogHeader";

export default {
  name: 'app',
    components: {BlogHeader},
    // components: {
  //   AddBlog,
  //   ShowBlogs,
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
