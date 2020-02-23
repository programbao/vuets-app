<template>
  <div class="password">
    <LoginHeader>
      <el-form
        slot="container"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
      >
        <div class="title">
          <h3>找回密码</h3>
        </div>
        <!-- username -->
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            auto-complete="off"
            placeholder="账号"
          >
            <i slot="prefix" class="fa fa-user"></i>
          </el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="email">
          <el-input
            type="text"
            v-model="ruleForm.email"
            auto-complete="off"
            placeholder="邮箱"
          >
            <i slot="prefix" class="fa fa-envelope"></i>
          </el-input>
        </el-form-item>

        <!-- 确定找回 -->
        <el-form-item>
          <el-button
            type="primary"
            style="width: 100%"
            :loading="loading"
            @click.native.prevent="handleSubmit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";

@Component({
  components: { LoginHeader }
})
export default class Password extends Vue {
  private loading: boolean = false; // 是否发起网络请求
  private ruleForm: {
    username: string;
    email: string;
  } = {
    username: "",
    email: ""
  };

  private rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      {
        required: true,
        message: "请输入邮箱地址",
        trigger: "blur"
      },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: "blur,change"
      }
    ]
  };

  handleSubmit(): void {
    (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
      console.log(valid);
      const _this = this as any;
      if (valid) {
        this.loading = true;
        // 网络请求
        _this.$axios
          .post("/api/users/findPwd", _this.ruleForm)
          .then((res: any) => {
            console.log(res.data);
            _this.loading = false;
            _this.$message({
              message: res.data.msg,
              type: "success"
            });
            _this.$router.push("/login");
          })
          .catch((err: any) => {
            this.loading = false;
          });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

i {
  font-size: 14px;
  margin-left: 8px;
}
</style>
