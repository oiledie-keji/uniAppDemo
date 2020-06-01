<template>
	<view class="bb">
		<!-- <image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/酒店 2.png" mode=""></image> -->
		<image src="/static/酒店 2.png" mode=""></image>
		<view class="btn" @click="btnfoo">
			<!-- <image src="" mode=""></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			btnfoo() {
				uni.showToast({
				    title: '预定成功',
					icon: 'success'
				});
			}
		}
	}
</script>

<style>
	.bb {
		position: relative;
	}
	.bb image {
		width: 750rpx;
		height: 3512rpx;
	}
	.btn {
		width: 122rpx;
		height: 1100rpx;
		position: absolute;
		right: 64rpx;
		/* border: 1px solid red; */
		bottom: 1025rpx;
	}
</style>
