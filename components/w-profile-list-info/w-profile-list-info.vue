<template>
	<view class="listInfo">
		<block v-for="(item, index) in listInfo" :key="index">
			<view class="listInfo-item">
				<image :src="item.url"></image>
				<text>{{item.title}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			listInfo: {
				type: Array
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.listInfo {
		border-top: 36rpx solid #f8f8f8;
		background-color: #fff;
	}

	.listInfo-item {
		border-bottom: 1px solid #f8f8f8;
		margin-left: 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
	}

	.listInfo-item:last-child {
		border-bottom: none;
	}

	.listInfo-item image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.listInfo-item text {
		margin-left: 16rpx;
		vertical-align: middle;
	}
</style>
