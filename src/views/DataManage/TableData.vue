<template>
  <!-- <el-scrollbar> -->
  <div class="table-data">
    <div class="table-data">
      <div class="search-box">
        <el-input
          size="small"
          v-model="searchVal"
<<<<<<< HEAD
          placeholder="请输入课程名称检索"
=======
          placeholder="请输入内容名称检索"
>>>>>>> dcbef54... feat(product_list/import_list)
        ></el-input>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-search"
          @click="handleSearch"
          >搜索</el-button
        >
      </div>
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
        :height="tHeight"
        class="table-box"
      >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
<<<<<<< HEAD
        <el-table-column label="课程名称" prop="title"></el-table-column>
        <el-table-column label="课程等级" prop="level"></el-table-column>
=======
        <el-table-column label="内容名称" prop="title"></el-table-column>
        <el-table-column label="内容级别" prop="level"></el-table-column>
>>>>>>> dcbef54... feat(product_list/import_list)
        <el-table-column
          label="技术栈"
          width="120"
          prop="type"
        ></el-table-column>
        <el-table-column
<<<<<<< HEAD
          label="报名人数"
=======
          label="计划时长"
>>>>>>> dcbef54... feat(product_list/import_list)
          width="120"
          prop="count"
        ></el-table-column>
        <el-table-column
<<<<<<< HEAD
          label="上线日期"
=======
          label="开始时间"
>>>>>>> dcbef54... feat(product_list/import_list)
          width="160"
          prop="date"
        ></el-table-column>

        <el-table-column
          label="操作"
          v-if="getUser.key != 'visitor'"
          width="160"
        >
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
      <div class="pages" ref="page-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 20]"
          :page-size="size"
          layout="total,sizes,prev,pager,next,jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <EditDialog
      @closeDialog="closeDialog"
      :dialogVisible="dialogVisible"
      :form="formData"
    ></EditDialog>
  </div>
  <!-- </el-scrollbar> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditDialog from "./EditDialog.vue";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component({
  components: { EditDialog }
})
export default class TableData extends Vue {
  @Getter("user") getUser: any;
  private searchVal: string = ""; //收缩框
  private tHeight: number = document.body.offsetHeight - 270;
  private tableData: any = []; //表格数据
  private page: number = 1; // 当前page
  private size: number = 5; // 请求数据的个数 默认为5
  private total: number = 0; // 总数据条数
  private dialogVisible: boolean = false; // 是否展示编辑页面
  private loading: boolean = true; // 是否显示加载
  private formData: object = {
    title: "",
    type: "",
    level: "",
    count: "",
    date: ""
  };

  created() {
    this.loadData();
  }

  // 加载数据
  loadData() {
    this.loading = true;
    (this as any).$axios
      .get(`api/profiles/loadMore/${this.page}/${this.size}`)
      .then((res: any) => {
<<<<<<< HEAD
        console.log(res.data);
=======
>>>>>>> dcbef54... feat(product_list/import_list)
        this.tableData = res.data.data.list;
        this.total = res.data.data.total;
        this.loading = false;
      })
      .catch((err: any) => {
        this.loading = false;
<<<<<<< HEAD
        console.log(err);
=======
>>>>>>> dcbef54... feat(product_list/import_list)
      });
  }

  // 改变页面显示条数
  handleSizeChange(val: number): void {
    this.size = val;
    console.log(this.size);
    this.page = 1;
    this.searchVal ? this.loadSearchData() : this.loadData();
  }

  // 切换页码
  handleCurrentChange(val: number): void {
    this.page = val;
    this.loadData();
    this.searchVal ? this.loadSearchData() : this.loadData();
  }

  // 搜索
  handleSearch(): void {
    // 点击搜索
    this.page = 1;
    this.searchVal ? this.loadSearchData() : this.loadData();
    // this.loadSearchData();
  }
  loadSearchData() {
    this.loading = true;
    // 加载搜索数据
    (this as any)
      .$axios(
        `/api/profiles/search/${this.searchVal}/${this.page}/${this.size}`
      )
      .then((res: any) => {
        console.log(res.data);
        this.tableData = res.data.datas.list;
        this.total = res.data.datas.total;
        this.loading = false;
      });
  }

  // 编辑
  handleEdit(index: number, row: any) {
    console.log(index, row);
    this.formData = row;
    this.dialogVisible = true;
  }

  // 删除
  handleDelete(index: number, row: any) {
    (this as any).$axios
      .delete(`/api/profiles/delete/${row._id}`)
      .then((res: any) => {
        (this as any).$message({
          message: res.data.msg,
          type: "success"
        });
      });
    this.tableData.splice(index, 1);
  }

  closeDialog() {
    this.dialogVisible = false;
  }
}
</script>
<style lang="scss" scoped>
.table-data {
  height: 100%;
  .table-box {
    font-size: 14px;
  }
  .pages {
    background: #fff;
    margin-top: 10px;
    padding: 10px 10px;
    text-align: right;
    height: 55px;
    box-sizing: border-box;
  }
  .search-box {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px 10px;
    border-radius: 4px;
    height: 55px;
    box-sizing: border-box;
    .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
}
</style>
