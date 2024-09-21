<template>
  <div class="container-fluid" style="margin: 30px">
    <div class="title"><h4>2020年单月空气PM2.5指数统计</h4></div>
    <div class="tips">
      <el-tag class="tag-title">
        点击表头排序，输入查找后点击表头查询
      </el-tag>
        <markdown-editor ref="markdownEditor" v-model="content2"
        :options="{hideModeSwitch:true,previewStyle:'tab'}"
        height="200px"
      />
    </div>
    <div class="tab">
      <table class="table">
          <thead>
              <th class="head" style="height: 40px" v-for="key in keys" scope="col" @click="sort(key)">{{ key }}</th>
          </thead>
          <tbody>
          <tr>
              <td style="height: 40px"  v-for="key in keys"><input type="text" class="form-control" v-model="filters[key]" placeholder="输入查找"></td>
          </tr>
          <tr style="border:1px solid rgb(208, 208, 211); height: 40px" v-for="data in (sortedActivity, filteredList)">
              <td class="Data" style="border:1px solid rgb(208, 208, 211);" v-for="key in keys"> {{ data[key] }}</td>
          </tr>
          </tbody>
      </table>
    </div>
    <div :style="{height:'800px',width:'55%'}" class="chart" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  
  name: 'statisticalRanking',
  props: ["userJson"],
  data() {
    return {
      itemList: [],
      keys: [],
      currentSortColumn: '',
      currentSortBy: 'desc',
      filters: {},
      chart: null,
      myChart:'',
      option:{
          tooltip: {
              show:true,
          }, // 鼠标移到图里面的浮动提示框
          dataRange: {
              show: true,
              min: 10,
              max: 60,
              text:['高浓度','低浓度'],
              textStyle: {
                  color: '#fff'
              },
              realtime: false,
              calculable: false,
              color: [
                  '#cc3304',
                  '#5ca4e4',
                  '#f97a06',
                  '#80C21D',
                  '#8C3C99',
                  '#1962be'
              ]

          },
          geo: { // 这个是重点配置区
              map: 'china', // 表示中国地图
              roam: false,
              label: {
                  normal: {
                      show: true, // 是否显示对应地名
                      textStyle: {
                          color: 'rgba(255,255,255,0.7)'
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis: {
                      areaColor: null,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo', // 对应上方配置
              itemStyle:{
                  emphasis:{label:{show:true}}   //鼠标移入城市名称是否展示
              },
          },
              {
                  name: '查看详情', // 浮动框的标题
                  type: 'map',
                  geoIndex: 0,
                  data: [{
                      value:50,
                      name: '北京',
                  }, {value:10,
                      name: '浙江'
                  }, {
                      value:50,
                      name: '天津',
                  }, {value:10,
                      name: '安徽'
                  }, {value:10,
                      name: '上海'
                  }, {value:10,
                      name: '福建'
                  }, {value:10,
                      name: '江西'
                  }, {value:10,
                      name: '山东'
                  }, {value:1,
                      name: '河南'
                  }, {value:20,
                      name: '湖北'
                  }, {value:20,
                      name: '湖南'
                  }, {value:20,
                      name: '广东'
                  }, {value:20,
                      name: '海南'
                  }, {value:50,
                      name: '山西',
                  }, {value:10,
                      name: '江苏'
                  }, {
                      value:30,
                      name: '辽宁',
                  }, {
                      value:30,
                      name: '吉林',
                  }, {value:40,
                      name: '台湾'
                  }, {
                      value:50,
                      name: '河北',
                  },   {
                      value:30,
                      name: '黑龙江',
                  }, {value:20,
                      name: '香港'
                  }, {value:20,
                      name: '澳门'
                  }, {value:20,
                      name: '广西'
                  },
                      {
                          value:50,
                          name: '内蒙古',
                      },
                      {value:40,
                          name: '宁夏'
                      }, {value:40,
                          name: '新疆'
                      },{value:40,
                          name: '青海'
                      },{value:40,
                          name: '甘肃'
                      },{value:40,
                          name: '陕西'
                      },{value:60,
                          name: '西藏',
                      },{value:60,
                          name: '贵州',
                      }, {value:60,
                          name: '四川',
                      }, {value:60,
                          name: '云南',
                      },{value:60,
                          name: '重庆',
                      },  ]
              }
          ]
      }
    }
  },
  mounted: function () {
      this.init()
      this.myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      this.myChart.setOption(this.option);
      this.chinaConfigure();
  },
  beforeDestroy() {
      if (!this.chart) {
          return;
      }
      this.chart.dispose();
      this.chart = null;
  },
  computed: {
    getFilters() {
        return this.filters
    },
    sortedActivity: function () {
        let res = this.itemList.sort((a, b) => {
            let modifier = 1;
            if (this.currentSortBy === 'desc') modifier = -1;
            if (a[this.currentSortColumn] < b[this.currentSortColumn]) return -1 * modifier;
            if (a[this.currentSortColumn] >= b[this.currentSortColumn]) return 1 * modifier;
        });
        return res
    },
    filteredList() {
        let res = this.itemList.filter((item) => {
            let result = true
            for (let i in this.keys) {
                let key = this.keys[i]
                result = result && String(item[key]).toLowerCase().match(this.filters[key].toLowerCase())
            }
            return result;
        })
        return res
    }
  },
    methods: {
      init: function () {
          this.getItemList()
      },
      chinaConfigure() {
          var _this = this;
          window.onresize = _this.myChart.resize;
          this.myChart.on('click', function(params){
              alert(params.name+": "+params.value)
          });
      },
      getItemList: function () {
          this.itemList = [
            {"省份": "北京", "空气质量等级": '良', "平均值": 43, "最大值": 64}, {"省份": "天津", "空气质量等级": '优', "平均值": 32, "最大值": 77},
            {"省份": "上海", "空气质量等级": '优', "平均值": 37, "最大值": 46}, {"省份": "重庆", "空气质量等级": '优', "平均值": 86, "最大值": 24},
            {"省份": "河北", "空气质量等级": '优', "平均值": 24, "最大值": 74}, {"省份": "河南", "空气质量等级": '良', "平均值": 73, "最大值": 62},
            {"省份": "云南", "空气质量等级": '良', "平均值": 22, "最大值": 35}, {"省份": "辽宁", "空气质量等级": '良', "平均值": 11, "最大值": 73},
            {"省份": "黑龙江", "空气质量等级": '优', "平均值": 58, "最大值": 37}, {"省份": "湖南", "空气质量等级": '优', "平均值": 86, "最大值": 26},
            {"省份": "安徽", "空气质量等级": '优', "平均值": 13, "最大值": 35}, {"省份": "山东", "空气质量等级": '良', "平均值": 66, "最大值": 57},
            {"省份": "新疆", "空气质量等级": '良', "平均值": 56, "最大值": 15}, {"省份": "江苏", "空气质量等级": '优', "平均值": 86, "最大值": 24},
            {"省份": "浙江", "空气质量等级": '优', "平均值": 54, "最大值": 21}, {"省份": "江西", "空气质量等级": '良', "平均值": 25, "最大值": 65},
            {"省份": "湖北", "空气质量等级": '优', "平均值": 56, "最大值": 65}, {"省份": "广西", "空气质量等级": '优', "平均值": 36, "最大值": 53},
            {"省份": "甘肃", "空气质量等级": '良', "平均值": 46, "最大值": 37}, {"省份": "山西", "空气质量等级": '优', "平均值": 51, "最大值": 76},
            {"省份": "内蒙古", "空气质量等级": '优', "平均值": 86, "最大值": 45}, {"省份": "陕西", "空气质量等级": '良', "平均值": 37, "最大值": 32},
            {"省份": "吉林", "空气质量等级": '优', "平均值": 87, "最大值": 23}, {"省份": "福建", "空气质量等级": '优', "平均值": 47, "最大值": 43},
            {"省份": "贵州", "空气质量等级": '优', "平均值": 84, "最大值": 45}, {"省份": "广东", "空气质量等级": '优', "平均值": 71, "最大值": 65},
            {"省份": "青海", "空气质量等级": '良', "平均值": 51, "最大值": 42}, {"省份": "西藏", "空气质量等级": '良', "平均值": 58, "最大值": 85},
            {"省份": "四川", "空气质量等级": '优', "平均值": 85, "最大值": 36}, {"省份": "宁夏", "空气质量等级": '优', "平均值": 62, "最大值": 55},
            {"省份": "海南", "空气质量等级": '良', "平均值": 77, "最大值": 64}, {"省份": "台湾", "空气质量等级": '良', "平均值": 11, "最大值": 47},
            {"省份": "香港", "空气质量等级": '优', "平均值": 52, "最大值": 27}, {"省份": "澳门", "空气质量等级": '良', "平均值": 53, "最大值": 32}
          ]
          this.getKeys()
      },
      getKeys: function() {
          if (this.itemList.length > 0) {
              this.keys = Object.keys(this.itemList[0])
              this.currentSortColumn = this.keys[0]
          }
          this.keys.forEach((key) => this.filters[key] = '')
      },
      sort: function (column) {
          if (column === this.currentSortColumn) {
              this.currentSortBy = this.currentSortBy === 'desc' ? 'asc' : 'desc';
          }
          this.currentSortColumn = column;
      }
  }
}
</script>

<style scoped lang="less">
.echarts{
    width: 100%;
    height: 900px;
    >div{
        width: 90%;
        margin: 0 auto;
    }
}
.tab {
  float: left;
}
.chart {
  float: left;
  background-color: rgb(23, 28, 46);
}
.table {
  border:1px solid rgb(208, 208, 211)
}
.Data {
  text-align: center;
}
.title {
  position: relative;
  margin-left: 35%;
  margin-bottom: 3%;
  font-size: 1.6em;
}
.form-control{
  width: 130px;
  height: 40px;
  border: 2px solid #66afe9;
  outline: 0;

}
.head {
  color: #fff;
  background-color: rgb(0, 119, 255);
}
</style>