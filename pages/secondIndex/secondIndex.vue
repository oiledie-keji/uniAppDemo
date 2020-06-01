<template>
	<view class="gonglue">
		<!-- <text>{{name}} 详情页</text> -->
		<image src="http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/攻略页面.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(111, options)
			this.name = options.name;
		}
	}
</script>

<style>
	.gonglue {
		height: 1968rpx;
		overflow: hidden;
		position: relative;
	}

	.gonglue image {
		position: absolute;
		top: -384rpx;
		width: 750rpx;
		height: 2352rpx;
	}
</style>
