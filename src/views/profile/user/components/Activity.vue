<template>
  <div class="user-activity">
    <div class="post">
      <div class=" clearfix">

      <div class="info-container">
        <span class="title">空气质量：</span><span class="grade" style="color: green;">{{ grade }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">您的所在地：{{ local }}，空气质量全国排名为：{{ rank }}/367</span>
      </div>
    </div>
    <el-divider></el-divider>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in carouselImages" :key="item">
            <img :src="item.src+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'

export default {
  data() {
    return {
      local: '杭州',
      grade: '优',
      rank: '16',
      carouselImages: [
					{
						src: require('./img/1.jpg')
					},
					{
						src: require('./img/2.jpg')
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
      avatarPrefix,
      carouselPrefix
    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
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
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

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

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
