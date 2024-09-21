<template>
  <el-row :gutter="40" class="panel-group2">
    <div>
      <el-cascader v-model="selectedOptions2" :options="options"  @change="handleChange2"></el-cascader>
        <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleSetLineChartData2(selectedOptions2)">
          确定
        </el-button>
    </div>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },

  data(){
    return {
      options: [{
          value: 'Sixteen',
          label: '2016年',
          children: [{
            value: 'January',
            label: '一月',
          }, {
            value: 'february',
            label: '二月',
          }, {
            value: 'March',
            label: '三月',
          }, {
            value: 'April',
            label: '四月',
          }, {
            value: 'May',
            label: '五月',
          }, {
            value: 'June',
            label: '六月',
          }, {
            value: 'July',
            label: '七月',
          }, {
            value: 'August',
            label: '八月',
          }, {
            value: 'September',
            label: '九月',
          }, {
            value: 'October',
            label: '十月',
          }, {
            value: 'November',
            label: '十一月',
          }, {
            value: 'December',
            label: '十二月',
          }]
          }, {
          value: 'Seventeen',
          label: '2017年',
          children: [{
            value: 'January',
            label: '一月',
          }, {
            value: 'february',
            label: '二月',
          }, {
            value: 'March',
            label: '三月',
          }, {
            value: 'April',
            label: '四月',
          }, {
            value: 'May',
            label: '五月',
          }, {
            value: 'June',
            label: '六月',
          }, {
            value: 'July',
            label: '七月',
          }, {
            value: 'August',
            label: '八月',
          }, {
            value: 'September',
            label: '九月',
          }, {
            value: 'October',
            label: '十月',
          }, {
            value: 'November',
            label: '十一月',
          }, {
            value: 'December',
            label: '十二月',
          }]
          }, {
          value: 'Eighteen',
          label: '2018年',
          children: [{
            value: 'January',
            label: '一月',
          }, {
            value: 'february',
            label: '二月',
          }, {
            value: 'March',
            label: '三月',
          }, {
            value: 'April',
            label: '四月',
          }, {
            value: 'May',
            label: '五月',
          }, {
            value: 'June',
            label: '六月',
          }, {
            value: 'July',
            label: '七月',
          }, {
            value: 'August',
            label: '八月',
          }, {
            value: 'September',
            label: '九月',
          }, {
            value: 'October',
            label: '十月',
          }, {
            value: 'November',
            label: '十一月',
          }, {
            value: 'December',
            label: '十二月',
          }]
          }, {
          value: 'Nineteen',
          label: '2019年',
          children: [{
            value: 'January',
            label: '一月',
          }, {
            value: 'february',
            label: '二月',
          }, {
            value: 'March',
            label: '三月',
          }, {
            value: 'April',
            label: '四月',
          }, {
            value: 'May',
            label: '五月',
          }, {
            value: 'June',
            label: '六月',
          }, {
            value: 'July',
            label: '七月',
          }, {
            value: 'August',
            label: '八月',
          }, {
            value: 'September',
            label: '九月',
          }, {
            value: 'October',
            label: '十月',
          }, {
            value: 'November',
            label: '十一月',
          }, {
            value: 'December',
            label: '十二月',
          }]
          }, {
          value: 'Twenty',
          label: '2020年',
          children: [{
            value: 'January',
            label: '一月',
          }, {
            value: 'february',
            label: '二月',
          }, {
            value: 'March',
            label: '三月',
          }, {
            value: 'April',
            label: '四月',
          }, {
            value: 'May',
            label: '五月',
          }, {
            value: 'June',
            label: '六月',
          }, {
            value: 'July',
            label: '七月',
          }, {
            value: 'August',
            label: '八月',
          }, {
            value: 'September',
            label: '九月',
          }, {
            value: 'October',
            label: '十月',
          }, {
            value: 'November',
            label: '十一月',
          }, {
            value: 'December',
            label: '十二月',
          }]
      }],
      selectedOptions: [],
      selectedOptions2: []
    }
  },

  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleChange2(value) {
      console.log(value)
    },
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData',type)
    },
    handleSetLineChartData2(type) {
      this.$emit('handleSetLineChartData2',type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group2 {
  margin-top: 18px;
  margin-bottom: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0,
 0,
 0,
 .05);
    border-color: rgba(0,
 0,
 0,
 .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0,
 0,
 0,
 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
