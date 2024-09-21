<template>
    <div :class="pie-chart" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart2: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart2) {
      return
    }
    this.chart2.dispose()
    this.chart2 = null
  },
  methods: {
    initChart() {
      this.chart2 = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ pieData } = {}) {
      this.chart2.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['华北地区', '东北地区', '华东地区', '中南地区', '西南地区', '西北地区']
        },
        series: [
          {
            name: '地区PM2.5浓度',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: pieData,
            // [
            //   { value: 320, name: '华北地区' },
            //   { value: 240, name: '东北地区' },
            //   { value: 149, name: '华东地区' },
            //   { value: 100, name: '中南地区' },
            //   { value: 180, name: '西南地区' },
            //   { value: 120, name: '西北地区' }
            // ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
