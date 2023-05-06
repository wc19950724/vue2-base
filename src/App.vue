<template>
  <section>{{ message }}</section>
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
