<template>
  <div class="form-data">
    <el-form ref="ruleForm" :rules="rules" :model="form" label-width="100px">
<<<<<<< HEAD
      <el-form-item label="课程名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入课程名称"></el-input>
      </el-form-item>

      <el-form-item label="课程等级" prop="level">
        <el-select v-model="form.level" placeholder="请选择课程等级">
=======
      <el-form-item label="内容名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入内容名称"></el-input>
      </el-form-item>

      <el-form-item label="内容级别" prop="level">
        <el-select v-model="form.level" placeholder="请选择内容级别">
>>>>>>> dcbef54... feat(product_list/import_list)
          <el-option label="初级" value="初级"></el-option>
          <el-option label="中级" value="中级"></el-option>
          <el-option label="高级" value="高级"></el-option>
        </el-select>
      </el-form-item>

<<<<<<< HEAD
      <el-form-item label="报名人数" prop="count">
        <el-input v-model="form.count" palceholder="请输入报名人数"></el-input>
      </el-form-item>

      <el-form-item label="上线时间" prop="date">
=======
      <el-form-item label="计划时长" prop="count">
        <el-input v-model="form.count" palceholder="请输入计划时长"></el-input>
      </el-form-item>

      <el-form-item label="开始时间" prop="date">
>>>>>>> dcbef54... feat(product_list/import_list)
        <el-date-picker
          type="date"
          placeholder="选择时间"
          v-model="form.date"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="技术栈" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio label="vue" name="type"></el-radio>
          <el-radio label="react" name="type"></el-radio>
          <el-radio label="node" name="type"></el-radio>
          <el-radio label="小程序" name="type"></el-radio>
          <el-radio label="angular" name="type"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')" type="primary" size="samll"
<<<<<<< HEAD
          >创建课程</el-button
=======
          >创建内容</el-button
>>>>>>> dcbef54... feat(product_list/import_list)
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormData extends Vue {
  private form: object = {
    title: "",
    type: "",
    level: "",
    count: "",
    date: ""
  };

  private rules: any = {
<<<<<<< HEAD
    title: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
    level: [{ required: true, message: "请输入课程等级", trigger: "change" }],
    count: [{ required: true, message: "请输入报名人数", trigger: "blur" }],
=======
    title: [{ required: true, message: "请输入内容名称", trigger: "blur" }],
    level: [{ required: true, message: "请输入内容级别", trigger: "change" }],
    count: [{ required: true, message: "请输入计划时长", trigger: "blur" }],
>>>>>>> dcbef54... feat(product_list/import_list)
    date: [
      {
        type: "string",
        required: true,
        message: "请选择时间",
        trigger: "change"
      }
    ],
    type: [
      {
        required: true,
        message: "请选择技术栈",
        trigger: "change"
      }
    ]
  };

  // 点击的时候验证各参数是否通过
  submitForm(formName: any) {
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        (this as any).$axios
          .post(`api/profiles/add`, this.form)
          .then((res: any) => {
            console.log(res.data);
            (this as any).$message({
              message: res.data.msg,
              type: "success"
            });
            this.resetForm(formName);
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    });
  }

  resetForm(formName: string) {
    (this as any).$refs[formName].resetFields();
  }
}
</script>

<style lang="scss" scoped>
.form-data {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  padding: 35px;
  background: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

  .el-input,
  .el-select {
    width: 200px !important;
  }
  .division {
    margin: 0 10px;
    color: #606266;
  }
}
</style>
