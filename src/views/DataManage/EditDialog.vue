<template>
  <!-- <div> -->
  <el-dialog
    :close-on-click-modal="false"
<<<<<<< HEAD
    title="编辑课程"
=======
    title="编辑内容"
>>>>>>> dcbef54... feat(product_list/import_list)
    :show-close="false"
    :visible.sync="dialogVisible"
  >
    <el-form
      :rules="rules"
      ref="ruleForm"
      :model="form"
      lable-width="100px"
      size="small"
      class="form-box"
    >
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
        <el-input v-model="form.count" palceholder="请输入时长"></el-input>
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
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')" size="samll">取消</el-button>
      <el-button @click="submitForm('ruleForm')" type="primary" size="samll"
        >确定</el-button
      >
    </span>
  </el-dialog>
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class EidtDialog extends Vue {
  // 属性或者参数中使用(!): 表示强制解析 （告诉typescript编辑器，这里一定有值），常用于vue-decorator 中的@Prop
  @Prop(Boolean) dialogVisible!: Boolean;
  @Prop(Object) form!: {
    title: string;
    type: string;
    level: string;
    count: string;
    date: string;
    _id: string;
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
<<<<<<< HEAD
        required: true,
=======
        required: false,
>>>>>>> dcbef54... feat(product_list/import_list)
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
          .post(`/api/profiles/edit/${this.form._id}`)
          .then((res: any) => {
            console.log(res.data);
            this.$emit("closeDialog");
            (this as any).$message({
              message: res.data.msg,
              type: "success"
            });
          });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.form-box {
  .el-input,
  .el-select {
    width: 200px !important;
  }
}
</style>
