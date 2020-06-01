<template>
	<view class="routesContent">
		<image :src="drivingRouteData.url" mode="" class="routesBg"></image>
		<view class="routesInfo">
			<view class="routesTitle">{{drivingRouteData.title}}</view>
			<view class="routesText">
				{{drivingRouteData.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			drivingRouteData: {
				type: Object,
				default: () => ({
					url: 'http://zijiabasha.oss-cn-shanghai.aliyuncs.com/static/编组 17 2.png',
					title: '绵山4日游线路',
					text: '6681人收藏*6个景点'
				})
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.routesContent {
		border-radius: 20rpx;
		width: 292rpx;
		box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
	}

	.routesBg {
		width: 292rpx;
		height: 292rpx;
	}

	.routesInfo {
		margin: 0 16rpx 8rpx;
	}

	.routesTitle {
		color: #333333;
		font-size: 28rpx;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.routesUserAvatar {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		vertical-align: middle;
	}

	.routesText {
		font-size: 24rpx;
		color: #999999;
	}
</style>
