<template>
  <section>
    <h1>home</h1>
    <span v-loading="true">{{ count }}</span>
    <el-button v-loading></el-button>
    <el-radio></el-radio>
    <el-switch></el-switch>
    <el-slider></el-slider>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 12,
    };
  },
  methods: {
    add() {
      this.$message();
      this.$notify();
    },
  },
};
</script>
