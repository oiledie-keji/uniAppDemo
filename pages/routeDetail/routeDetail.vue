<template>
	<view class="content">
		<!-- <nav-bar type="transparentFixed" fontColor="#FFF" bgColor="#FFFFFF"></nav-bar> -->
		<nav-bar ref="navBar" :scrollTop="scrollTop" transparentFixedFontColor="#FFF" type="transparentFixed">
		    <view class="transparent_fixed_preview" slot="transparentFixedRight"></view>
		    <view class="preview" slot="right"></view>
		</nav-bar>
		<view class="detalImg">
			<image :src="srcUrl" mode=""></image>
		</view>
		<view class="scenicDetail">
			<view class="commonStyle">
				<wTitle :title="title" :textMore="false" />
				<view class="img0Contanier">
					<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/切片.png" mode=""></image>
				</view>
				
				<!-- 行程概览 -->
				<view class="img2Contanier">
					<block v-if="switchshow === 4">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/行程概览.png" style="height: 766rpx;" mode=""></image>
					</block>
					<block v-if="switchshow === 3">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/3日游.png" style="height: 590rpx;" mode=""></image>
					</block>
					<block v-if="switchshow === 2">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/2日游.png" style="height: 428rpx;" mode=""></image>
					</block>
				</view>
				
				<wTitle :title="'每日行程'" :textMore="false" />
				<view class="img3Contanier">
					<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/第一天.png" mode=""></image>
				</view>
				<view  class="img4Contanier">
					<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/第二天.png" mode=""></image>
				</view>
				<block v-if="switchshow >= 3">
					<view  class="img5Contanier">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/第三天.png" mode=""></image>
					</view>
				</block>
				<block v-if="switchshow === 4">
					<view  class="img6Contanier">
						<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/第四天.png" mode=""></image>
					</view>
				</block>
			</view>
			
			
			<!-- 行程 -->
			
			<view class="commonStyle">
				
				
				
			</view>
		</view>

	</view>
</template>

<script>
	import navBar from "@/components/zhouWei-navBar/index"
	import wTitle from '@/components/w-title/w-title.vue'
	import wRoutesCard from '@/components/w-routes-card/w-routes-card.vue'
	export default {
		components:{
			navBar,
			wTitle,
			wRoutesCard
		},
		data() {
			return {
				srcUrl: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/detail.png',
				scrollTop: 0,
				switchshow: 4,
				title: '绵山4日游线路',
				img: [{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/detail.png'
				},{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/22.png'
				},{
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/33.png'
				}]
			}
		},
		onLoad(options) {
			this.randomUrl()
			console.log(111, options)
			this.title = options.title;
			if (options.title == '绵山4日游线路') {
				this.switchshow = 4
			} else if (options.title == '绵山3日游线路') {
				this.switchshow = 3
			} else if (options.title == '绵山2日游线路') {
				this.switchshow = 2
			}
		},
		methods: {
			randomUrl() {
				this.srcUrl = this.img[Math.floor((Math.random()*this.img.length))].url
				// console.log(111, this.img[Math.floor((Math.random()*this.img.length))])
			}
			
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.scenicDetail {
		position: absolute;
		top: 710rpx;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		width: 750rpx;
		/* height:1981px; */
		background: rgba(255,255,255,1);
	}

	.commonStyle {
		margin: 0 32rpx;
		margin-top: 48rpx;
	}

	.detalImg image {
		width: 750rpx;
		height: 750rpx;
	}
	
	.img0Contanier image {
		width: 579rpx;
		height: 36rpx;
	}
	
	.imgContanier {
		height: 518rpx;
		width: 686rpx;
		margin-top: 32rpx;
		/* background-color: #FFFFFF; */
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow:0px 4rpx 16rpx 0px rgba(0,0,0,0.1);
	}
	.imgContanier image {
		/* margin: 12rpx; */
		width: 100%;
		height: 100%;
	}
	
	.img2Contanier {
		margin-top: 50rpx;
	}

	.img2Contanier image {
		width: 100%;
		/* width: 686rpx; */
		/* height: 766rpx; */
	}
	
	.img3Contanier {
		
	}
	
	.img3Contanier image,
	.img4Contanier image,
	.img5Contanier image,
	.img6Contanier image {
		box-shadow:0px 4px 16px 0px rgba(0,0,0,0.05);
		width: 100%;
		margin-top: 32rpx;
	}
	
	.img3Contanier image {
		height: 842rpx;
	}
	.img4Contanier image {
		height: 2186rpx;
	}
	.img5Contanier image {
		height: 1530rpx;
	}
	.img6Contanier image {
		height: 506rpx;
	}
</style>
