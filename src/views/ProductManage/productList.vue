<template>
  <div>
    <div class="add-box">
      <el-button @click="addProduct" type="primary">导入列表</el-button>
    </div>
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
      <el-table-column prop="title" label="title"> </el-table-column>
      <el-table-column prop="handle" label="handle"></el-table-column>
      <el-table-column prop="created_at" label="created_at"></el-table-column>
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
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PruductLsit extends Vue {
  private tableData: any = [
    {
      store_id: 1000,
      created_at: "2016-05-03",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-02",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-04",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-01",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-08",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-06",
      title: "product title",
      handle: "product handle",
    },
    {
      store_id: 1000,
      created_at: "2016-05-07",
      title: "product title",
      handle: "product handle",
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
  addProduct() {
    this.$router.push({ path: "/importProduct", query: { id: "jjj" } });
  }
}
</script>

<style lang="scss" scope>
.add-box {
  margin-bottom: 10px;
}
</style>
