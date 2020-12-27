<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component({
  components: {}
})
export default class App extends Vue {
  @Action("setUser") setUser: any;
  created() {
    this.setUser(localStorage.tsToken);
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  // background-color: #e3e3e3;
}
<<<<<<< HEAD
=======

// 设置scroll样式
.content {
  min-width: 900px;
}
.el-table__body-wrapper .is-scrolling-left {
  overflow-x: hidden;
}
.el-main .el-scrollbar__wrap {
  overflow-x: hidden;
}
>>>>>>> dcbef54... feat(product_list/import_list)
</style>
