<template>
  <div class="app-container timeDistribution-container">
    <div class="biaoge">
        <mix-chart height="100%" width="100%" />
    </div>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
          <span>2019年每双月PM2.5浓度数值面板</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
          <span>2019年每季度PM2.5浓度数值玫瑰图</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
          <span>2019年每季度按周统计PM2.5浓度</span>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import MixChart from './components/MixChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'timeDistribution',
  components: { 
    MixChart,
    RaddarChart,
    PieChart,
    BarChart
  },
}
</script>


<style lang="scss" scoped>
.timeDistribution-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  height: 100%;
  .biaoge {
    height: 600px;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    text-align: center;
    font-weight: 1000;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>