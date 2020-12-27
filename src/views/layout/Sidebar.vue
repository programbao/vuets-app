<template>
  <el-scrollbar class="el-scrollbar">
    <el-menu
      class="el-menu-slide"
      :default-active="$router.currentRoute.path"
      router
    >
      <template
        v-for="item in getRouters"
        v-if="item.hidden && item.children && item.children.length > 0"
      >
        <el-menu-item
          v-if="item.children.length === 1"
          :index="item.children[0].path"
          :key="item.name"
        >
          <i
            v-if="item.children[0].meta.icon"
            :class="item.children[0].meta.icon"
          ></i>
          <!-- element 里面要写标签的话，通常会加入slot属性起到站位的效果 -->
          <span slot="title">{{ item.children[0].meta.title }}</span>
        </el-menu-item>
        <!-- 多个子元素 -->
        <el-submenu v-else :index="item.children[0].path" :key="item.name">
          <template slot="title">
<<<<<<< HEAD
            <i v-if="item.meta.icon" :class="item.meta.icon"></i>
=======
            <i v-if="item.meta.title" :class="item.meta.icon"></i>
>>>>>>> dcbef54... feat(product_list/import_list)
            <!-- element 里面要写标签的话，通常会加入slot属性起到站位的效果 -->
            <span v-if="item.meta && item.meta.title" slot="title">
              {{ item.meta.title }}</span
            >
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :key="child.name"
          >
<<<<<<< HEAD
            <i v-if="child.meta.icon" :class="child.meta.icon"></i>
=======
            <i v-if="child.name === 'tableData'" class="el-icon-date"></i>
            <i v-if="child.name === 'chartsData'" class="el-icon-data-analysis"></i>
            <i v-if="child.name === 'formData'" class="el-icon-tickets"></i>
>>>>>>> dcbef54... feat(product_list/import_list)
            <span v-if="child.meta && child.meta.title" slot="title">
              {{ child.meta.title }}</span
            >
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Sidebar extends Vue {
  @Getter("routers") getRouters: any;

  created() {
    // console.log(this.getRouters);
<<<<<<< HEAD
    // console.log(this.$router.currentRoute);
=======
    console.log(this.$router.currentRoute);
    
>>>>>>> dcbef54... feat(product_list/import_list)
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
