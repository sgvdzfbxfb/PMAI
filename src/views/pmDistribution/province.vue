<template>
  <div id="province-con">
    <div id="province">
      <div id="chinaMap" style="height:800px;width:1000px;" ref="myEchart"></div>
      <div id="myChart" style="width: 100%;height:400px;"></div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
require('echarts/map/js/china') // 引入中国地图数据
require('echarts/map/js/world') // 引入世界地图数据
import './js/map/province/beijing.js' // 引入北京地图数据
import './js/map/province/fujian.js' // 引入福建地图数据
import './js/map/province/anhui.js' // 引入安徽地图数据
import './js/map/province/xinjiang.js' // 引入新疆地图数据
import './js/map/province/xizang.js' // 引入西藏地图数据
import './js/map/province/aomen.js'
import './js/map/province/chongqing.js'
import './js/map/province/gansu.js'
import './js/map/province/guangdong.js'
import './js/map/province/guangxi.js'
import './js/map/province/guizhou.js'
import './js/map/province/hainan.js'
import './js/map/province/hebei.js'
import './js/map/province/heilongjiang.js'
import './js/map/province/henan.js'
import './js/map/province/hubei.js'
import './js/map/province/hunan.js'
import './js/map/province/jiangsu.js'
import './js/map/province/jiangxi.js'
import './js/map/province/jilin.js'
import './js/map/province/liaoning.js'
import './js/map/province/neimenggu.js'
import './js/map/province/ningxia.js'
import './js/map/province/qinghai.js'
import './js/map/province/shandong.js'
import './js/map/province/shanxi.js'
import './js/map/province/shanghai.js'
import './js/map/province/sichuan.js'
import './js/map/province/taiwan.js'
import './js/map/province/tianjin.js'
import './js/map/province/xianggang.js'
import './js/map/province/yunnan.js'
import './js/map/province/zhejiang.js'
import { setTextStyle } from 'echarts/lib/util/graphic';

