<template>
  <div>
    <div class="block">
      <el-date-picker v-model="value" type="daterange" align="right" unlink-panels start-placeholder="开始日期" end-placeholder="结束日期" :clearable="clearable" :picker-options="pickerOptions" value-format="timestamp" @change="onChangeDate">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "datePicker",
  props: {
    startTime: {
      type: Number,
      default: 0
    },
    endTime: {
      type: Number,
      default: 0
    },
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否显示时间快捷
    isShortcuts: {
      type: Boolean,
      default: false
    },
    defaultDateValue: {
      type: Array,
      default: () => []
    },
    dateValue: {
      type: Array,
      default: () => []
    },
    disabledBeforeDate: {
      type: Boolean,
      default: false
    },
    disabledAfterDate: {
      type: Boolean,
      default: false
    },
    disabledIncludeToday: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.pickerOptions.shortcuts = this.isShortcuts
      ? this.pickerOptions.shortcuts
      : null;
    this.getLastMonth();
    // this.defaultDateValue.push(this.getLastMonth(), this.getNowTime());
    // this.value = this.defaultDateValue;
    this.value.push(this.startTime, this.endTime);
  },
  data() {
    return {
      dateFormat: "YYYY-MM-DD",
      pickerOptions: {
        shortcuts: [
          {
            text: "昨天",
            onClick: picker => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              end.setTime(this.getNowTime());
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一周",
            onClick: picker => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              end.setTime(this.getNowTime());
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick: picker => {
              const end = new Date();
              const start = new Date();
              start.setTime(this.getLastMonth());
              end.setTime(this.getNowTime());
              picker.$emit("pick", [start, end]);
            }
          }
        ],
        disabledDate: time => {
          let date;
          if (this.disabledBeforeDate) {
            date = time.getTime() <= Date.now() - 8.64e6;
          }
          if (this.disabledAfterDate) {
            date = time.getTime() >= Date.now() - 8.64e6;
          }
          return date;
        }
      },
      value: []
    };
  },
  methods: {
    onChangeDate(time) {
      let startTime, endTime;
      if (time) {
        startTime = time[0] ? time[0] : null;
        endTime = time[1] ? time[1] : null;
      } else {
        startTime = null;
        endTime = null;
      }
      this.$emit("getTimeData", startTime, endTime);
    },
    getNowTime() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      return Date.UTC(year, month, day);
    },
    getLastMonth() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1; //0-11表示1-12月
      var day = now.getDate();
      if (month - 1 <= 0) {
        //如果是1月，年数往前推一年<br>
        year = year - 1;
        month = 12;
      } else {
        month = parseInt(month) - 1;
        var lastMonthDay = new Date(year, month, 0).getDate();
        //1个月前所在月的总天数小于现在的天日期
        day = lastMonthDay < day ? lastMonthDay : day;
      }
      return Date.UTC(year, month - 1, day);
    }
  }
};
</script>