<template>
  <table-list :sequence="sequence" :tableData="tableData" :columns="columns" :loading="loading" :pageObj="pageObj" :defaultSort="defaultSort" :cellStyle="cellStyle">
    <el-table-column slot="action" label="操作" align="center" fixed="right">
      <template slot-scope="scope">
        <a class="action" v-if="scope.$index !== 0" @click="edit(scope.$index)">编辑</a>
        <a class="action" v-if="scope.$index !== 1">删除</a>
        <!-- <el-button size="small" type="warning" icon='el-icon-edit' @click="edit(scope.row)">编辑
                </el-button>
                <el-button size="small" type="primary" icon='el-icon-success' @click="startUsing(scope.row)">启用
                </el-button> -->
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
      cellStyle: function(data) {
        if (data.columnIndex == 3) {
          return data.row.age < 18 ? "color: #dd2727;" : "color: #03be67;";
        }
      },
      // 是否进行排序
      sequence: true,
      // 是否显示加载中
      loading: false,
      // 默认排序
      defaultSort: {
        prop: "date",
        order: "descending"
      },
      // 表单数据
      tableDataList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          age: 18,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          age: 20,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 24,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 24,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 12,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          age: 12,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 18,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 18,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 20,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 16,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData: [],
      // 表头标题
      columns: [
        { label: "日期", prop: "date", sortable: true },
        { label: "名称", prop: "name" },
        { label: "年龄", prop: "age" },
        { label: "地址", prop: "address" },
        // 操作列
        { slot: "action" }
      ],
      // 分页
      pageObj: {
        size: 10,
        total: 1,
        currentPage: 1,
        func: currentPage => {
          //   this.pageTurning(currentPage);
          this.pageObj.currentPage = currentPage;
          let start = (currentPage - 1) * 10;
          let end = start + this.pageObj.size;
          this.tableData = this.tableDataList.slice(start, end);
        }
      }
    };
  },
  methods: {
    edit(index) {
      alert(`编辑第${index + 1}列`);
    }
  }
};
</script>

<style>
.action {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
</style>
