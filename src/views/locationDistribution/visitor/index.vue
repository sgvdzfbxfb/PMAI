<template>
  <div class="app-container locationDistribution-container">
    <div :id="id" class="o-echarts"></div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import echarts from 'echarts';
import JSON from 'echarts/map/json/china.json';
export default {
    name: 'echart-map',
    data() {
        return {
            id: 'echarts_' + new Date().getTime() + Math.floor(Math.random() * 1000),
            echartObj: null,
            radioList: {
                A: '2019 - 2020',
                B: '2018 - 2019',
                C: '2017 - 2018',
                D: '2016 - 2017',
                E: '2015 - 2016'
            },
            radioActive: 'A',
            option: {
                title: {
                    text: 'PM2.5年平均浓度',
                    top: '3%',
                    left: '5%',
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#08162B'
                    }
                },
                tooltip: {
                    padding: 0,
                    backgroundColor: 'transparent',
                    formatter: params => {
                        // params.data
                        return `<table 
                                class="map__tooltip o_font20" 
                                bgcolor="#0D182B"
                                border-radius=10px
                                >
                                    <thead>
                                       <tr>
                                           <th>第一季度</th>
                                           <th>第二季度</th>
                                           <th>第三季度</th>
                                           <th>第四季度</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>${params.data.obj.a}</th>
                                            <th>${params.data.obj.b}</th>
                                            <th>${params.data.obj.c}</th>
                                            <th>${params.data.obj.d}</th>
                                         </tr>
                                    </tbody>
                                </table>`;
                    }
                },
                legend: {
                    orient: 'vertical',
                    top: '9%',
                    left: '5%',
                    icon: 'circle',
                    data: [],
                    selectedMode: 'single',
                    selected: {},
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 30,
                    inactiveColor: '#0B98E3',
                    textStyle: {
                        color: '#ec808d',
                        fontSize: 14,
                        fontWeight: 300,
                        padding: [0, 0, 0, 15]
                    }
                },
                visualMap: {
                    min: 0,
                    max: 500,
                    show: false,
                    splitNumber: 5,
                    inRange: {
                        color: ['#D95B63', '#FFA660', '#43A9EF', '#9F79DC', '#22C7C9'].reverse()
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: '中国',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#000',
                                fontSize: "11px",
                                fontWeight: "400"
                            }
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#8db200',
                            borderColor: '#6367ad',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#feb6aa' // hover效果
                        }
                    },
                    left: '20%',
                    right: '5%',
                    top: '5%',
                    bottom: '5%'
                },
                series: [{
                    name: '年度总项目数据查询',
                    type: 'map',
                    geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                    data: []
                }]
            }
        };
    },
    mounted() {
        this.echartObj = echarts.init(document.getElementById(this.id));
        echarts.registerMap('中国', JSON);
        this.echartObj.setOption(this.getOptions(), true);
        this.echartObj.on('legendselectchanged', params => {
            this.radioActive = Object.keys(this.radioList).filter(item => this.radioList[item] === params.name)[0];
            this.echartObj.clear();
            this.echartObj.setOption(this.getOptions());
        });
        window.addEventListener('resize', () => {
            if (this.echartObj && this.echartObj.resize) {
                this.echartObj.resize();
            }
        });
    },
    methods: {
        getOptions() {
            this.setOptions('legend', {
                data: Object.values(this.radioList),
                selected: (list => {
                    const obj = {};
                    Object.keys(list).map((item, index) => {
                        obj[list[item]] = item === this.radioActive;
                    });
                    return obj;
                })(this.radioList)
            });
            this.setOptions('series', (() => {

                const arr = [];
                Object.values(this.radioList)
                    .map((item, index) => {
                        arr[this.radioList[this.radioActive] === item ? 'unshift' : 'push']({
                            name: item,
                            type: 'map',
                            geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                            data: this.getSeriesData(item)
                        });
                    });
                return arr;
            })());
            return this.option;
        },
        getSeriesData(item) {
            return this.radioList[this.radioActive] === item ? JSON.features.map(item => {
                return {
                    name: item.properties.name,
                    value: Math.ceil(Math.random() * 500),
                    obj: {
                        a: Math.ceil(Math.random() * 500),
                        b: Math.ceil(Math.random() * 500),
                        c: Math.ceil(Math.random() * 500),
                        d: Math.ceil(Math.random() * 500)
                    }
                };
            }) : [];
        },
        setOptions(objKey, objVal) {
            if (this.option[objKey] && typeof this.option[objKey] === 'object' && !Array.isArray(this.option[objKey])) {
                this.option[objKey] = Object.assign(this.option[objKey], objVal);
            } else {
                this.option[objKey] = objVal;
            }
            this.$set(this.option, objKey, this.option[objKey]);
        }
    }
}
</script>

<style lang="less" scoped>
.locationDistribution-container{
  background-color: rgb(255, 255, 255);
}
.o-echarts {
    min-width: 1180px;
    min-height: 800px;
    width: 40%;
    height: 20%;
    
}
// .map__tooltip{
//   background-color: black;
//   border-radius: 4px;
// }
</style>
