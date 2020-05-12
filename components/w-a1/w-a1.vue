<template>
	<view class="textContanier">
		<text class="textLeft">
			{{title}}
			<text class="textFrmae"></text>
		</text>
		<text class="textRight">17~27 ℃</text>
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
	.categoryContainer {
		display: block;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background-color: #fff;
		position: relative;
		top: -30rpx;
	}

	.textContanier {
		padding: 0 30rpx;
	}

	.textLeft {
		font-size: 36rpx;
		font-weight: bold;
		position: relative;
		z-index: 1;
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
		color: #C0C0C0;
		float: right;
	}
</style>
