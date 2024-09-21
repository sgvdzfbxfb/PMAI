<template>
  <div class="dashboard-editor-container">
    <table>
      <tr>
        <td style="width: 75%;height: 250px">
          <div class=" clearfix">
            <pan-thumb :image="avatar" style="float: left">
              <svg-icon icon-class="dvip" />
            </pan-thumb>
            <div class="info-container">
              <span class="title">空气质量：</span><span class="grade" style="color: green;">{{ grade }}</span>
              <span style="font-size:20px;padding-top:20px;display:inline-block;">您的所在地：{{ local }}，空气质量全国排名为：{{ rank }}/367</span>
            </div>
          </div>
        </td>
        <td style="width: 300px;" rowspan="2">
          <el-row :gutter="8">
            <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 24}" :xl="{span: 24}" style="margin-bottom:30px;">
              <box-card />
            </el-col>
          </el-row>
        </td>
      </tr>
      <tr>
        <td>
          <div class="user-images">
            <el-carousel :interval="6000" type="card" height="220px">
              <el-carousel-item v-for="item in carouselImages" :key="item">
                <img :src="item.src+carouselPrefix" class="image">
              </el-carousel-item>
            </el-carousel>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
const carouselPrefix = '?imageView2/2/h/440'

import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import BoxCard from './components/BoxCard'

export default {
  name: 'DashboardAdmin',
  components: {
    PanThumb,
    BoxCard
  },
  data() {
    return {
      local: '杭州',
      grade: '优',
      rank: '16',
      carouselImages: [
					{
						src: require('./img/1.jpg'),
					},
					{
						src: require('./img/2.jpg'),
					},
					{
						src: require('./img/3.jpg')
					},
					{
						src: require('./img/4.jpg')
					},
					{
						src: require('./img/5.jpg')
					}
      ],
      carouselPrefix
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  background-color: #ffffff;
  min-height: 100vh;
  padding: 50px 60px 0px;
  position: relative;
  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }
  .back {
    height: 100%;
    width: 100%;
  }
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .title {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
    .grade {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      margin-left: 240px;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
