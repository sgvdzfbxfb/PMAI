<template>
  <div class="weatherInfluence-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row :gutter="32" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="16">
        <div>
          <bar-chart :chart-data="lineChartData" />
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="8">
        <div>
          <pie-chart :chart-data="lineChartData" />
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="8">
        <line-chart :chart-data="lineChartData" />
      </el-col>
    </el-row>

  </div>
</template>

<script>

import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

const lineChartData = {
  WindSpeed: {
    widthData: '18%',
    pieData: [{ value: 320, name: '100-275m/s' },{ value: 240, name: '276-450m/s' },{ value: 149, name: '451-625m/s' },{ value: 100, name: '626-800m/s' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404],
    xaxisData: ['100m/s', '200m/s', '300m/s', '400m/s', '500m/s', '600m/s', '700m/s', '800m/s'],
    legendData: ['100-275m/s', '276-450m/s', '451-625m/s', '626-800m/s'],
    seriesName: 'PM2.5平均浓度'
  },
  Precipitation: {
    widthData: '18%',
    pieData: [{ value: 320, name: '10-24mm' },{ value: 240, name: '25-38mm' },{ value: 490, name: '39-52mm' },{ value: 170, name: '53-66mm' },{ value: 380, name: '67-80mm' }],
    minData: [399, 689, 157, 606, 127, 662, 126, 262],
    aveData: [422, 690, 213, 679, 213, 766, 140, 310],
    maxData: [523, 777, 255, 754, 236, 799, 164, 433],
    xaxisData: ['10mm', '20mm', '30mm', '40mm', '50mm', '60mm', '70mm', '80mm'],
    legendData: ['10-24mm', '25-38mm', '39-52mm', '53-66mm', '67-80mm'],
    seriesName: 'PM2.5平均浓度'
  },
  Temperature: {
    widthData: '15%',
    pieData: [{ value: 320, name: '-40~-20℃' },{ value: 240, name: '-19~0℃' },{ value: 490, name: '1~20℃' },{ value: 170, name: '21-40℃' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365, 213],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387, 256],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404, 303],
    xaxisData: ['-40℃', '-30℃', '-20℃', '-10℃', '0℃', '10℃', '20℃', '30℃', '40℃'],
    legendData: ['-40~-20℃', '-19~0℃', '1~20℃', '21-40℃'],
    seriesName: 'PM2.5平均浓度'
  },
  AtmosphericPressure: {
    widthData: '12%',
    pieData: [{ value: 320, name: '950-970hpa' },{ value: 240, name: '971-990hpa' },{ value: 490, name: '991-1010hpa' },{ value: 170, name: '1011-1030hpa' },{ value: 380, name: '1031-1050hpa' }],
    minData: [399, 689, 157, 606, 127, 662, 126, 262, 689, 157, 127],
    aveData: [422, 690, 213, 679, 213, 766, 140, 310, 690, 213, 213],
    maxData: [523, 777, 255, 754, 236, 799, 164, 433, 777, 255, 255],
    xaxisData: ['950hpa', '960hpa', '970hpa', '980hpa', '990hpa', '1000hpa', '1010hpa', '1020hpa', '1030hpa', '1040hpa', '1050hpa'],
    legendData: ['950-970hpa', '971-990hpa', '991-1010hpa', '1011-1030hpa', '1031-1050hpa'],
    seriesName: 'PM2.5平均浓度'
  },
    RelativeHumidity: {
    widthData: '12%',
    pieData: [{ value: 320, name: '0-20%' },{ value: 240, name: '21-40%' },{ value: 490, name: '41-60%' },{ value: 170, name: '61-80%' },{ value: 380, name: '81-100%' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365, 167, 192, 167],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387, 299, 217, 299],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404, 382, 271, 382],
    xaxisData: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    legendData: ['0-20%', '21-40%', '41-60%', '61-80%', '81-100%'],
    seriesName: 'PM2.5平均浓度'
  },
}

export default {
  name: 'weatherInfluence',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData.WindSpeed
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.weatherInfluence-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>