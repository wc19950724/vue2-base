<template>
  <el-container class="layout-wrapper">
    <el-header class="layout-header">
      <LayoutHeader />
    </el-header>
    <el-container>
      <el-aside class="layout-aside" width="200px">
        <LayoutSideNav />
      </el-aside>
      <el-main class="layout-main">
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
.layout-wrapper {
  width: 100%;
  height: 100%;

  .layout-header {
    background-color: #333;
    color: #fff;
  }

  .layout-aside {
    background-color: #333;
    color: #fff;
  }

  .layout-main {
    background-color: #fff;
  }
}
</style>