export default {
  name: 'province',
    mounted() {
        this.chinamap();
  },
  methods: {
    chinamap() {
      var myChart = echarts.init(document.getElementById("chinaMap"));
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      var option = {
        tooltip: {
          trigger: 'item'
        },
        //左侧小导航图标
        visualMap: {
          show : true,
          x: 'left',
          y: 'bottom',
          splitList: [
            {start: 700, end: 800},
            {start: 600, end: 700},
            {start: 500, end: 600},
            {start: 400, end: 500},
            {start: 300, end: 400},
            {start: 200, end: 300},
          ],
          color: ['#cc3304', '#5ca4e4', '#f97a06', '#80C21D', '#8C3C99', '#1962be']
        },
        //配置属性
        series: [{
          name: 'PM2.5浓度',
          type: 'map',
          
          map: 'china', 
          roam: false,
          
          label: {
            normal: {
              show: false ,
            },
            emphasis: {
              show: false
            }
          },
          data:[
            {name: '北京',value:randomData()}, {name: '天津',value: randomData()},
            {name: '上海',value: randomData()}, {name: '重庆',value: randomData()},
            {name: '河北',value: randomData()}, {name: '河南',value: randomData()},
            {name: '云南',value: randomData()}, {name: '辽宁',value: randomData()},
            {name: '黑龙江',value: randomData()}, {name: '湖南',value: randomData()},
            {name: '安徽',value: randomData()}, {name: '山东',value: randomData()},
            {name: '新疆',value: randomData()}, {name: '江苏',value: randomData()},
            {name: '浙江',value: randomData()}, {name: '江西',value: randomData()},
            {name: '湖北',value: randomData()}, {name: '广西',value: randomData()},
            {name: '甘肃',value: randomData()}, {name: '山西',value: randomData()},
            {name: '内蒙古',value: randomData()}, {name: '陕西',value: randomData()},
            {name: '吉林',value: randomData()}, {name: '福建',value: randomData()},
            {name: '贵州',value: randomData()}, {name: '广东',value: randomData()},
            {name: '青海',value: randomData()}, {name: '西藏',value: randomData()},
            {name: '四川',value: randomData()}, {name: '宁夏',value: randomData()},
            {name: '海南',value: randomData()}, {name: '台湾',value: randomData()},
            {name: '香港',value: randomData()}, {name: '澳门',value: randomData()},
            {name: '哈密市',value: randomData()-800}, {name: '塔城地区',value: randomData()-800},
            {name: '莱芜市',value: randomData()}, {name: '昆玉市',value: randomData()},
            {name: '东城区',value:randomData()}, {name: '西城区',value:randomData()}, {name: '朝阳区',value:randomData()}, {name: '丰台区',value:randomData()}, {name: '石景山区',value:randomData()}, {name: '海淀区',value:randomData()}, {name: '门头沟区',value:randomData()}, {name: '房山区',value:randomData()}, {name: '通州区',value:randomData()}, {name: '顺义区',value:randomData()}, {name: '昌平区',value:randomData()}, {name: '大兴区',value:randomData()}, {name: '怀柔区',value:randomData()}, {name: '平谷区',value:randomData()}, {name: '密云区',value:randomData()}, {name: '延庆区',value:randomData()},
            {name: '和平区',value:randomData()}, {name: '河东区',value:randomData()}, {name: '河西区',value:randomData()}, {name: '南开区',value:randomData()}, {name: '河北区',value:randomData()}, {name: '红桥区',value:randomData()}, {name: '东丽区',value:randomData()}, {name: '西青区',value:randomData()}, {name: '津南区',value:randomData()}, {name: '北辰区',value:randomData()}, {name: '武清区',value:randomData()}, {name: '宝坻区',value:randomData()}, {name: '滨海新区',value:randomData()}, {name: '宁河区',value:randomData()}, {name: '静海区',value:randomData()}, {name: '蓟州区',value:randomData()},
            {name: '石家庄市',value:randomData()}, {name: '唐山市',value:randomData()}, {name: '秦皇岛市',value:randomData()}, {name: '邯郸市',value:randomData()}, {name: '邢台市',value:randomData()}, {name: '保定市',value:randomData()}, {name: '张家口市',value:randomData()}, {name: '承德市',value:randomData()}, {name: '沧州市',value:randomData()}, {name: '廊坊市',value:randomData()}, {name: '衡水市',value:randomData()},
            {name: '太原市',value:randomData()}, {name: '大同市',value:randomData()}, {name: '阳泉市',value:randomData()}, {name: '长治市',value:randomData()}, {name: '晋城市',value:randomData()}, {name: '朔州市',value:randomData()}, {name: '晋中市',value:randomData()}, {name: '运城市',value:randomData()}, {name: '忻州市',value:randomData()}, {name: '临汾市',value:randomData()}, {name: '吕梁市',value:randomData()},
            {name: '呼和浩特市',value:randomData()}, {name: '包头市',value:randomData()}, {name: '乌海市',value:randomData()}, {name: '赤峰市',value:randomData()}, {name: '通辽市',value:randomData()}, {name: '鄂尔多斯市',value:randomData()}, {name: '呼伦贝尔市',value:randomData()}, {name: '巴彦淖尔市',value:randomData()}, {name: '乌兰察布市',value:randomData()}, {name: '兴安盟',value:randomData()}, {name: '锡林郭勒盟',value:randomData()}, {name: '阿拉善盟',value:randomData()},
            {name: '沈阳市',value:randomData()}, {name: '大连市',value:randomData()}, {name: '鞍山市',value:randomData()}, {name: '抚顺市',value:randomData()}, {name: '本溪市',value:randomData()}, {name: '丹东市',value:randomData()}, {name: '锦州市',value:randomData()}, {name: '营口市',value:randomData()}, {name: '阜新市',value:randomData()}, {name: '辽阳市',value:randomData()}, {name: '盘锦市',value:randomData()}, {name: '铁岭市',value:randomData()}, {name: '朝阳市',value:randomData()}, {name: '葫芦岛市',value:randomData()},
            {name: '长春市',value:randomData()}, {name: '吉林市',value:randomData()}, {name: '四平市',value:randomData()}, {name: '辽源市',value:randomData()}, {name: '通化市',value:randomData()}, {name: '白山市',value:randomData()}, {name: '松原市',value:randomData()}, {name: '白城市',value:randomData()}, {name: '延边朝鲜族自治州',value:randomData()},
            {name: '哈尔滨市',value:randomData()}, {name: '齐齐哈尔市',value:randomData()}, {name: '鸡西市',value:randomData()}, {name: '鹤岗市',value:randomData()}, {name: '双鸭山市',value:randomData()}, {name: '大庆市',value:randomData()}, {name: '伊春市',value:randomData()}, {name: '佳木斯市',value:randomData()}, {name: '七台河市',value:randomData()}, {name: '牡丹江市',value:randomData()}, {name: '黑河市',value:randomData()}, {name: '绥化市',value:randomData()}, {name: '大兴安岭地区',value:randomData()},
            {name: '黄浦区',value:randomData()}, {name: '徐汇区',value:randomData()}, {name: '长宁区',value:randomData()}, {name: '静安区',value:randomData()}, {name: '普陀区',value:randomData()}, {name: '虹口区',value:randomData()}, {name: '杨浦区',value:randomData()}, {name: '闵行区',value:randomData()}, {name: '宝山区',value:randomData()}, {name: '嘉定区',value:randomData()}, {name: '浦东新区',value:randomData()}, {name: '金山区',value:randomData()}, {name: '松江区',value:randomData()}, {name: '青浦区',value:randomData()}, {name: '奉贤区',value:randomData()}, {name: '崇明区',value:randomData()},
            {name: '南京市',value:randomData()}, {name: '无锡市',value:randomData()}, {name: '徐州市',value:randomData()}, {name: '常州市',value:randomData()}, {name: '苏州市',value:randomData()}, {name: '南通市',value:randomData()}, {name: '连云港市',value:randomData()}, {name: '淮安市',value:randomData()}, {name: '盐城市',value:randomData()}, {name: '扬州市',value:randomData()}, {name: '镇江市',value:randomData()}, {name: '泰州市',value:randomData()}, {name: '宿迁市',value:randomData()},
            {name: '杭州市',value:randomData()}, {name: '宁波市',value:randomData()}, {name: '温州市',value:randomData()}, {name: '嘉兴市',value:randomData()}, {name: '湖州市',value:randomData()}, {name: '绍兴市',value:randomData()}, {name: '金华市',value:randomData()}, {name: '衢州市',value:randomData()}, {name: '舟山市',value:randomData()}, {name: '台州市',value:randomData()}, {name: '丽水市',value:randomData()},
            {name: '合肥市',value:randomData()}, {name: '芜湖市',value:randomData()}, {name: '蚌埠市',value:randomData()}, {name: '淮南市',value:randomData()}, {name: '马鞍山市',value:randomData()}, {name: '淮北市',value:randomData()}, {name: '铜陵市',value:randomData()}, {name: '安庆市',value:randomData()}, {name: '黄山市',value:randomData()}, {name: '滁州市',value:randomData()}, {name: '阜阳市',value:randomData()}, {name: '宿州市',value:randomData()}, {name: '六安市',value:randomData()}, {name: '亳州市',value:randomData()}, {name: '池州市',value:randomData()}, {name: '宣城市',value:randomData()},
            {name: '福州市',value:randomData()}, {name: '厦门市',value:randomData()}, {name: '莆田市',value:randomData()}, {name: '三明市',value:randomData()}, {name: '泉州市',value:randomData()}, {name: '漳州市',value:randomData()}, {name: '南平市',value:randomData()}, {name: '龙岩市',value:randomData()}, {name: '宁德市',value:randomData()},
            {name: '南昌市',value:randomData()}, {name: '景德镇市',value:randomData()}, {name: '萍乡市',value:randomData()}, {name: '九江市',value:randomData()}, {name: '新余市',value:randomData()}, {name: '鹰潭市',value:randomData()}, {name: '赣州市',value:randomData()}, {name: '吉安市',value:randomData()}, {name: '宜春市',value:randomData()}, {name: '抚州市',value:randomData()}, {name: '上饶市',value:randomData()},
            {name: '济南市',value:randomData()}, {name: '青岛市',value:randomData()}, {name: '淄博市',value:randomData()}, {name: '枣庄市',value:randomData()}, {name: '东营市',value:randomData()}, {name: '烟台市',value:randomData()}, {name: '潍坊市',value:randomData()}, {name: '济宁市',value:randomData()}, {name: '泰安市',value:randomData()}, {name: '威海市',value:randomData()}, {name: '日照市',value:randomData()}, {name: '临沂市',value:randomData()}, {name: '德州市',value:randomData()}, {name: '聊城市',value:randomData()}, {name: '滨州市',value:randomData()}, {name: '菏泽市',value:randomData()},
            {name: '郑州市',value:randomData()}, {name: '开封市',value:randomData()}, {name: '洛阳市',value:randomData()}, {name: '平顶山市',value:randomData()}, {name: '安阳市',value:randomData()}, {name: '鹤壁市',value:randomData()}, {name: '新乡市',value:randomData()}, {name: '焦作市',value:randomData()}, {name: '濮阳市',value:randomData()}, {name: '许昌市',value:randomData()}, {name: '漯河市',value:randomData()}, {name: '三门峡市',value:randomData()}, {name: '南阳市',value:randomData()}, {name: '商丘市',value:randomData()}, {name: '信阳市',value:randomData()}, {name: '周口市',value:randomData()}, {name: '驻马店市',value:randomData()}, {name: '济源市',value:randomData()},
            {name: '武汉市',value:randomData()}, {name: '黄石市',value:randomData()}, {name: '十堰市',value:randomData()}, {name: '宜昌市',value:randomData()}, {name: '襄阳市',value:randomData()}, {name: '鄂州市',value:randomData()}, {name: '荆门市',value:randomData()}, {name: '孝感市',value:randomData()}, {name: '荆州市',value:randomData()}, {name: '黄冈市',value:randomData()}, {name: '咸宁市',value:randomData()}, {name: '随州市',value:randomData()}, {name: '恩施土家族苗族自治州',value:randomData()}, {name: '仙桃市',value:randomData()}, {name: '潜江市',value:randomData()}, {name: '天门市',value:randomData()}, {name: '神农架林区',value:randomData()},
            {name: '长沙市',value:randomData()}, {name: '株洲市',value:randomData()}, {name: '湘潭市',value:randomData()}, {name: '衡阳市',value:randomData()}, {name: '邵阳市',value:randomData()}, {name: '岳阳市',value:randomData()}, {name: '常德市',value:randomData()}, {name: '张家界市',value:randomData()}, {name: '益阳市',value:randomData()}, {name: '郴州市',value:randomData()}, {name: '永州市',value:randomData()}, {name: '怀化市',value:randomData()}, {name: '娄底市',value:randomData()}, {name: '湘西土家族苗族自治州',value:randomData()},
            {name: '广州市',value:randomData()}, {name: '韶关市',value:randomData()}, {name: '深圳市',value:randomData()}, {name: '珠海市',value:randomData()}, {name: '汕头市',value:randomData()}, {name: '佛山市',value:randomData()}, {name: '江门市',value:randomData()}, {name: '湛江市',value:randomData()}, {name: '茂名市',value:randomData()}, {name: '肇庆市',value:randomData()}, {name: '惠州市',value:randomData()}, {name: '梅州市',value:randomData()}, {name: '汕尾市',value:randomData()}, {name: '河源市',value:randomData()}, {name: '阳江市',value:randomData()}, {name: '清远市',value:randomData()}, {name: '东莞市',value:randomData()}, {name: '中山市',value:randomData()}, {name: '潮州市',value:randomData()}, {name: '揭阳市',value:randomData()}, {name: '云浮市',value:randomData()},
            {name: '南宁市',value:randomData()}, {name: '柳州市',value:randomData()}, {name: '桂林市',value:randomData()}, {name: '梧州市',value:randomData()}, {name: '北海市',value:randomData()}, {name: '防城港市',value:randomData()}, {name: '钦州市',value:randomData()}, {name: '贵港市',value:randomData()}, {name: '玉林市',value:randomData()}, {name: '百色市',value:randomData()}, {name: '贺州市',value:randomData()}, {name: '河池市',value:randomData()}, {name: '来宾市',value:randomData()}, {name: '崇左市',value:randomData()},
            {name: '海口市',value:randomData()}, {name: '三亚市',value:randomData()}, {name: '三沙市',value:randomData()}, {name: '儋州市',value:randomData()}, {name: '五指山市',value:randomData()}, {name: '琼海市',value:randomData()}, {name: '文昌市',value:randomData()}, {name: '万宁市',value:randomData()}, {name: '东方市',value:randomData()}, {name: '定安县',value:randomData()}, {name: '屯昌县',value:randomData()}, {name: '澄迈县',value:randomData()}, {name: '临高县',value:randomData()}, {name: '白沙黎族自治县',value:randomData()}, {name: '昌江黎族自治县',value:randomData()}, {name: '乐东黎族自治县',value:randomData()}, {name: '陵水黎族自治县',value:randomData()}, {name: '保亭黎族苗族自治县',value:randomData()}, {name: '琼中黎族苗族自治县',value:randomData()},
            {name: '万州区',value:randomData()}, {name: '涪陵区',value:randomData()}, {name: '渝中区',value:randomData()}, {name: '大渡口区',value:randomData()}, {name: '江北区',value:randomData()}, {name: '沙坪坝区',value:randomData()}, {name: '九龙坡区',value:randomData()}, {name: '南岸区',value:randomData()}, {name: '北碚区',value:randomData()}, {name: '綦江区',value:randomData()}, {name: '大足区',value:randomData()}, {name: '渝北区',value:randomData()}, {name: '巴南区',value:randomData()}, {name: '黔江区',value:randomData()}, {name: '长寿区',value:randomData()}, {name: '江津区',value:randomData()}, {name: '合川区',value:randomData()}, {name: '永川区',value:randomData()}, {name: '南川区',value:randomData()}, {name: '璧山区',value:randomData()}, {name: '铜梁区',value:randomData()}, {name: '潼南区',value:randomData()}, {name: '荣昌区',value:randomData()}, {name: '开州区',value:randomData()}, {name: '梁平区',value:randomData()}, {name: '武隆区',value:randomData()}, {name: '城口县',value:randomData()}, {name: '丰都县',value:randomData()}, {name: '垫江县',value:randomData()}, {name: '忠县',value:randomData()}, {name: '云阳县',value:randomData()}, {name: '奉节县',value:randomData()}, {name: '巫山县',value:randomData()}, {name: '巫溪县',value:randomData()}, {name: '石柱土家族自治县',value:randomData()}, {name: '秀山土家族苗族自治县',value:randomData()}, {name: '酉阳土家族苗族自治县',value:randomData()}, {name: '彭水苗族土家族自治县',value:randomData()},
            {name: '成都市',value:randomData()}, {name: '自贡市',value:randomData()}, {name: '攀枝花市',value:randomData()}, {name: '泸州市',value:randomData()}, {name: '德阳市',value:randomData()}, {name: '绵阳市',value:randomData()}, {name: '广元市',value:randomData()}, {name: '遂宁市',value:randomData()}, {name: '内江市',value:randomData()}, {name: '乐山市',value:randomData()}, {name: '南充市',value:randomData()}, {name: '眉山市',value:randomData()}, {name: '宜宾市',value:randomData()}, {name: '广安市',value:randomData()}, {name: '达州市',value:randomData()}, {name: '雅安市',value:randomData()}, {name: '巴中市',value:randomData()}, {name: '资阳市',value:randomData()}, {name: '阿坝藏族羌族自治州',value:randomData()}, {name: '甘孜藏族自治州',value:randomData()}, {name: '凉山彝族自治州',value:randomData()},
            {name: '贵阳市',value:randomData()}, {name: '六盘水市',value:randomData()}, {name: '遵义市',value:randomData()}, {name: '安顺市',value:randomData()}, {name: '毕节市',value:randomData()}, {name: '铜仁市',value:randomData()}, {name: '黔西南布依族苗族自治州',value:randomData()}, {name: '黔东南苗族侗族自治州',value:randomData()}, {name: '黔南布依族苗族自治州',value:randomData()},
            {name: '昆明市',value:randomData()}, {name: '曲靖市',value:randomData()}, {name: '玉溪市',value:randomData()}, {name: '保山市',value:randomData()}, {name: '昭通市',value:randomData()}, {name: '丽江市',value:randomData()}, {name: '普洱市',value:randomData()}, {name: '临沧市',value:randomData()}, {name: '楚雄彝族自治州',value:randomData()}, {name: '红河哈尼族彝族自治州',value:randomData()}, {name: '文山壮族苗族自治州',value:randomData()}, {name: '西双版纳傣族自治州',value:randomData()}, {name: '大理白族自治州',value:randomData()}, {name: '德宏傣族景颇族自治州',value:randomData()}, {name: '怒江傈僳族自治州',value:randomData()}, {name: '迪庆藏族自治州',value:randomData()},
            {name: '拉萨市',value:randomData()}, {name: '日喀则市',value:randomData()}, {name: '昌都市',value:randomData()}, {name: '林芝市',value:randomData()}, {name: '山南市',value:randomData()}, {name: '那曲市',value:randomData()}, {name: '阿里地区',value:randomData()},
            {name: '西安市',value:randomData()}, {name: '铜川市',value:randomData()}, {name: '宝鸡市',value:randomData()}, {name: '咸阳市',value:randomData()}, {name: '渭南市',value:randomData()}, {name: '延安市',value:randomData()}, {name: '汉中市',value:randomData()}, {name: '榆林市',value:randomData()}, {name: '安康市',value:randomData()}, {name: '商洛市',value:randomData()},
            {name: '兰州市',value:randomData()}, {name: '嘉峪关市',value:randomData()}, {name: '金昌市',value:randomData()}, {name: '白银市',value:randomData()}, {name: '天水市',value:randomData()}, {name: '武威市',value:randomData()}, {name: '张掖市',value:randomData()}, {name: '平凉市',value:randomData()}, {name: '酒泉市',value:randomData()}, {name: '庆阳市',value:randomData()}, {name: '定西市',value:randomData()}, {name: '陇南市',value:randomData()}, {name: '临夏回族自治州',value:randomData()}, {name: '甘南藏族自治州',value:randomData()},
            {name: '西宁市',value:randomData()}, {name: '海东市',value:randomData()}, {name: '海北藏族自治州',value:randomData()}, {name: '黄南藏族自治州',value:randomData()}, {name: '海南藏族自治州',value:randomData()}, {name: '果洛藏族自治州',value:randomData()}, {name: '玉树藏族自治州',value:randomData()}, {name: '海西蒙古族藏族自治州',value:randomData()},
            {name: '银川市',value:randomData()}, {name: '石嘴山市',value:randomData()}, {name: '吴忠市',value:randomData()}, {name: '固原市',value:randomData()}, {name: '中卫市',value:randomData()},
            {name: '乌鲁木齐市',value:randomData()}, {name: '克拉玛依市',value:randomData()}, {name: '吐鲁番市',value:randomData()}, {name: '哈密市',value:randomData()}, {name: '昌吉回族自治州',value:randomData()}, {name: '博尔塔拉蒙古自治州',value:randomData()}, {name: '巴音郭楞蒙古自治州',value:randomData()}, {name: '阿克苏地区',value:randomData()}, {name: '克孜勒苏柯尔克孜自治州',value:randomData()}, {name: '喀什地区',value:randomData()}, {name: '和田地区',value:randomData()}, {name: '伊犁哈萨克自治州',value:randomData()}, {name: '塔城地区',value:randomData()}, {name: '阿勒泰地区',value:randomData()}, {name: '石河子市',value:randomData()}, {name: '阿拉尔市',value:randomData()}, {name: '图木舒克市',value:randomData()}, {name: '五家渠市',value:randomData()}, {name: '铁门关市',value:randomData() }
          ]
        }]
      };

      var count = -1;
      setInterval(function() {        
        var curr = count % 34; //数字为cityArr.length
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: curr
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0, // 因为只有一组数据，所以此处应为0
            dataIndex: curr
        });
        count++;
      /*
      if (index > cityArr.length - 1) {
        count = -1
      }            
      */           
      }, 500);

      /**
       *  使用刚指定的配置项和数据显示图表。
       *  */
      myChart.setOption(option);
      //获取随机数
      function randomData() {
          return Math.round(Math.random()*(600)+200)
      }
    
      myChart.on('mouseover', function (params) {
        var dataIndex = params.dataIndex;
        console.log(dataIndex);
      });
      myChart.on('click', function (chinaParam) {
        if(
          chinaParam.name=="辽宁"||
          chinaParam.name=="内蒙古"||
          chinaParam.name=="北京"||
          chinaParam.name=="福建"||
          chinaParam.name=="安徽"||
          chinaParam.name=="新疆"||
          chinaParam.name=="西藏"||
          chinaParam.name=="河北"||
          chinaParam.name=="山西"||
          chinaParam.name=="吉林"||
          chinaParam.name=="黑龙江"||
          chinaParam.name=="江苏"||
          chinaParam.name=="浙江"||
          chinaParam.name=="江西"||
          chinaParam.name=="山东"||
          chinaParam.name=="河南"||
          chinaParam.name=="湖北"||
          chinaParam.name=="湖南"||
          chinaParam.name=="广东"||
          chinaParam.name=="海南"||
          chinaParam.name=="四川"||
          chinaParam.name=="贵州"||
          chinaParam.name=="云南"
        ){
          var option = myChart.getOption();
          option.series[0].map = chinaParam.name;
          option.series[0].mapType  = chinaParam.name;
          myChart.clear();
          console.log(chinaParam.name);
          myChart.setOption(option,true); 
        } else {
          alert(chinaParam.name+"区域还未开通！");
        }                     
      }); 
    },
    
  }
}
</script>

<style lang="scss" scoped>

#province-con {
  background-color: rgb(233, 238, 255);;
  #province {
    position: relative;
    left:10%;
    top: 5%;
  }
}
</style>