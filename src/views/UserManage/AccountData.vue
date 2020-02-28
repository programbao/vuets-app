<template>
  <div class="account-data">
    <div class="add-box">
      <el-button @click="addAccount" type="primary">新增用户</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <el-select
            @change="selectChange(scope.row)"
            v-if="scope.row.edit"
            v-model="scope.row.role"
          >
            <el-option
              v-for="option in options"
              :label="option.role"
              :value="option.role"
              :key="option.key"
            ></el-option>
          </el-select>
          <span>{{ scope.row.role }}</span>
        </template>
      </el-table-column>
      <el-table-column label="账号" width="180">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.username"
            v-if="scope.row.edit"
          ></el-input>
          <span v-else>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope" v-if="scope.row.username != 'admin'">
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            v-if="!scope.row.edit"
            size="mini"
            >编辑</el-button
          >
          <el-button
            v-else
            type="success"
            @click="handleSave(scope.$index, scope.row)"
            size="mini"
            >完成</el-button
          >
          <el-button @click="handleDelete" size="mini" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <AddAccount
      @update="getData"
      @closeDialog="closeDialog"
      :dialogVisible="dialogVisible"
      :options="options"
    >
    </AddAccount>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddAccount from "./AddAccount.vue";

@Component({
  components: { AddAccount }
})
export default class AccountData extends Vue {
  private tableData: any = [];
  private dialogVisible: boolean = false;
  // select 数据
  private options: any = [
    {
      key: "admin",
      role: "管理员",
      des: "Super Administrator. Have access to view all "
    },
    {
      key: "editor",
      role: "客服",
      des: "Super Administrator. Have access to view all "
    },
    {
      key: "visitor",
      role: "游客",
      des: "Super Administrator. Have access to view all "
    }
  ];

  created() {
    this.getData();
  }

  handleEdit(index: number, row: any) {
    // 编辑
    row.edit = true;
  }

  handleDelete(index: number, row: any) {
    // 删除
    (this as any)
      .post(`api/users/deleteUser/${row._id}`, row)
      .then((res: any) => {
        (this as any).$message({
          message: res.data.msg,
          type: "success"
        });

        this.tableData.splice(index, 1);
      });
  }

  handleSave(index: number, row: any) {
    // 完成
    row.edit = false;
    (this as any).$axios
      .post(`api/users/editUser/${row._id}`, row)
      .then((res: any) => {
        (this as any).$message({
          message: res.data.msg,
          type: "success"
        });
      });
  }

  selectChange(item: any) {
    this.options.map((option: any) => {
      if (option.role === item.role) {
        item.key = option.key;
        item.des = option.des;
      }
    });
  }

  getData() {
    (this as any).$axios("/api/users/allUsers").then((res: any) => {
      // 设置编辑状态
      res.data.datas.forEach((item: any) => {
        item.edit = false;
      });
      this.tableData = res.data.datas;
    });
  }

  addAccount() {
    this.dialogVisible = true;
  }

  closeDialog() {
    this.dialogVisible = false;
  }
}
</script>

<style lang="scss" scoped>
.account-data {
  height: 100%;
  overflow: auto;
  .add-box {
    margin-bottom: 10px;
  }
}
</style>
