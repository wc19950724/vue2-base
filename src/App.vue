<template>
  <section>
    <h1>{{ message }}</h1>
    <router-link to="/index">home</router-link>
    <router-link to="/table">table</router-link>
    <el-button>默认按钮</el-button>
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello World!!",
    };
  },
  mounted() {
    console.log("hello world!");
  },
};
</script>
