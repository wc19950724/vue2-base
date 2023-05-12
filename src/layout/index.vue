<template>
  <el-container class="layout-wrapper">
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-container>
      <el-aside>
        <LayoutSideNav />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {
    LayoutSideNav: () => import("./components/side-nav"),
    LayoutHeader: () => import("./components/header"),
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/layout";
</style>
