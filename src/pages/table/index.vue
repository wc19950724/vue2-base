<template>
  <section>
    <h1>table</h1>
    <span>{{ count }}</span>
    <el-checkbox></el-checkbox>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 12,
    };
  },
  mounted() {
    console.log("123");
  },
};
</script>
