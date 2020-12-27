<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="store_id">
        <template slot-scope="scope">{{ scope.row.store_id }}</template>
      </el-table-column>
      <el-table-column prop="file_url" label="file"> </el-table-column>
      <el-table-column prop="state" label="state"></el-table-column>
      <el-table-column prop="product_count" label="count"></el-table-column>
      <el-table-column prop="create_at" label="created_at"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)" size="mini">
            编辑
          </el-button>
          <el-button
            @click="handleDelete(scope.$index, scope.row)"
            size="mini"
            type="danger"
          >
            结束
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class importProduct extends Vue {
  private tableData: any = [
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
    {
      store_id: 1000,
      file_url: "import.csv",
      state: "canceling",
      product_count: "1",
      create_at: "2020.12.27",
    },
  ];
  private multipleSelection: any = [];
  toggleSelection(rows: any) {
    if (rows) {
      rows.forEach((row: any) => {
        (this.$refs.multipleTable as any).toggleRowSelection(row);
      });
    } else {
      (this.$refs.multipleTable as any).clearSelection();
    }
  }
  handleSelectionChange(val: any) {
    this.multipleSelection = val;
  }
  // 编辑
  handleEdit(index: number, row: any) {
    console.log(index, row);
    (this as any).formData = row;
    (this as any).dialogVisible = true;
  }

  // 删除
  handleDelete(index: number, row: any) {
    console.log(row);

    // (this as any).$axios
    //   .delete("/api/platform/products/batch_delete",{ids: row.id})
    //   .then((res: any) => {
    //     (this as any).$message({
    //       message: res.data.msg,
    //       type: "success",
    //     });
    //   });
    this.tableData.splice(index, 1);
  }
  addProduct() {}
}
</script>

<style lang="scss" scope>
.add-box {
  margin-bottom: 10px;
}
</style>
