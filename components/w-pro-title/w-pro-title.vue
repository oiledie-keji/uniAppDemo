<template>
	<view class="textContanier">
		<text class="textLeft">
			{{title}}
			<!-- <text class="textFrmae"></text> -->
		</text>
		<view class="textRight">
			更多
			<image src="/static/images/common/arrow-right.png" mode="" class="arrowRight"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '请填写标题'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.textContanier {
		position: relative;
	}
	.textLeft {
		font-size: 36rpx;
		font-weight: bold;
		position: relative;
		z-index: 1;
		color: #262626;
	}

	.textFrmae {
		display: inline-block;
		width: 100%;
		height: 12rpx;
		background-color: #007AFF;
		position: absolute;
		left: 0;
		bottom: 2rpx;
		z-index: -1;
	}

	.textRight {
		font-size: 24rpx;
		color: #b6b6b6;
		float: right;
		position: absolute;
		top: 50%;
		right: 36rpx;
		transform: translateY(-50%);
	}
	.arrowRight {
		width: 16rpx;
		height: 24rpx;
		position: absolute;
		top: 50%;
		right: 12rpx;
		transform: translateY(-50%);
	}
</style>
