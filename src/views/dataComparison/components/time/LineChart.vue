<template>
  <div :class="className" :style="{height:height,width:width}" />
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
      default: '325px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
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
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ beijing, chengdu, shanghai, guangzhou, hangzhou, shenzhen } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['1-3日', '4-6日', '7-9日', '9-11日', '12-14日', '15-17日', '18-20日', '21-23日', '24-26日', '月底'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['北京', '成都', '上海', '广州', '杭州', '深圳']
        },
        series: [{
          name: '北京', itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: beijing,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '成都', itemStyle: {
            normal: {
              color: '#1CE395',
              lineStyle: {
                color: '#1CE395',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: chengdu,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '上海', itemStyle: {
            normal: {
              color: '#FA5F30',
              lineStyle: {
                color: '#FA5F30',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: shanghai,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '广州', itemStyle: {
            normal: {
              color: '#885AF7',
              lineStyle: {
                color: '#885AF7',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: guangzhou,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '杭州', itemStyle: {
            normal: {
              color: '#F25AF7',
              lineStyle: {
                color: '#F25AF7',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: hangzhou,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '深圳',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: shenzhen,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>
