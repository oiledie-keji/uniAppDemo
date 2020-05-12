<template>
	<view class="guideContentList">
		<scroll-view scroll-x="true" class="guideContentScroll">
			<block v-for="(item, index) in guideContentList" :key="index">
				<view class="guideContent-item">
					<view class="guideContent-image">
						<image :src="item.url" mode=""></image>
						<text>{{item.text}}</text>
					</view>
					<view class="guideContent-text">
						<text>{{item.text1}}</text>
						<view class="guideContent-user">
							<image :src="item.url1" mode=""></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			guideContentList: {
				type: Array,
				default: [{
					url: '/static/images/common/shanghai.jpeg',
					text: '城市概括',
					text1: "第一次来上海",
					url1: '/static/images/common/shanghai.jpeg',
					name: '达人贡献'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					text: '城市概括',
					text1: "第一次来上海",
					url1: '/static/images/common/shanghai.jpeg',
					name: '达人贡献'
				}, {
					url: '/static/images/common/shanghai.jpeg',
					text: '城市概括',
					text1: "第一次来上海",
					url1: '/static/images/common/shanghai.jpeg',
					name: '达人贡献'
				}]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.guideContentList {
		margin-top: 30rpx;
	}

	.guideContentScroll {
		display: flex;
		white-space: nowrap;
	}

	.guideContent-item {
		flex: 1;
		display: inline-block;
		margin-right: 40rpx;
		background-color: #f8f8f8;
	}

	.guideContent-image {
		position: relative;
	}

	.guideContent-image image {
		width: 320rpx;
		height: 220rpx;
		border-radius: 8rpx;
	}

	.guideContent-image text {
		color: #FFFFFF;
		background-color: #333333;
		font-size: 34rpx;
		position: absolute;
		bottom: -10rpx;
		left: 10rpx;
	}

	.guideContent-text {
		margin-top: 10rpx;
		margin-left: 10rpx;
	}

	.guideContent-user image {
		width: 48rpx;
		height: 48rpx;
		border-radius: 50%;
		margin-right: 30rpx;
		vertical-align: middle;
	}

	.guideContent-user text {
		vertical-align: middle;
		font-size: 28rpx;
		color: #999999;
	}
</style>
