<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2020/4/11',
          title: '续费成功',
          content: '充值会员时间：90天 费用：￥35 状态：成功 2020/4/11 20:46'
        },
        {
          timestamp: '2020/4/9',
          title: '续费成功',
          content: '充值会员时间：90天 费用：￥35 状态：成功 2020/4/9 11:24'
        },
        {
          timestamp: '2020/2/13',
          title: '续费成功',
          content: '充值会员时间：90天 费用：￥35 状态：成功 2020/2/13 13:02'
        },
        {
          timestamp: '2020/1/8',
          title: '充值成功',
          content: '充值会员时间：90天 费用：￥35 状态：成功 2020/1/8 7:56'
        }
      ]
    }
  }
}
</script>
