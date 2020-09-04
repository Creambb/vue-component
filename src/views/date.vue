<template>
    <date-picker :startTime="startTime" :endTime="endTime" :dateValue="dateValue" @getTimeData="getTimeData"></date-picker>
</template>

<script>
export default {
  created() {
    this.endTime = new Date().getTime();
    this.startTime = this.endTime - 3600 * 1000 * 24 * 7;
  },
  mounted() {},
  data() {
    return {
      dateValue: [],
      startTime: 0,
      endTime: 0
    };
  },
  methods: {
    getTimeData(startTime, endTime) {
      this.startTime = startTime;
      this.endTime = endTime;
      console.log(startTime);
      console.log(endTime);
    }
  }
};
</script>

<style>
</style>
