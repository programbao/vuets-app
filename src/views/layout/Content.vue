<template>
  <el-container class="layout-content">
    <!-- 左侧菜单 -->
    <el-aside>
      <slot name="left"></slot>
    </el-aside>
    <!-- 右侧菜单 -->
    <el-main class="el-main">
      <!-- 面包屑 -->
      <div class="top">
        <i class="fa fa-reorder"></i>
        <!-- 属性separator 代表用什么来分割内容 -->
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详细</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 页面内容 -->
      <div class="content">
        <!-- <solt name="content"></solt> -->
        <slot name="content"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {}
</script>

<style lang="scss" scoped>
.layout-content {
  width: 100%;
  height: 100%;
  .el-main {
    padding: 0;
    overflow-y: hidden;
    .top {
      background: #fff;
      height: 54px;
      border-right: none;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        cursor: pointer;
        padding-left: 16px;
      }
      .breadcrumb {
        padding-left: 16px;
      }
    }
    .content {
      padding: 10px;
      height: calc(100% - 54px);
      box-sizing: border-box;
    }
  }
}
</style>
