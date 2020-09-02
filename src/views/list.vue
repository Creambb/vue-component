<template>
  <table-list :tableData="tableData" :columns="columns" :loading="loading" :pageObj="pageObj">
    <el-table-column slot="operate" label="操作" align="center" fixed="right" width="300">
      <template slot-scope="scope">

      </template>
    </el-table-column>
  </table-list>
</template>

<script>
export default {
  mounted() {
    this.pageObj.total = this.tableDataList.length;
    this.tableData = this.tableDataList.slice(0, 10);
  },
  data() {
    return {
      tableDataList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData: [],
      columns: [
        { label: "日期", prop: "date" },
        { label: "名称", prop: "name" },
        { label: "地址", prop: "address" },
        { slot: "operate" }
      ], // 操作列
      loading: false,
      pageObj: {
        size: 10,
        total: 1,
        currentPage: 1,
        func: currentPage => {
          //   this.pageTurning(currentPage);
          console.log((currentPage - 1) * 10);
          let start = (currentPage - 1) * 10;
          let end = start + this.pageObj.size;
          this.tableData = this.tableDataList.slice(start, end);
        }
      }
    };
  }
};
</script>

<style>
</style>
