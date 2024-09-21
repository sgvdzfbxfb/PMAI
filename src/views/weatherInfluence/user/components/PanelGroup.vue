<template>
  <el-row :gutter="40" class="panel-group">

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('WindSpeed')">
        <div class="card-panel-icon-wrapper icon-wind">
          <svg-icon icon-class="wind" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            风速
          </div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('Precipitation')">
        <div class="card-panel-icon-wrapper icon-rain">
          <svg-icon icon-class="rain" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            降水量
          </div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('Temperature')">
        <div class="card-panel-icon-wrapper icon-temp">
          <svg-icon icon-class="temp" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            温度
          </div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('AtmosphericPressure')">
        <div class="card-panel-icon-wrapper icon-push">
          <svg-icon icon-class="push" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            大气压
          </div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('RelativeHumidity')">
        <div class="card-panel-icon-wrapper icon-water">
          <svg-icon icon-class="water" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            湿度
          </div>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 70px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-water {
        background: #34bfa3;
      }

      .icon-wind {
        background: #36a3f7;
      }

      .icon-rain {
        background: #40c9c6;
      }

      .icon-temp {
        background: #f4516c
      }
      .icon-push {
        background: #f0440f
      }
    }

    .icon-water {
      color: #34bfa3;
    }

    .icon-wind {
      color: #36a3f7;
    }

    .icon-rain {
      color: #40c9c6;
    }

    .icon-temp {
      color: #f4516c
    }
    .icon-push {
      color: #f0440f
    }


    .card-panel-icon-wrapper {
      float: left;
      margin: 0 0 0 14px;
      padding:12px 0 0 16px;
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
        line-height: 0px;
        color: rgba(0, 0, 0, 0.7);
        font-size: 14px;
        margin-top: 8px;
        margin-right: 10px;
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
