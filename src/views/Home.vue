<template>
  <div class="home">
    <div class="home-body">
      <h4 class="title">管理系统</h4>
      <p class="des">每个人都应该学习编程</p>
<<<<<<< HEAD
      <el-button>进入学习</el-button>
=======
      <el-button type="primary" @click="open">进入学习</el-button>
>>>>>>> dcbef54... feat(product_list/import_list)
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  // learn(): void {
  //   // 记： 从新窗口打开
  //   window.open();
  // }
<<<<<<< HEAD
=======
  open() {
    (this as any).$alert('对不起暂无', '学习内容', {
      confirmButtonText: '确定',
      callback: (action: any) => {
        (this as any).$message({
          type: 'info',
          message: `完成操作`
        });
      }
    });
  }
>>>>>>> dcbef54... feat(product_list/import_list)
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  background-size: 100% 100%;
  .home-body {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    padding: 100px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
      font-weight: bold;
      line-height: 60px;
    }
    .des {
      font-size: 18px;
      margin: 40px 0;
    }
  }
}
</style>
