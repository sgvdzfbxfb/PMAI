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
  Engel: {
    widthData: '12%',
    pieData: [{ value: 320, name: '20-25%' },{ value: 240, name: '25-30%' },{ value: 490, name: '30-35%' },{ value: 170, name: '35-40%' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365, 167, 192, 167],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387, 299, 217, 299],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404, 382, 271, 382],
    xaxisData: ['20%', '22%', '24%', '26%', '28%', '30%', '32%', '34%', '36%', '38%', '40%'],
    legendData: ['20-25%', '25-30%', '30-35%', '35-40%'],
    seriesName: 'PM2.5平均浓度'
  },
  aveGDP: {
    widthData: '15%',
    pieData: [{ value: 320, name: '1~3w' },{ value: 240, name: '3~5w' },{ value: 490, name: '5~7w' },{ value: 170, name: '7-9w' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365, 213],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387, 256],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404, 303],
    xaxisData: ['1w', '2w', '3w', '4w', '5w', '6w', '7w', '8w', '9w'],
    legendData: ['1~3w', '3~5w', '5~7w', '7-9w'],
    seriesName: 'PM2.5平均浓度'
  },
  GDP: {
    widthData: '12%',
    pieData: [{ value: 320, name: '950-970w亿' },{ value: 240, name: '971-990w亿' },{ value: 490, name: '991-1010w亿' },{ value: 170, name: '1011-1030w亿' },{ value: 380, name: '1031-1050w亿' }],
    minData: [95, 167, 192, 694, 160, 406, 165, 365, 167, 192, 167],
    aveData: [87, 299, 217, 714, 196, 595, 189, 387, 299, 217, 299],
    maxData: [111, 382, 271, 754, 236, 636, 206, 404, 382, 271, 382],
    xaxisData: ['950w亿', '960w亿', '970w亿', '980w亿', '990w亿', '1000w亿', '1010w亿', '1020w亿', '1030w亿', '1040w亿', '1050w亿'],
    legendData: ['950-970w亿', '971-990w亿', '991-1010w亿', '1011-1030w亿', '1031-1050w亿'],
    seriesName: 'PM2.5平均浓度'
  },
    HeavyIndustry: {
    widthData: '12%',
    pieData: [{ value: 320, name: '0-20%' },{ value: 240, name: '21-40%' },{ value: 490, name: '41-60%' },{ value: 170, name: '61-80%' },{ value: 380, name: '81-100%' }],
    minData: [399, 689, 157, 606, 127, 662, 126, 262, 689, 157, 127],
    aveData: [422, 690, 213, 679, 213, 766, 140, 310, 690, 213, 213],
    maxData: [523, 777, 255, 754, 236, 799, 164, 433, 777, 255, 255],
    xaxisData: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    legendData: ['0-20%', '21-40%', '41-60%', '61-80%', '81-100%'],
    seriesName: 'PM2.5平均浓度'
  }
}

export default {
  name: 'economicImpact',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData.Engel
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