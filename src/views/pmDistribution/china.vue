<template>
    <div class="echarts">
        <div :style="{height:'800px',width:'100%'}" ref="myEchart"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
        name: "echarts",
        props: ["userJson"],
        data() {
            return {
                chart: null,
                myChart:'',
                option:{
                    title: {
                        text: '2020年各地区PM2.5年平均浓度值',
                        top: '3%',
                        left: '35%',
                        textStyle: {
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#fff'
                        }
                    },
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
            };
        },
        mounted() {
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
        methods: {
            chinaConfigure() {
                var _this = this;
                window.onresize = _this.myChart.resize;
                this.myChart.on('click', function(params){
                    alert(params.name+": "+params.value)
                });
            },
        }
    }
</script>

<style scoped lang="less">
    .echarts{
        width: 100%;
        height: 900px;
        background-color: rgb(23, 28, 46);
        >div{
            width: 90%;
            margin: 0 auto;
        }
    }
</style>