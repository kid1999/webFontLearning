<template>
    <div id="BlogHeader">
        <nav>
            <ul>
                <li>
                    <router-link to="/" exact>博客</router-link>
                </li>
                <li>
                    <router-link to="/add" exact>写博客</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "BlogHeader"
    }
</script>

<style scoped>

</style>