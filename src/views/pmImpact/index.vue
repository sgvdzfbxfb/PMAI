<template>
    <el-row :gutter="68">
			<el-carousel :interval="0" arrow="never" height="600px" type="card" class="about">
				<el-carousel-item v-for="item in dataimg" :key="item">
					<div class="grid-content">
						<el-col :span="12">
							<div class="box">
								<img :src="item.src">
							</div>
						</el-col>
					</div>
				</el-carousel-item>
			</el-carousel>
		</el-row>
</template>
<script>
export default {
		name: 'pmImpact',
		data() {
			return {
				
				dataimg: [{
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
					}
				]
			}
		}
	}
</script>
<style>
  .about {
	  background-image: url("./img/bk2.jpg");
	  background-size: 100%;
  }
  .box {
    align-items: center;
  }
  .box img {
    width: 240%;
  }
</style>