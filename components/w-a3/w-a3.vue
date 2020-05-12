<template>
	<view class="guideTitle">
		<view class="guideTitleLeft">
			<scroll-view scroll-x="true" class="guideTitleContent">
				<view class="guideTitleContent-item">
					<view>最佳旅行时间</view>
					<view>四季皆宜</view>
				</view>
				<view class="guideTitleContent-item">
					<view>最佳旅行时间</view>
					<view>四季皆宜</view>
				</view>
				<view class="guideTitleContent-item">
					<view>最佳旅行时间</view>
					<view>四季皆宜</view>
				</view>
			</scroll-view>
		</view>
		<view class="guideTitleRight">
			<view>
				更多攻略
			</view>
			<view>
				MORE
				<!-- <image src="" mode=""></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.guideTitle {
		height: 100%;
		background-color: #00CCFF;
	}

	.guideTitleLeft {
		display: inline-block;
		width: 80%;
	}

	.guideTitleRight {
		display: inline-block;
		width: 20%;
		font-size: 24rpx;
		padding: 20rpx 0;
		/* background-color: #ccffff; */
		/* padding: 20rpx; */
		/* height: 100%; */
		/* vertical-align: middle; */
	}
	.guideTitleRight > view {
		vertical-align: middle;
	}

	.guideTitleContent {
		display: flex;
		white-space: nowrap;
	}

	.guideTitleContent-item {
		flex: 1;
		text-align: center;
		display: inline-block;
		/* background-color: #0077bb; */
		padding: 20rpx;
	}
</style>
