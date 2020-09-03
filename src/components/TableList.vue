<template>
    <div class="data-table">
        <el-table :data="tableData" style="width: 100%" v-loading="loading" :default-sort="defaultSort">
            <el-table-column v-if="sequence" label="序号" type="index" width="50" align="center">
                <template slot-scope="scope">
                    <!-- 有分页时，序号显示 -->
                    <span v-if="pageObj">{{(pageObj.currentPage - 1)*pageObj.size + scope.$index + 1}}</span>
                    <!-- 无分页时，序号显示 -->
                    <span v-else>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <template v-for="(col, index) in columns">
                <!-- 操作列/自定义列 -->
                <slot v-if="col.slot" :name="col.slot" class="slot"></slot>
                <!-- 普通列 -->
                <el-table-column v-else :key="index" :prop="col.prop" :label="col.label" :sortable="col.sortable" :formatter="col.formatter" align="center">
                </el-table-column>
            </template>
        </el-table>
        <!-- 是否调用分页 -->
        <div class="pagination">
            <el-pagination v-if="pageObj" background layout="total, prev, pager, next, jumper" :page-size="pageObj.size" :total="pageObj.total" :current-page="pageObj.currentPage" @current-change="pageObj.func">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: "dataTable",
  props: {
    // 表格数据
    tableData: {
      type: Array,
      required: true,
      default: () => []
    },
    // 表头标题
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // 是否显示序列号
    sequence: {
      type: Boolean,
      default: true
    },
    // 显示加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 默认排序
    defaultSort: {
      type: Object,
      required: false,
      default: () => {}
    },
    // 分页
    pageObj: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style>
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
